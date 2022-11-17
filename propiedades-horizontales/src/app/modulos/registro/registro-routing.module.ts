import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarApartamentoComponent } from './apartamento/buscar-apartamento/buscar-apartamento.component';
import { CrearApartamentoComponent } from './apartamento/crear-apartamento/crear-apartamento.component';
import { EditarApartamentoComponent } from './apartamento/editar-apartamento/editar-apartamento.component';
import { BuscarConjuntoComponent } from './conjunto/buscar-conjunto/buscar-conjunto.component';
import { CrearConjuntoComponent } from './conjunto/crear-conjunto/crear-conjunto.component';
import { EditarConjuntoComponent } from './conjunto/editar-conjunto/editar-conjunto.component';
import { BuscarHabitanteComponent } from './habitantes/buscar-habitante/buscar-habitante.component';
//import { CrearHabitanteComponent } from './habitantes/crear-habitante/crear-habitante.component';
import { EditarHabitanteComponent } from './habitantes/editar-habitante/editar-habitante.component';
import { BuscarPropietarioComponent } from './propietario/buscar-propietario/buscar-propietario.component';
import { CrearPropietarioComponent } from './propietario/crear-propietario/crear-propietario.component';
import { EditarPropietarioComponent } from './propietario/editar-propietario/editar-propietario.component';
import { BuscarTorreComponent } from './torre/buscar-torre/buscar-torre.component';
import { CrearTorreComponent } from './torre/crear-torre/crear-torre.component';
import { EditarTorreComponent } from './torre/editar-torre/editar-torre.component';

const routes: Routes = [
  // {
  //   path: "crear-Habitante",
  //   component: CrearHabitanteComponent
  // },
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
    path: "editar-Conjunto/: id",
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
    path: "crear-Apartamento",
    component: CrearApartamentoComponent
  },
  {
    path: "editar-Apartamento/: id",
    component: EditarApartamentoComponent
  },
  {
    path: "buscar-Apartamento",
    component: BuscarApartamentoComponent
  },

  { 
    path: "crear-Torre",
    component: CrearTorreComponent
  },
  {
    path: "editar-Torre/: id",
    component: EditarTorreComponent
  },
  {
    path: "buscar-Torre",
    component: BuscarTorreComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroRoutingModule { }