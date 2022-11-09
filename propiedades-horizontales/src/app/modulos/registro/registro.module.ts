import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { CrearHabitanteComponent } from './habitantes/crear-habitante/crear-habitante.component';
import { EditarHabitanteComponent } from './habitantes/editar-habitante/editar-habitante.component';
import { BuscarHabitanteComponent } from './habitantes/buscar-habitante/buscar-habitante.component';
import { CrearPropietarioComponent } from './propietarios/crear-propietario/crear-propietario.component';
import { BuscarPropietarioComponent } from './propietarios/buscar-propietario/buscar-propietario.component';
import { EditarPropietarioComponent } from './propietarios/editar-propietario/editar-propietario.component';


@NgModule({
  declarations: [
    CrearHabitanteComponent,
    EditarHabitanteComponent,
    BuscarHabitanteComponent,
    CrearPropietarioComponent,
    BuscarPropietarioComponent,
    EditarPropietarioComponent
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule
  ]
})
export class RegistroModule { }
