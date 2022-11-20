import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PropietarioModelo } from 'src/app/modelos/propietario.modelo';
import { PropietarioService } from 'src/app/servicios/propietario.service';
const cryptoJS = require('crypto-js');

@Component({
  selector: 'app-crear-propietario',
  templateUrl: './crear-propietario.component.html',
  styleUrls: ['./crear-propietario.component.css']
})
export class CrearPropietarioComponent implements OnInit {
  formPropietario: FormGroup = this.formBuilder.group( {
    'PrimerNombre': ['', [Validators.required]],
    'SegundoNombre': ['', [Validators.required]],
    'PrimerApellido': ['', [Validators.required]],
    'SegundoApellido': ['', [Validators.required]],
    'Documento': ['', [Validators.required]],
    'Telefono': ['', [Validators.required]],
    'Email': ['', [Validators.required]],
    'Clave': ['', [Validators.required]],
  
  });

  constructor(
    private formBuilder: FormBuilder,
    private propietarioService: PropietarioService,
    private router: Router
  ) { }
  

  ngOnInit(): void {
  }

  guardarPropietario() {
    let propietario: PropietarioModelo={
      primerNombre: this.formPropietario.controls['PrimerNombre'].value,
      segundoNombre: this.formPropietario.controls['SegundoNombre'].value,
      primerApellido: this.formPropietario.controls['PrimerApellido'].value,
      segundoApellido: this.formPropietario.controls['SegundoApellido'].value,
      documento: this.formPropietario.controls['Documento'].value,
      telefono: this.formPropietario.controls['Telefono'].value,
      email: this.formPropietario.controls['Email'].value,
      clave: cryptoJS.MD5(this.formPropietario.controls['Clave'].value).toString()
    }
    this.propietarioService.crearPropietario(propietario)
      .subscribe({
        next: (datos) => {
          this.router.navigate(['/registro/propietario/buscar-Propietario']);
        },
        error: (error) => {
          console.log("Error al guardar propietario")
        }
      });
  }
}
