import { Component, OnInit } from '@angular/core';
import { FacturaModelo } from 'src/app/modelos/factura.modelo';
import { FacturaService } from 'src/app/servicios/factura.service';

@Component({
  selector: 'app-fact-debito',
  templateUrl: './fact-debito.component.html',
  styleUrls: ['./fact-debito.component.css']
})
export class FactDebitoComponent implements OnInit {
  listaNotasDebito: FacturaModelo[] = [];


  constructor(
    private facturaService: FacturaService

  ) {
    this.getNotasDebito();
   }

  ngOnInit(): void {
  }


  getNotasDebito(){
    this.facturaService.getNotaDb()
    .subscribe({
      next: (facturas) =>{
        this.listaNotasDebito = facturas;
      },
      error: (error)=> console.log('error al consultar notas debito')
    });
  }   
}
