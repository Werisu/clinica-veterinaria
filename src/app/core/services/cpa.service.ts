import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cpas } from '../interfaces/cpa-clinical-record-interfaces/cpa-table';
import { Observable } from 'rxjs';

const API = environment.api;

@Injectable({
  providedIn: 'root'
})
export class CpaService {

constructor(private httpCliente: HttpClient) { }

getPatientOwner(): Observable<Cpas>{
  return this.httpCliente.get<Cpas>(`${API}/cpa`);
}

}
