import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarHabitanteComponent } from './habitantes/buscar-habitante/buscar-habitante.component';
import { CrearHabitanteComponent } from './habitantes/crear-habitante/crear-habitante.component';
import { EditarHabitanteComponent } from './habitantes/editar-habitante/editar-habitante.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroRoutingModule { }
