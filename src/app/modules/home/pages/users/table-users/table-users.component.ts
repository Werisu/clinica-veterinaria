import { EditUserComponent } from './../edit-user/edit-user.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';
import { User, Users } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/core/services/user.service';
import { NewRegistrationComponent } from '../new-registration/new-registration.component';
import Swal from 'sweetalert2';
import { NgbdSortableHeader, SortEvent } from 'src/app/core/directives/sortable.directive';
import { Observable, debounceTime, distinctUntilChanged, filter, switchMap, tap } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css']
})
export class TableUsersComponent implements OnInit, AfterViewInit {
  @ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() searchInput!: FormControl<any>;
  @Input() inputHTML: any;
  public user!: User;
  public formulario!: FormGroup;
  public users: Users = [];
  public filtroPeloInput: Users = [];
  public total$!: Observable<number>;
  public users$!: Observable<Users>;

  public moment = moment;

  public isBreak = false;

  displayedColumns: string[] = ['ID', 'nome', 'cpf', 'funcao', 'acoes'];
  dataSource = new MatTableDataSource(this.users);

  constructor(
    public dialog: MatDialog,
    public userService: UserService,
    private observer: BreakpointObserver,
    private cdr: ChangeDetectorRef
  ) {
    this.users$ = userService.users$;
    this.total$ = userService.total$;
  }

  ngOnInit(): void {
    this.getUsers();
  }

  ngAfterViewInit(): void {
    this.paginator._intl.itemsPerPageLabel = 'Itens por página';
    this.paginator._intl.nextPageLabel = 'Próximo';
    this.paginator._intl.previousPageLabel = 'Anterior';
    this.paginator._intl.firstPageLabel = 'Primeira página'
    this.paginator._intl.lastPageLabel = 'Última página'
    this.dataSource.paginator = this.paginator;

    this.observer.observe(['(max-width: 500px)']).subscribe((res) => {
      if (res.matches) {
        this.isBreak = true;
      } else {
        this.isBreak = false;
      }
    });

    this.searchInput.valueChanges.pipe(
      debounceTime(200),
      tap(() => {
        console.log('Fluxo do filtro');
      }),
      tap(console.log),
      filter((valorDigitado) => valorDigitado.length >= 3 || !valorDigitado.length),
      distinctUntilChanged(),
      switchMap((valorDigitado) => this.userService.getAll(valorDigitado)),
      tap(console.log)
    ).subscribe((users) => this.users = users);

    this.cdr.detectChanges();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(mode: 'edit' | 'create', user?: User) {
    if (mode == 'create') {
      const dialogRef = this.dialog.open(NewRegistrationComponent, {
        width: '50vw',
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);

        if (result == true) {
          this.getUsers();
        }
      });
    } else {
      const dialogRef = this.dialog.open(EditUserComponent, {
        width: '50vw',
        data: user,
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);

        if (result == true) {
          this.getUsers();
        }
      });
    }
  }

  public getUsers() {
    this.userService.getAll().subscribe({
      next: (users) => {
        this.users = users;
        this.dataSource.data = users
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  public deleteUser(user: User) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Tem certeza?',
      html: `Quer deletar o usuário <strong>${user.nome}</strong>? Você não será capaz de reverter isso!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confimar',
      cancelButtonText: 'Cancelar',
      customClass: {
        actions: 'gap-2',
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-secondary'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.delete(user.id ?? -1).subscribe({
          next: () => {
            swalWithBootstrapButtons.fire({
              title: 'Deletado!',
              html: `O usuário <strong>${user.nome}</strong>`,
              icon: 'success'
          });

            this.getUsers();
          },
          error: (err) => {
            alert('error');
          },
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: 'Cancelado',
          html: `O usuário <strong>${user.nome}</strong> está seguro :)`,
          icon: 'error'
      });
      }
    });
  }

  onSort({ column, direction }: any) {
		// resetting other headers
		this.headers.forEach((header) => {
			if (header.sortable !== column) {
				header.direction = '';
			}
		});

		this.userService.sortColumn = column;
		this.userService.sortDirection = direction;
	}
}
