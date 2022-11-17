import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HabitanteModelo } from 'src/app/modelos/habitantes.modelo';
import { HabitantesService } from 'src/app/servicios/habitantes.service';

@Component({
  selector: 'app-editar-habitante',
  templateUrl: './editar-habitante.component.html',
  styleUrls: ['./editar-habitante.component.css']
})
export class EditarHabitanteComponent implements OnInit {
  id: string = '';

  formHabitante: FormGroup = this.formBuilder.group({
    'id': ['', [Validators.required]],
    'primerNombre': ['', [Validators.required]],
    'segundoNombre': ['', [Validators.required]],
    'primerApellido': ['', [Validators.required]],
    'segundoApellido': ['', [Validators.required]],
    'Documento': ['', [Validators.required]],
    'Telefono': ['', [Validators.required]],
    'Email': ['', [Validators.required]],
    'clave': ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private habitanteService: HabitantesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getHabitante();
  }

  guardarHabitante() {
    let habitante: HabitanteModelo = {
      id: this.formHabitante.controls['id'].value,
      primerNombre: this.formHabitante.controls['primerNombre'].value,
      segundoNombre: this.formHabitante.controls['segundoNombre'].value,
      primerApellido: this.formHabitante.controls['primerApellido'].value,
      segundoApellido: this.formHabitante.controls['segundoApellido'].value,
      documento: this.formHabitante.controls['documento'].value,
      telefono: this.formHabitante.controls['telefono'].value,
      email: this.formHabitante.controls['email'].value,
      clave: this.formHabitante.controls['clave'].value
    }
    this.habitanteService.actualizarHabitante(habitante)
      .subscribe({
        next: (datos) => {
          this.router.navigate(['/registro/buscar-Habitante']);
        },
        error: (error) => {
          console.log("Error al guardar el habitante");
        }
      });
  }

  getHabitante(){
    this.habitanteService.getHabitanteXId(this.id)
      .subscribe({
        next: (habitante) => {
          this.formHabitante.controls['id'].setValue(habitante.id);
          this.formHabitante.controls['primerNombre'].setValue(habitante.primerNombre);
          this.formHabitante.controls['segundoNombre'].setValue(habitante.segundoNombre);
          this.formHabitante.controls['primerApellido'].setValue(habitante.primerApellido);
          this.formHabitante.controls['segundoApellido'].setValue(habitante.segundoApellido);
          this.formHabitante.controls['documento'].setValue(habitante.documento);
          this.formHabitante.controls['telefono'].setValue(habitante.telefono);
          this.formHabitante.controls['email'].setValue(habitante.email);
          this.formHabitante.controls['clave'].setValue(habitante.clave);
        },
        error: (error) => {
          console.log("error al buscar el habitante")
        }
      });
  }
}
