import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PropietarioModelo } from 'src/app/modelos/propietario.modelo';
import { PropietarioService } from 'src/app/servicios/propietario.service';


@Component({
  selector: 'app-editar-propietario',
  templateUrl: './editar-propietario.component.html',
  styleUrls: ['./editar-propietario.component.css']
})
export class EditarPropietarioComponent implements OnInit {

  id: string ='';
  formPropietario: FormGroup = this.formBuilder.group( {
    'id': ['', [Validators.required]],
    'Primer Nombre': ['', [Validators.required]],
    'Segundo Nombre': ['', [Validators.required]],
    'Primer Apellido': ['', [Validators.required]],
    'Segundo Apellido': ['', [Validators.required]],
    'Documento': ['', [Validators.required]],
    'Telefono': ['', [Validators.required]],
    'Email': ['', [Validators.required]],
    'Clave': ['', [Validators.required]],
  
  });

  constructor(
    private formBuilder: FormBuilder,
    private propietarioService: PropietarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getPropietario();
  }

  guardarPropietario() {
    let propietario: PropietarioModelo={
      id: this.formPropietario.controls['id'].value,
      primerNombre: this.formPropietario.controls['Primer Nombre'].value,
      segundoNombre: this.formPropietario.controls['Segundo Nombre'].value,
      primerApellido: this.formPropietario.controls['Primer Apellido'].value,
      segundoApellido: this.formPropietario.controls['Segundo Apellido'].value,
      documento: this.formPropietario.controls['Documento'].value,
      telefono: this.formPropietario.controls['Telefono'].value,
      email: this.formPropietario.controls['Email'].value,
      clave: (this.formPropietario.controls['Clave'].value)
    }
    this.propietarioService.actualizarPropietario(propietario)
      .subscribe({
        next: (datos) => {
          this.router.navigate(['/registro/propietario/buscar-Propietario']);
        },
        error: (error) => {
          console.log("Error al guardar propietario")
        }
      });
  }

  getPropietario(){
    this.propietarioService.getPropietarioXId(this.id)
    .subscribe({
      next: (propietario)=>{
        this.formPropietario.controls['id'].setValue(propietario.id)
        this.formPropietario.controls['Primer Nombre'].setValue(propietario.primerNombre)
        this.formPropietario.controls['Segundo Nombre'].setValue(propietario.segundoNombre)
        this.formPropietario.controls['Primer Apellido'].setValue(propietario.primerApellido)
        this.formPropietario.controls['Segundo Apellido'].setValue(propietario.segundoApellido)
        this.formPropietario.controls['Documento'].setValue(propietario.documento)
        this.formPropietario.controls['Telefono'].setValue(propietario.telefono)
        this.formPropietario.controls['Email'].setValue(propietario.email)
        this.formPropietario.controls['Clave'].setValue(propietario.clave)
      },
      error: (error) =>{
        console.log("error al buscar el propietario")
      }
    })
  }

}
