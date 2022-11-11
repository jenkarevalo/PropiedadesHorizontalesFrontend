import { Component, OnInit } from '@angular/core';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.component.html',
  styleUrls: ['./cerrar-sesion.component.css']
})
export class CerrarSesionComponent implements OnInit {

  constructor(
    private seguridadService: SeguridadService,
    private route: Router
    ) {}

  ngOnInit(): void {
    this.seguridadService.eliminarSesion();
    this.route.navigate(['/inicio'])
  }
}