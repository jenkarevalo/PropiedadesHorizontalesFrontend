import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModelo } from '../modelos/login.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  constructor(
    private http: HttpClient
  ) { }

  validarUsuario(usuario: string, clave: string): Observable<LoginModelo>{
    const url: string = 'http://localhost:3000/validar-acceso';
    const credenciales = {
      usuario: usuario,
      clave: clave
    }

    return this.http.post<LoginModelo>(
      url,
      credenciales,
      {
        headers: new HttpHeaders({})
      }
    );
  }
}
