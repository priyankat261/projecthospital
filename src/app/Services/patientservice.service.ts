import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {

  baseUrl='http://localhost:9090';
  constructor(private http:HttpClient) { }

  createPatient(patient: Object): Observable<Object> {
    console.log(patient);
    return this.http.post(`${this.baseUrl}/save`, patient); 
  }

  getonePatient(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getPatient/${id}`);
  }

  getAllPatient():any
  {
    return this.http.get(`${this.baseUrl}/getAllPatient`);
  }

  deletePatient(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }
}
