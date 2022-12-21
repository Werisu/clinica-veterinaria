import { Owner } from 'src/app/core/interfaces/owner';
import { environment } from './../../../environments/environment';
import { Owners } from './../interfaces/owner';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = `${environment.api}/proprietarios`;

@Injectable({
  providedIn: 'root'
})
export class OwnersService {

  constructor(private httpClient: HttpClient) { }

  public GetAll(): Observable<Owners>{
    return this.httpClient.get<Owners>(API);
  }

  public Post(payload: Owner): Observable<Owner>{
    return this.httpClient.post<Owner>(API, payload);
  }
}
