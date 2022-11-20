import { Component, OnInit } from '@angular/core';
import { FacturaModelo } from 'src/app/modelos/factura.modelo';
import { FacturaService } from 'src/app/servicios/factura.service';

@Component({
  selector: 'app-buscar-factura',
  templateUrl: './buscar-factura.component.html',
  styleUrls: ['./buscar-factura.component.css']
})
export class BuscarFacturaComponent implements OnInit {
  listadoFacturas: FacturaModelo[] = [];
  
  constructor(
    private facturaService: FacturaService
  ) {
    this.getListadoFacturas();
   }

  ngOnInit(): void {
  }

  getListadoFacturas(){
    this.facturaService.getFacturas()
      .subscribe( (facturas: FacturaModelo[]) => {
        this.listadoFacturas = facturas;
      });
  }

}
