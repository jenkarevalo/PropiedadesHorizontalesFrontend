import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SeguridadService } from './seguridad.service';
import { FacturaModelo } from '../modelos/factura.modelo';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  url: string = 'http://localhost:3000';
  token: string = '';

  constructor(
    private http: HttpClient,
    private seguridadService: SeguridadService
  ) {
    this.token = this.seguridadService.obtenerToken();
  }

  getFacturas(): Observable<FacturaModelo[]> {
    return this.http.get<FacturaModelo[]>(`${this.url}/facturas`);
  }

  crearFactura(factura: FacturaModelo): Observable<FacturaModelo> {
    return this.http.post<FacturaModelo>(`${this.url}/facturas`, factura, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }

  actualizarFactura(factura: FacturaModelo): Observable<FacturaModelo> {
    return this.http.put<FacturaModelo>(`${this.url}/facturas/${factura.id}`, factura, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }

  getFacturaXId(id:string): Observable<FacturaModelo> {
    return this.http.get<FacturaModelo>(`${this.url}/facturas/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }
}
