import { Component, OnInit } from '@angular/core';
import { FacturaModelo } from 'src/app/modelos/factura.modelo';
import { FacturaService } from 'src/app/servicios/factura.service';

@Component({
  selector: 'app-fact-credito',
  templateUrl: './fact-credito.component.html',
  styleUrls: ['./fact-credito.component.css']
})
export class FactCreditoComponent implements OnInit {
  listaNotasCredito: FacturaModelo[] = [];

  constructor(
    private facturaService: FacturaService
  ) {
    this.getNotasCredito();
   }

  ngOnInit(): void {
  }

  getNotasCredito(){
    this.facturaService.getNotaCr()
    .subscribe({
      next: (facturas) =>{
        this.listaNotasCredito = facturas;
      },
      error: (error)=> console.log('error al consultar notas credito')
    });
  }



}
