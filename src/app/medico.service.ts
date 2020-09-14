import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medico } from './medico';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  private baseUrl = 'http://localhost:8081/eldoradobackend/api/v1/medicos';

  constructor(private http: HttpClient) { }

  getMedico(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createMedico(medicos: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, medicos);
  }

  updateMedico(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteMedico(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getMedicosList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
