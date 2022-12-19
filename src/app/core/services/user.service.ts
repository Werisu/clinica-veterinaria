import { User, Users } from './../interfaces/user';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

const API = `${environment.api}/usuarios`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private httpClient: HttpClient) { }

public GetAll(): Observable<Users>{
  return this.httpClient.get<Users>(API);
}

public Post(payload: User): Observable<User>{
  return this.httpClient.post<User>(API, payload);
}

}
