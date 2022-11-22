import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HabitanteModelo } from 'src/app/modelos/habitantes.modelo';
import { ApartamentoService } from 'src/app/servicios/apartamento.service';
import { ConjuntoService } from 'src/app/servicios/conjunto.service';
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
    'PrimerNombre': ['', [Validators.required]],
    'SegundoNombre': ['', [Validators.required]],
    'PrimerApellido': ['', [Validators.required]],
    'SegundoApellido': ['', [Validators.required]],
    'Documento': ['', [Validators.required]],
    'Telefono': ['', [Validators.required]],
    'Email': ['', [Validators.required]],
    'Clave': ['', [Validators.required]],
    'Conjunto': ['', [Validators.required]],
    'Apartamento': ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private habitanteService: HabitantesService,
    private router: Router,
    private route: ActivatedRoute,
    private conjuntoService: ConjuntoService,
    private apartamentoService: ApartamentoService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getHabitante();
  }

  guardarHabitante() {
    let habitante: HabitanteModelo = {
      id: this.formHabitante.controls['id'].value,
      primerNombre: this.formHabitante.controls['PrimerNombre'].value,
      segundoNombre: this.formHabitante.controls['SegundoNombre'].value,
      primerApellido: this.formHabitante.controls['PrimerApellido'].value,
      segundoApellido: this.formHabitante.controls['SegundoApellido'].value,
      documento: this.formHabitante.controls['Documento'].value,
      telefono: this.formHabitante.controls['Telefono'].value,
      email: this.formHabitante.controls['Email'].value,
      clave: this.formHabitante.controls['Clave'].value,
      conjuntoId: this.formHabitante.controls['Conjunto'].value,
      apartamentoId: this.formHabitante.controls['Apartamento'].value,
    }
    this.habitanteService.actualizarHabitante(habitante)
      .subscribe({
        next: (datos) => {
          this.router.navigate(['/registro/habitantes/buscar-Habitante']);
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
          this.formHabitante.controls['PrimerNombre'].setValue(habitante.primerNombre);
          this.formHabitante.controls['SegundoNombre'].setValue(habitante.segundoNombre);
          this.formHabitante.controls['PrimerApellido'].setValue(habitante.primerApellido);
          this.formHabitante.controls['SegundoApellido'].setValue(habitante.segundoApellido);
          this.formHabitante.controls['Documento'].setValue(habitante.documento);
          this.formHabitante.controls['Telefono'].setValue(habitante.telefono);
          this.formHabitante.controls['Email'].setValue(habitante.email);
          this.formHabitante.controls['Clave'].setValue(habitante.clave);
        },
        error: (error) => {
          console.log("error al buscar el habitante")
        }
      });
  }
}