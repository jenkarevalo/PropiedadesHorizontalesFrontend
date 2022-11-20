import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacturaModelo } from 'src/app/modelos/factura.modelo';
import { FacturaService } from 'src/app/servicios/factura.service';

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.css']
})
export class CrearFacturaComponent implements OnInit {
  formFactura: FormGroup = this.formBuilder.group({
    'Fecha': ['', [Validators.required]],
    'FacturaNumero': ['', [Validators.required]],
    'TipoNota': ['', [Validators.required]],
    'Valor': ['', [Validators.required]],
    'Detalle': ['', [Validators.required]],
    'Total': ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private facturaService: FacturaService,
    private router: Router
  ) { }


  ngOnInit(): void {
  }

  guardarFactura() {
    let factura: FacturaModelo = {
      fecha: this.formFactura.controls['Fecha'].value,
      facturaNumero: this.formFactura.controls['FacturaNumero'].value,
      tipoNota: this.formFactura.controls['TipoNota'].value,
      valor: parseInt(this.formFactura.controls['Valor'].value),
      detalle: this.formFactura.controls['Detalle'].value,
      total: parseInt(this.formFactura.controls['Total'].value),
    }
    this.facturaService.crearFactura(factura)
      .subscribe({
        next: (datos) => {
          this.router.navigate(['/registro/factura/buscar-Factura']);
        },
        error: (error) => {
          console.log("Error al guardar la factura");
        }
      });
  }
}
