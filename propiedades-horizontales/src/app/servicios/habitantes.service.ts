import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HabitanteModelo } from '../modelos/habitantes.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class HabitantesService {
  url: string = 'http://localhost:3000';
  token: string = '';

  constructor(
    private http: HttpClient,
    private seguridadService: SeguridadService
  ) {
    this.token = this.seguridadService.obtenerToken();
  }

  crearHabitante(habitante: HabitanteModelo): Observable<HabitanteModelo>{
    return this.http.post<HabitanteModelo>(`${this.url}/habitantes`, habitante,{
      headers: new HttpHeaders({
        'Authorization': 'Bearer $(this.token)}'
      })
    });
  }

  actualizarHabitante(habitante: HabitanteModelo): Observable<HabitanteModelo>{
    return this.http.put<HabitanteModelo>(`${this.url}/habitantes/${habitante.id}`, habitante,{
      headers: new HttpHeaders({
        'Authorization': 'Bearer $(this.token)}'
      })
    });
  }

  getHabitantes(): Observable<HabitanteModelo[]>{
    return this.http.get<HabitanteModelo[]>(`${this.url}/habitantes`);
  }
}