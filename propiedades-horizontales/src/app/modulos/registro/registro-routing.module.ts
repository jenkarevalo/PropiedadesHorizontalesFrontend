import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarApartamentoComponent } from './apartamento/buscar-apartamento/buscar-apartamento.component';
import { CrearApartamentoComponent } from './apartamento/crear-apartamento/crear-apartamento.component';
import { EditarApartamentoComponent } from './apartamento/editar-apartamento/editar-apartamento.component';
import { BuscarConjuntoComponent } from './conjunto/buscar-conjunto/buscar-conjunto.component';
import { CrearConjuntoComponent } from './conjunto/crear-conjunto/crear-conjunto.component';
import { EditarConjuntoComponent } from './conjunto/editar-conjunto/editar-conjunto.component';
import { BuscarFacturaComponent } from './factura/buscar-factura/buscar-factura.component';
import { CrearFacturaComponent } from './factura/crear-factura/crear-factura.component';
import { EditarFacturaComponent } from './factura/editar-factura/editar-factura.component';
import { FactCreditoComponent } from './factura/fact-credito/fact-credito.component';
import { FactDebitoComponent } from './factura/fact-debito/fact-debito.component';
import { BuscarHabitanteComponent } from './habitantes/buscar-habitante/buscar-habitante.component';
import { CrearHabitanteComponent } from './habitantes/crear-habitante/crear-habitante.component';
import { EditarHabitanteComponent } from './habitantes/editar-habitante/editar-habitante.component';
import { BuscarPropietarioComponent } from './propietario/buscar-propietario/buscar-propietario.component';
import { CrearPropietarioComponent } from './propietario/crear-propietario/crear-propietario.component';
import { EditarPropietarioComponent } from './propietario/editar-propietario/editar-propietario.component';
import { BuscarTorreComponent } from './torre/buscar-torre/buscar-torre.component';
import { CrearTorreComponent } from './torre/crear-torre/crear-torre.component';
import { EditarTorreComponent } from './torre/editar-torre/editar-torre.component';

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
    path: "conjunto/crear-Conjunto",
    component: CrearConjuntoComponent,
  },
  {
    path: "conjunto/editar-Conjunto/:id",
    component: EditarConjuntoComponent
  },
  {
    path: "conjunto/buscar-Conjunto",
    component: BuscarConjuntoComponent
  },

  { 
    path: "crear-propietario",
    component: CrearPropietarioComponent
  },
  {
    path: "editar-Propietario/:id",
    component: EditarPropietarioComponent
  },
  {
    path: "propietario/buscar-Propietario",
    component: BuscarPropietarioComponent
  },
  { 
    path: "apartamento/crear-Apartamento",
    component: CrearApartamentoComponent
  },
  {
    path: "editar-Apartamento/:id",
    component: EditarApartamentoComponent
  },
  {
    path: "apartamento/buscar-Apartamento",
    component: BuscarApartamentoComponent
  },

  { 
    path: "crear-Torre",
    component: CrearTorreComponent
  },
  {
    path: "editar-Torre/:id",
    component: EditarTorreComponent
  },
  {
    path: "torre/buscar-Torre",
    component: BuscarTorreComponent
  },
  {
    path: "crear-Factura",
     component: CrearFacturaComponent
   },
  {
    path: "editar-Factura/:id",
    component: EditarFacturaComponent
  },
  {
    path: "factura/buscar-Factura",
    component: BuscarFacturaComponent
  },

  {
    path: "factura/factDebito",
    component: FactDebitoComponent
  },

  {
    path: "factura/factCredito",
    component: FactCreditoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroRoutingModule { }