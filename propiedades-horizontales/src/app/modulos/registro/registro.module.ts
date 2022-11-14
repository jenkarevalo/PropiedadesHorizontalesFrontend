import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { CrearHabitanteComponent } from './habitantes/crear-habitante/crear-habitante.component';
import { EditarHabitanteComponent } from './habitantes/editar-habitante/editar-habitante.component';
import { BuscarHabitanteComponent } from './habitantes/buscar-habitante/buscar-habitante.component';
import { CrearAdministradorComponent } from './administrador/crear-administrador/crear-administrador.component';
import { BuscarComponent } from './administrador/buscar-administrador/buscar.component';
import { EditarComponent } from './administrador/editar/editar.component';
import { CrearTorreComponent } from './torre/crear-torre/crear-torre.component';
import { CrearApartamentoComponent } from './apartamento/crear-apartamento/crear-apartamento.component';
import { CrearConjuntoComponent } from './conjunto/crear-conjunto/crear-conjunto.component';
import { BuscarConjuntoComponent } from './conjunto/buscar-conjunto/buscar-conjunto.component';
import { EditarConjuntoComponent } from './conjunto/editar-conjunto/editar-conjunto.component';
import { CrearPropietarioComponent } from './propietario/crear-propietario/crear-propietario.component';
import { BuscarPropietarioComponent } from './propietario/buscar-propietario/buscar-propietario.component';
import { EditarPropietarioComponent } from './propietario/editar-propietario/editar-propietario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CrearHabitanteComponent,
    EditarHabitanteComponent,
    BuscarHabitanteComponent,
    CrearAdministradorComponent,
    BuscarComponent,
    EditarComponent,
    CrearTorreComponent,
    CrearApartamentoComponent,
    CrearConjuntoComponent,
    BuscarConjuntoComponent,
    EditarConjuntoComponent,
    CrearPropietarioComponent,
    BuscarPropietarioComponent,
    EditarPropietarioComponent
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegistroModule { }
