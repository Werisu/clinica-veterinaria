import { User, Users } from './../interfaces/user';
import { environment } from './../../../environments/environment';
import { Injectable, PipeTransform } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { BehaviorSubject, Observable, Subject, debounceTime, delay, of, switchMap, tap } from 'rxjs';
import { SortColumn, SortDirection } from '../directives/sortable.directive';
import { DecimalPipe } from '@angular/common';

const API = `${environment.api}/usuarios`;

/* */
interface SearchResult {
  users: Users;
  total: number;
}

interface State{
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

const compare = (v1: string | number | Date | undefined, v2: string | number| Date | undefined) => (v1! < v2! ? -1 : v1! > v2! ? 1 : 0);

function sort(users: Users, column: SortColumn, direction: string): Users {
  if (direction === '' || column === '' ) {
    return users;
  } else {
    return [...users].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(user: User, term: string, pipe: PipeTransform) {
  return (
    user.nome.toLowerCase().includes(term.toLowerCase()) ||
    user.cpf.includes(term) ||
    user.funcao.toLowerCase().includes(term.toLowerCase())
  );
}
/* */

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _loading$ = new BehaviorSubject<boolean>(true);
	private _search$ = new Subject<void>();
	private _users$ = new BehaviorSubject<Users>([]);
	private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
		page: 1,
		pageSize: 4,
		searchTerm: '',
		sortColumn: '',
		sortDirection: '',
	};

  constructor(private httpClient: HttpClient, private pipe: DecimalPipe) {
    this._search$
			.pipe(
				tap(() => this._loading$.next(true)),
				debounceTime(200),
				switchMap(() => this._search()),
				delay(200),
				tap(() => this._loading$.next(false)),
			)
			.subscribe((result) => {
				this._users$.next(result.users);
				this._total$.next(result.total);
			});

		this._search$.next();
  }

  public getAll(valor?:string): Observable<Users>{
    const params = valor ? new HttpParams().append('q',valor) : undefined;
    return this.httpClient.get<Users>(API, { params });
  }

  public post(payload: User): Observable<User>{
    return this.httpClient.post<User>(API, payload);
  }

  public put(payload: User){
    return this.httpClient.put(`${API}/${payload.id}`, payload);
  }

  public delete(id: number){
    return this.httpClient.delete(`${API}/${id}`);
  }

  private _search(): Observable<SearchResult> {
    let subject = new Subject<SearchResult>();

    this.getAll().subscribe((users) => {
      const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

      // 1. sort
      let users2 = sort(users, sortColumn, sortDirection);

      // 2. filter
      users2 = users2.filter((users2) => matches(users2, searchTerm, this.pipe));
      const total = users2.length;

      // 3. paginate
      users2 = users2.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);

      subject.next({ users: users2, total: total })
    })

		return subject.asObservable();
	}

  get users$() {
		return this._users$.asObservable();
	}
	get total$() {
		return this._total$.asObservable();
	}
	get loading$() {
		return this._loading$.asObservable();
	}
	get page() {
		return this._state.page;
	}
	get pageSize() {
		return this._state.pageSize;
	}
	get searchTerm() {
		return this._state.searchTerm;
	}

	set page(page: number) {
		this._set({ page });
	}
	set pageSize(pageSize: number) {
		this._set({ pageSize });
	}
	set searchTerm(searchTerm: string) {
		this._set({ searchTerm });
	}
	set sortColumn(sortColumn: SortColumn) {
		this._set({ sortColumn });
	}
	set sortDirection(sortDirection: SortDirection) {
		this._set({ sortDirection });
	}

	private _set(patch: Partial<State>) {
		Object.assign(this._state, patch);
		this._search$.next();
	}
}
