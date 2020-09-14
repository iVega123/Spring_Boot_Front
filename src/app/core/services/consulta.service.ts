import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Consulta } from '../models/consulta';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  private baseUrl = 'http://localhost:8081/eldoradobackend/api/v1/consultas';
  private postUrl = 'http://localhost:8081/eldoradobackend/api/v1/medicos'
  constructor(private http: HttpClient) { }

  getConsulta(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createConsulta(consultas: Consulta): Observable<Object> {
    return this.http.post(`${this.postUrl}/${consultas.medico_id}/clientes/${consultas.cliente_id}/consultas`, consultas);
  }

  updateConsulta(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteConsulta(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getConsultaList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
