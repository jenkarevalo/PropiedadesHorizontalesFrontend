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
  id: string = '';

  formFactura: FormGroup = this.formBuilder.group({
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
  ){ }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getFactura();
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
          this.formFactura.controls['id'].setValue(factura.id);
          this.formFactura.controls['PrimerNombre'].setValue(factura.fecha);
          this.formFactura.controls['SegundoNombre'].setValue(factura.facturaNumero);
          this.formFactura.controls['PrimerApellido'].setValue(factura.tipoNota);
          this.formFactura.controls['SegundoApellido'].setValue(factura.valor);
          this.formFactura.controls['Documento'].setValue(factura.detalle);
          this.formFactura.controls['Telefono'].setValue(factura.total);
        },
        error: (error) => {
          console.log("error al buscar la factura")
        }
      });
  }
}