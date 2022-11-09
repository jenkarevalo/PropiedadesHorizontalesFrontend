import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { CrearHabitanteComponent } from './habitantes/crear-habitante/crear-habitante.component';
import { EditarHabitanteComponent } from './habitantes/editar-habitante/editar-habitante.component';
import { BuscarHabitanteComponent } from './habitantes/buscar-habitante/buscar-habitante.component';
import { CrearAdministradorComponent } from './administrador/crear-administrador/crear-administrador.component';
import { BuscarComponent } from './administrador/buscar/buscar.component';
import { EditarComponent } from './administrador/editar/editar.component';
import { CrearTorreComponent } from './torre/crear-torre/crear-torre.component';
import { CrearConjuntoComponent } from './conjunto/crear-conjunto/crear-conjunto.component';
import { CrearApartamentoComponent } from './apartamento/crear-apartamento/crear-apartamento.component';


@NgModule({
  declarations: [
    CrearHabitanteComponent,
    EditarHabitanteComponent,
    BuscarHabitanteComponent,
    CrearAdministradorComponent,
    BuscarComponent,
    EditarComponent,
    CrearTorreComponent,
    CrearConjuntoComponent,
    CrearApartamentoComponent
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule
  ]
})
export class RegistroModule { }
