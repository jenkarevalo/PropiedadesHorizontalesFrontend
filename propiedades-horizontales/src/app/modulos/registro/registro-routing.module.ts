import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarHabitanteComponent } from './habitantes/buscar-habitante/buscar-habitante.component';
import { CrearHabitanteComponent } from './habitantes/crear-habitante/crear-habitante.component';
import { EditarHabitanteComponent } from './habitantes/editar-habitante/editar-habitante.component';
import { BuscarPropietarioComponent } from './propietario/buscar-propietario/buscar-propietario.component';
import { CrearPropietarioComponent } from './propietario/crear-propietario/crear-propietario.component';
import { EditarPropietarioComponent } from './propietario/editar-propietario/editar-propietario.component';
import { BuscarComponent } from './torre/buscar/buscar.component';
import { CrearTorreComponent } from './torre/crear-torre/crear-torre.component';
import { EditarComponent } from './torre/editar/editar.component';

const routes: Routes = [
  {
    path: "crearHabitante",
    component: CrearHabitanteComponent
  },
  {
    path: "editarHabitante",
    component: EditarHabitanteComponent
  },
  {
    path: "buscarHabitante",
    component: BuscarHabitanteComponent
  },

  {
    path: "crearPropietario",
    component: CrearPropietarioComponent
  },
  {
    path: "editarPropietario",
    component: EditarPropietarioComponent
  },
  {
    path: "buscarPropietario",
    component: BuscarPropietarioComponent
  },
  {
    path: "crearTorre",
    component: CrearTorreComponent
  },
  {
    path: "editarTorre",
    component: EditarComponent
  },
  {
    path: "buscarTorre",
    component: BuscarComponent
  },

  {
    path: "crearConjunto",
    component: CrearTorreComponent
  },
  {
    path: "editarConjunto",
    component: EditarComponent
  },
  {
    path: "buscarConjunto",
    component: BuscarComponent
  },

  {
    path: "crearApartamento",
    component: CrearTorreComponent
  },
  {
    path: "editarApartamento",
    component: EditarComponent
  },
  {
    path: "buscarApartamento",
    component: BuscarComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroRoutingModule { }
