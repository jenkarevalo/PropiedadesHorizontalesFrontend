import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConjuntoModelo } from 'src/app/modelos/conjunto.modelo';
import { ConjuntoService } from 'src/app/servicios/conjunto.service';

@Component({
  selector: 'app-editar-conjunto',
  templateUrl: './editar-conjunto.component.html',
  styleUrls: ['./editar-conjunto.component.css']
})
export class EditarConjuntoComponent implements OnInit {
  id: string = '';

  formConjunto: FormGroup = this.formBuilder.group({
    'id': ['', [Validators.required]],
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
    this.id = this.route.snapshot.params['id'];
    this.getConjunto();
  }

  guardarConjunto() {
    let conjunto: ConjuntoModelo = {
      id: this.formConjunto.controls['id'].value,
      nombre: this.formConjunto.controls['Nombre'].value,
      nit: this.formConjunto.controls['Nit'].value,
      cuentaBancaria: this.formConjunto.controls['CuentaBancaria'].value,
      banco: this.formConjunto.controls['Banco'].value,
      nombreAdministrador: this.formConjunto.controls['NombreAdministrador'].value,
      interesXMora: parseInt(this.formConjunto.controls['InteresXMora'].value),
      inicioNumeroFactura: this.formConjunto.controls['InicioNumeroFactura'].value,
      presupuestoActual: parseInt(this.formConjunto.controls['PresupuestoActual'].value),
      email: this.formConjunto.controls['Email'].value,
      clave: this.formConjunto.controls['Clave'].value
    }
    this.conjuntoService.actualizarConjunto(conjunto)
      .subscribe({
        next: (datos) => {
          this.router.navigate(['/registro/conjunto/buscar-Conjunto']);
        },
        error: (error) => {
          console.log("Error al guardar el CONJUNTO");
        }
      });
      
  }

    getConjunto() {
      this.conjuntoService.getConjuntoXId(this.id)
      .subscribe({
        next: (conjunto) => {
          this.formConjunto.controls['id'].setValue(conjunto.id);
          this.formConjunto.controls['Nombre'].setValue(conjunto.nombre);
          this.formConjunto.controls['Nit'].setValue(conjunto.nit);
          this.formConjunto.controls['CuentaBancaria'].setValue(conjunto.cuentaBancaria);
          this.formConjunto.controls['Banco'].setValue(conjunto.banco);
          this.formConjunto.controls['NombreAdministrador'].setValue(conjunto.nombreAdministrador);
          this.formConjunto.controls['InteresXMora'].setValue(conjunto.interesXMora);
          this.formConjunto.controls['InicioNumeroFactura'].setValue(conjunto.inicioNumeroFactura);
          this.formConjunto.controls['PresupuestoActual'].setValue(conjunto.presupuestoActual);
          this.formConjunto.controls['Email'].setValue(conjunto.email);
          this.formConjunto.controls['Clave'].setValue(conjunto.clave);
        },
        error: (error) => {
          console.log("error al buscar el Conjunto")
        }
      });
    } 
}  

