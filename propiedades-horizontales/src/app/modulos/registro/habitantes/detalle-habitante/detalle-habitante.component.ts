import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApartamentoModelo } from 'src/app/modelos/apartamento.modelo';
import { HabitanteModelo } from 'src/app/modelos/habitantes.modelo';
import { HabitantesService } from 'src/app/servicios/habitantes.service';

@Component({
  selector: 'app-detalle-habitante',
  templateUrl: './detalle-habitante.component.html',
  styleUrls: ['./detalle-habitante.component.css']
})
export class DetalleHabitanteComponent implements OnInit {
  id: string = '';

  apartamentoHabitante: ApartamentoModelo = new ApartamentoModelo;

  formHabitanteApto: FormGroup = this.formBuilder.group({
    'id': ['', [Validators.required]],
    'PrimerNombre': ['', [Validators.required]],
    'SegundoNombre': ['', [Validators.required]],
    'PrimerApellido': ['', [Validators.required]],
    'SegundoApellido': ['', [Validators.required]],
    'Documento': ['', [Validators.required]],
    'Telefono': ['', [Validators.required]],
    'Email': ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private habitantesService: HabitantesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getHabitanteXApartamento();
    this.getHabitanteApto();
  }

  getHabitanteXApartamento(){
    this.habitantesService.getHabitanteXApartamento(this.id)
    .subscribe((apartamentos: ApartamentoModelo) => {
      this.apartamentoHabitante = apartamentos;
    });
  }

  getHabitanteApto(){
    this.habitantesService.getHabitanteXId(this.id)
      .subscribe({
        next: (habitante) => {
          this.formHabitanteApto.controls['id'].setValue(habitante.id);
          this.formHabitanteApto.controls['PrimerNombre'].setValue(habitante.primerNombre);
          this.formHabitanteApto.controls['SegundoNombre'].setValue(habitante.segundoNombre);
          this.formHabitanteApto.controls['PrimerApellido'].setValue(habitante.primerApellido);
          this.formHabitanteApto.controls['SegundoApellido'].setValue(habitante.segundoApellido);
          this.formHabitanteApto.controls['Documento'].setValue(habitante.documento);
          this.formHabitanteApto.controls['Telefono'].setValue(habitante.telefono);
          this.formHabitanteApto.controls['Email'].setValue(habitante.email);
        },
        error: (error) => {
          console.log("error al buscar el habitante")
        }
      });
  }
}
