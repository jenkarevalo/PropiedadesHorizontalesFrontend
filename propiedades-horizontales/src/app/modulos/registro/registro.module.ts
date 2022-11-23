import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroRoutingModule } from './registro-routing.module';
import { CrearHabitanteComponent } from './habitantes/crear-habitante/crear-habitante.component';
import { EditarHabitanteComponent } from './habitantes/editar-habitante/editar-habitante.component';
import { BuscarHabitanteComponent } from './habitantes/buscar-habitante/buscar-habitante.component';
import { CrearAdministradorComponent } from './administrador/crear-administrador/crear-administrador.component';
import { CrearConjuntoComponent } from './conjunto/crear-conjunto/crear-conjunto.component';
import { BuscarConjuntoComponent } from './conjunto/buscar-conjunto/buscar-conjunto.component';
import { EditarConjuntoComponent } from './conjunto/editar-conjunto/editar-conjunto.component';
import { CrearPropietarioComponent } from './propietario/crear-propietario/crear-propietario.component';
import { BuscarPropietarioComponent } from './propietario/buscar-propietario/buscar-propietario.component';
import { EditarPropietarioComponent } from './propietario/editar-propietario/editar-propietario.component';
import { BuscarApartamentoComponent } from './apartamento/buscar-apartamento/buscar-apartamento.component';
import { EditarApartamentoComponent } from './apartamento/editar-apartamento/editar-apartamento.component';
import { CrearApartamentoComponent } from './apartamento/crear-apartamento/crear-apartamento.component';
import { CrearTorreComponent } from './torre/crear-torre/crear-torre.component';
import { BuscarTorreComponent } from './torre/buscar-torre/buscar-torre.component';
import { EditarTorreComponent } from './torre/editar-torre/editar-torre.component';
import { CrearFacturaComponent } from './factura/crear-factura/crear-factura.component';
import { BuscarFacturaComponent } from './factura/buscar-factura/buscar-factura.component';
import { EditarFacturaComponent } from './factura/editar-factura/editar-factura.component';
import { DetalleHabitanteComponent } from './habitantes/detalle-habitante/detalle-habitante.component';
import { FactDebitoComponent } from './factura/fact-debito/fact-debito.component';
import { FactCreditoComponent } from './factura/fact-credito/fact-credito.component';

@NgModule({
  declarations: [
    CrearHabitanteComponent,
    EditarHabitanteComponent,
    BuscarHabitanteComponent,
    CrearAdministradorComponent,
    CrearConjuntoComponent,
    BuscarConjuntoComponent,
    EditarConjuntoComponent,
    CrearPropietarioComponent,
    BuscarPropietarioComponent,
    EditarPropietarioComponent,
    BuscarApartamentoComponent,
    EditarApartamentoComponent,
    CrearApartamentoComponent,
    CrearTorreComponent,
    BuscarTorreComponent,
    EditarTorreComponent,
    CrearFacturaComponent,
    BuscarFacturaComponent,
    EditarFacturaComponent,
    DetalleHabitanteComponent,
    FactDebitoComponent,
    FactCreditoComponent
  ],
  
  imports: [
    CommonModule,
    RegistroRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegistroModule { }