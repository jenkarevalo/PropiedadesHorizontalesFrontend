import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginModelo } from 'src/app/modelos/login.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  seInicioSesion: boolean = false;
  subs: Subscription = new Subscription();

  constructor(
  private seguridadService: SeguridadService,
  private route: Router
  ){ }

  ngOnInit(): void {
    console.log(`En Sesion ${this.seInicioSesion}`);
    this.subs = this.seguridadService.getDatosUsuarioEnSesion()
      .subscribe((datos: LoginModelo) => {
        this.seInicioSesion = datos.enSesion != null ? datos.enSesion: false;
        this.route.navigate(["/habitantes/buscar-Habitante"]);
        this.route.navigate(["/conjunto/buscar-Conjunto"]);
        this.route.navigate(["/propietario/buscar-Propietario"]);
      });
  }

  cerrarSesion(){
    this.seguridadService.eliminarSesion();
    this.seInicioSesion = false;
    this.route.navigate(['/inicio']);
  }
}