import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApartamentoModelo } from 'src/app/modelos/apartamento.modelo';
import { ConjuntoModelo } from 'src/app/modelos/conjunto.modelo';
import { HabitanteModelo } from 'src/app/modelos/habitantes.modelo';
import { ApartamentoService } from 'src/app/servicios/apartamento.service';
import { ConjuntoService } from 'src/app/servicios/conjunto.service';
import { HabitantesService } from 'src/app/servicios/habitantes.service';
const cryptoJS = require('crypto-js');

@Component({
  selector: 'app-crear-habitante',
  templateUrl: './crear-habitante.component.html',
  styleUrls: ['./crear-habitante.component.css']
})
export class CrearHabitanteComponent implements OnInit {
  listadoConjuntos: ConjuntoModelo [] = [];
  listadoApartamentos: ApartamentoModelo[] =[];
  

  formHabitante: FormGroup = this.formBuilder.group({
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
     private conjuntoService: ConjuntoService,
     private apartamentoService: ApartamentoService
   ) { }


  ngOnInit(): void {
  }

  guardarHabitante() {
    let habitante: HabitanteModelo = {
      primerNombre: this.formHabitante.controls['PrimerNombre'].value,
      segundoNombre: this.formHabitante.controls['SegundoNombre'].value,
      primerApellido: this.formHabitante.controls['PrimerApellido'].value,
      segundoApellido: this.formHabitante.controls['SegundoApellido'].value,
      documento: this.formHabitante.controls['Documento'].value,
      telefono: this.formHabitante.controls['Telefono'].value,
      email: this.formHabitante.controls['Email'].value,
      clave: cryptoJS.MD5(this.formHabitante.controls['Clave'].value).toString(),
      conjuntoId: this.formHabitante.controls['Conjunto'].value,
      apartamentoId: this.formHabitante.controls['Apartamento'].value,
    }
    this.habitanteService.crearHabitante(habitante)
      .subscribe({
        next: (datos) => {
          this.router.navigate(['/registro/habitantes/buscar-Habitante']);
        },
        error: (error) => {
          console.log("Error al guardar el habitante");
        }
      });
  }

  getConjunto(){
    this.conjuntoService.getConjuntos()
      .subscribe({
        next: (conjunto) => {
          this.listadoConjuntos = conjunto;
        },
        error: (error) => console.log("Error al consultar el conjunto")
      })
  }

  getApartamento(){
    this.apartamentoService.getApartamento()
      .subscribe({
        next: (apartamento) => {
          this.listadoApartamentos = apartamento;
        },
        error: (error) => console.log("Error al consultar el apartamento")
      })
  }
}