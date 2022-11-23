import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FacturaModelo } from 'src/app/modelos/factura.modelo';
import { FacturaService } from 'src/app/servicios/factura.service';

@Component({
  selector: 'app-editar-factura',
  templateUrl: './editar-factura.component.html',
  styleUrls: ['./editar-factura.component.css']
})
export class EditarFacturaComponent implements OnInit {
  id: string ='';

  formFact: FormGroup = this.formBuilder.group({
    'id': ['', [Validators.required]],
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
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getFactura();
  }

  guardarFactura() {
    let factura: FacturaModelo = {
      id: this.formFact.controls['id'].value,
      fecha: this.formFact.controls['Fecha'].value,
      facturaNumero: this.formFact.controls['FacturaNumero'].value,
      tipoNota: this.formFact.controls['TipoNota'].value,
      valor: parseInt(this.formFact.controls['Valor'].value),
      detalle: this.formFact.controls['Detalle'].value,
      total: parseInt(this.formFact.controls['Total'].value),
    }
    this.facturaService.actualizarFactura(factura)
      .subscribe({
        next: (datos) => {
          this.router.navigate(['/registro/factura/buscar-Factura']);
        },
        error: (error) => {
          console.log("Error al guardar la factura");
        }
      });
  }

  getFactura() {
    this.facturaService.getFacturaXId(this.id)
      .subscribe({
        next: (factura) => {
          this.formFact.controls['id'].setValue(factura.id);
          this.formFact.controls['Fecha'].setValue(factura.fecha);
          this.formFact.controls['FacturaNumero'].setValue(factura.facturaNumero);
          this.formFact.controls['TipoNota'].setValue(factura.tipoNota);
          this.formFact.controls['Valor'].setValue(factura.valor);
          this.formFact.controls['Detalle'].setValue(factura.detalle);
          this.formFact.controls['Total'].setValue(factura.total);
        },
        error: (error) => {
          console.log("error al buscar la factura")
        }
      });
  }
}