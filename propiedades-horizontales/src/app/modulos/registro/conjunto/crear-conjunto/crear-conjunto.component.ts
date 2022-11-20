import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConjuntoModelo } from 'src/app/modelos/conjunto.modelo';
import { ConjuntoService } from 'src/app/servicios/conjunto.service';
const cryptoJS = require('crypto-js');

@Component({
  selector: 'app-crear-conjunto',
  templateUrl: './crear-conjunto.component.html',
  styleUrls: ['./crear-conjunto.component.css']
})
export class CrearConjuntoComponent implements OnInit {
  formConjunto: FormGroup = this.formBuilder.group({
    'Nombre': ['', [Validators.required]],
    'Nit': ['', [Validators.required]],
    'CuentaBancaria': ['', [Validators.required]],
    'Banco': ['', [Validators.required]],
    'NombreAdministrador': ['', [Validators.required]],
    'InteresXMora': ['', [Validators.required]],
    'InicioNumeroFactura': ['', [Validators.required]],
    'PresupuestoActual': ['', [Validators.required]],
    'Email': ['', [Validators.required]],
    'Clave': ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private conjuntoService: ConjuntoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

  }

  guardarConjunto() {
    let conjunto: ConjuntoModelo = {
      nombre: this.formConjunto.controls['Nombre'].value,
      nit: this.formConjunto.controls['Nit'].value,
      cuentaBancaria: this.formConjunto.controls['CuentaBancaria'].value,
      banco: this.formConjunto.controls['Banco'].value,
      nombreAdministrador: this.formConjunto.controls['NombreAdministrador'].value,
      interesXMora: parseInt (this.formConjunto.controls['InteresXMora'].value),
      inicioNumeroFactura: this.formConjunto.controls['InicioNumeroFactura'].value,
      presupuestoActual: parseInt (this.formConjunto.controls['PresupuestoActual'].value),
      email: this.formConjunto.controls['Email'].value,
      clave: this.formConjunto.controls['Clave'].value
    }
    this.conjuntoService.crearConjunto(conjunto)
      .subscribe({
        next: (datos) => {
          this.router.navigate(['/registro/conjunto/buscar-Conjunto']);
        },
        error: (error) => {
          console.log("Error al guardar el CONJUNTO");
        }
      });
  }

}
