import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarConjuntoComponent } from './conjunto/buscar-conjunto/buscar-conjunto.component';
import { CrearConjuntoComponent } from './conjunto/crear-conjunto/crear-conjunto.component';
import { EditarConjuntoComponent } from './conjunto/editar-conjunto/editar-conjunto.component';
import { BuscarFacturacionComponent } from './facturacion/buscar-facturacion/buscar-facturacion.component';
import { CrearFacturacionComponent } from './facturacion/crear-facturacion/crear-facturacion.component';
import { EditarFacturacionComponent } from './facturacion/editar-facturacion/editar-facturacion.component';
import { BuscarHabitanteComponent } from './habitantes/buscar-habitante/buscar-habitante.component';
import { CrearHabitanteComponent } from './habitantes/crear-habitante/crear-habitante.component';
import { EditarHabitanteComponent } from './habitantes/editar-habitante/editar-habitante.component';
import { BuscarPropietarioComponent } from './propietario/buscar-propietario/buscar-propietario.component';
import { CrearPropietarioComponent } from './propietario/crear-propietario/crear-propietario.component';
import { EditarPropietarioComponent } from './propietario/editar-propietario/editar-propietario.component';

const routes: Routes = [
  {
    path: "crear-Habitante",
    component: CrearHabitanteComponent
  },
  {
    path: "editar-Habitante/:id",
    component: EditarHabitanteComponent
  },
  {
    path: "habitantes/buscar-Habitante",
    component: BuscarHabitanteComponent
  },
  {
    path: "crear-Conjunto",
    component: CrearConjuntoComponent
  },
  {
    path: "editar-Conjunto",
    component: EditarConjuntoComponent
  },
  {
    path: "conjunto/buscar-Conjunto",
    component: BuscarConjuntoComponent
  },

  { 
    path: "crear-Propietario",
    component: CrearPropietarioComponent
  },
  {
    path: "editar-Propietario",
    component: EditarPropietarioComponent
  },
  {
    path: "propietario/buscar-Propietario",
    component: BuscarPropietarioComponent
  },
  { 
    path: "crear-Facturacion",
    component: CrearFacturacionComponent
  },
  {
    path: "editar-Facturacion",
    component: EditarFacturacionComponent
  },
  {
    path: "facturacion/buscar-Facturacion",
    component: BuscarFacturacionComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroRoutingModule { }