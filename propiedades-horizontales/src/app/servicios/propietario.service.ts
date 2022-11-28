import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PropietarioModelo } from '../modelos/propietario.modelo';
import { SeguridadService } from './seguridad.service';
import { Observable } from 'rxjs';
import { ApartamentoModelo } from '../modelos/apartamento.modelo';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {
  url: string = 'http://localhost:3000';
  token: string= '';

  constructor(
    private http: HttpClient,
    private seguridadService: SeguridadService
  ) {
    this.token = this.seguridadService.obtenerToken();
  }

  crearPropietario(propietario: PropietarioModelo): Observable<PropietarioModelo>{
    return this.http.post<PropietarioModelo>(`${this.url}/propietarios`, propietario,{
      headers: new HttpHeaders({
        'Authorization': `Bearer $(this.token)}`
      })
    });
  }

  actualizarPropietario(propietario: PropietarioModelo): Observable<PropietarioModelo>{
    return this.http.put<PropietarioModelo>(`${this.url}/propietarios/${propietario.id}`, propietario,{
      headers: new HttpHeaders({
        'Authorization': `Bearer $(this.token)}`
      })
    });
  }

  getPropietario(): Observable<PropietarioModelo[]>{
    return this.http.get<PropietarioModelo[]>(`${this.url}/propietarios`);
  }

  getPropietarioXId(id: string):Observable<PropietarioModelo> {
    return this.http.get<PropietarioModelo>(`${this.url}/propietarios/${id}`,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })  
    });
  }
  getPropietarioApartamento(id: string): Observable<ApartamentoModelo[]> {
    return this.http.get<ApartamentoModelo[]>(`${this.url}/propietarios/${id}/apartamentos`);
  }

}
