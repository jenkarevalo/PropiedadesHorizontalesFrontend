import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TorreModelo } from '../modelos/torre.modelo';

@Injectable({
  providedIn: 'root'
})
export class TorreService {
  //url base del servicio 
    url: string = 'http://localhost:3000';
    constructor(
      private http: HttpClient
  ) { }
  
  crearTorre(torre: TorreModelo): Observable<TorreModelo>{
    return this.http.post<TorreModelo>(`${this.url}/torres`, torre);
  }
  
  actualizarTorre(torre: TorreModelo): Observable<TorreModelo>{
    return this.http.put<TorreModelo>(`${this.url}/torres/${torre.id}`, torre);
  }

  getTorres(): Observable<TorreModelo[]>{
    return this.http.get<TorreModelo[]>(`${this.url}/torres`);
  }

  getTorrexid(id:string): Observable<TorreModelo>{
    return this.http.get<TorreModelo>(`${this.url}/torres/${id}`);
  }

  eliminarTorre(id:string): Observable<TorreModelo>{
    return this.http.delete<TorreModelo>(`${this.url}/torres/${id}`);
  }

}