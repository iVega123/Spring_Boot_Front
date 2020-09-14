import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseUrl = 'http://localhost:8081/eldoradobackend/api/v1/clientes';

  constructor(private http: HttpClient) { }

  getCliente(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCliente(medicos: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, medicos);
  }

  updateCliente(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCliente(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getClienteList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
