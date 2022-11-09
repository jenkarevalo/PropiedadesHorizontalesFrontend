import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPropietarioComponent } from './propietarios/crear-propietario/crear-propietario.component';

const routes: Routes = [
 { 
  
 },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroRoutingModule { }
