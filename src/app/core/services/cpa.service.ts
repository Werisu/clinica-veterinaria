import { AnamneseEspecial, AnamneseGeral, Cpa } from './../interfaces/cpa-clinical-record-interfaces/cpa-table';
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

getAnamnseGeral(): Observable<AnamneseGeral[]>{
  return this.httpCliente.get<AnamneseGeral[]>(`${API}/anamneseGeral`);
}

getAnamnseGeralById(id: number){
  return this.httpCliente.get<AnamneseGeral>(`${API}/anamneseGeral/${id}`);
}

postCPA(cpa: Cpa){
  return this.httpCliente.post<Cpa>(`${API}/cpa`, cpa);
}

postAnamnseGeral(anamneseGeral: AnamneseGeral): Observable<AnamneseGeral>{
  return this.httpCliente.post<AnamneseGeral>(`${API}/anamneseGeral`, anamneseGeral);
}

deleteAnamnseGeral(id:number) {
  return this.httpCliente.delete(`${API}/anamneseGeral/${id}`);
}

postAnamneseEspecial(anamneseEspecial: AnamneseEspecial): Observable<AnamneseEspecial>{
  return this.httpCliente.post<AnamneseEspecial>(`${API}/anamneseEspecial`, anamneseEspecial);
}

}
