import { Users } from 'src/app/core/interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = `${environment.api}/usuarios`

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private httpClient: HttpClient) { }

}
