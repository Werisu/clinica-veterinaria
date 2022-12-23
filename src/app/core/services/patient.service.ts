import { Patient } from './../interfaces/patient';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patients } from '../interfaces/patient';

const API = `${environment.api}/paciente`;

@Injectable({
  providedIn: 'root'
})
export class PatientService {

constructor(private httpClient: HttpClient) { }

public getAll(): Observable<Patients>{
  return this.httpClient.get<Patients>(API);
}

public post(payload: Patient): Observable<Patient>{
  return this.httpClient.post<Patient>(API, payload);
}

public put(payload: Patient){
  return this.httpClient.put<Patient>(`${API}/${payload.id}`, payload);
}

public delete(id: number){
  return this.httpClient.delete(`${API}/${id}`);
}

}
