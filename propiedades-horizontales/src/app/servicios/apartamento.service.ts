import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApartamentoModelo } from '../modelos/apartamento.modelo';


@Injectable({
  providedIn: 'root'
})
export class ApartamentoService {
  //url base del servicio 
  url: string = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  /*obtenerApartamentos(): Observable<ApartamentoModelo[]>{
    return this.http.get<ApartamentoModelo[]>(`${this.url}/apartamentos`);
  }*/

  crearApartamento(apartamento: ApartamentoModelo): Observable<ApartamentoModelo> {
    return this.http.post<ApartamentoModelo>(`${this.url}/apartamentos`, apartamento);
  }

  actualizarApartamento(apartamento: ApartamentoModelo): Observable<ApartamentoModelo> {
    return this.http.put<ApartamentoModelo>(`${this.url}/apartamentos/${apartamento.id}`, apartamento);
  }

  getApartamento(): Observable<ApartamentoModelo[]> {
    return this.http.get<ApartamentoModelo[]>(`${this.url}/apartamentos`);
  }

  getApartamentoxid(id: string): Observable<ApartamentoModelo> {
    return this.http.get<ApartamentoModelo>(`${this.url}/apartamentos/${id}`);

  }

  eliminarApartamento(id: string): Observable<ApartamentoModelo> {
    return this.http.delete<ApartamentoModelo>(`${this.url}/apartamentos/${id}`);
  }
}
