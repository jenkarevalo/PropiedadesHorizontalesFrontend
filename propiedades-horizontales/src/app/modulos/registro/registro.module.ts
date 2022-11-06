import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { CrearHabitanteComponent } from './habitantes/crear-habitante/crear-habitante.component';
import { EditarHabitanteComponent } from './habitantes/editar-habitante/editar-habitante.component';
import { BuscarHabitanteComponent } from './habitantes/buscar-habitante/buscar-habitante.component';


@NgModule({
  declarations: [
    CrearHabitanteComponent,
    EditarHabitanteComponent,
    BuscarHabitanteComponent
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule
  ]
})
export class RegistroModule { }
