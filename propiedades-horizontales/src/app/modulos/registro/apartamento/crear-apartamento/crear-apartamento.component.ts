import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApartamentoModelo } from 'src/app/modelos/apartamento.modelo';
import { PropietarioModelo } from 'src/app/modelos/propietario.modelo';
import { TorreModelo } from 'src/app/modelos/torre.modelo';
import { ApartamentoService } from 'src/app/servicios/apartamento.service';
import { PropietarioService } from 'src/app/servicios/propietario.service';
import { TorreService } from 'src/app/servicios/torre.service';


@Component({
  selector: 'app-crear-apartamento',
  templateUrl: './crear-apartamento.component.html',
  styleUrls: ['./crear-apartamento.component.css']
})
export class CrearApartamentoComponent implements OnInit {
  listadoTorre: TorreModelo [] = [];
  listadoPropietarios: PropietarioModelo [] = [];

  formApartamento: FormGroup = this.formBuilder.group({
    'Numero':['',[Validators.required]],
    'TorreId':['',[Validators.required]],
    'PropietarioId':['',[Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private apartamentoService: ApartamentoService,
    private router : Router,
    private torreService: TorreService,
    private propietarioService: PropietarioService
  ) { }

  ngOnInit(): void {
  }

  guardarApartamento(){
    let apartamento: ApartamentoModelo = {
      numero: this.formApartamento.controls['Numero'].value,
      torreId: this.formApartamento.controls['TorreId'].value,
      propietarioId: this.formApartamento.controls['PropietarioId'].value,
    }
    // llamar al servicio para guardar la info del apto
    this.apartamentoService.crearApartamento(apartamento)
      .subscribe({
        next: (datos) =>{
          this.router.navigate(['/registro/apartamento/buscar-Apartamento']);
        },
        error: (error) => {
          console.log("Error al guardar el Apartamento");
        }
      });
  }

  getTorre(){
    this.torreService.getTorres()
      .subscribe({
        next: (torre) => {
          this.listadoTorre = torre;
        },
        error: (error) => console.log("Error al consultar la torre")
      })
  }

  getPropietario(){
    this.propietarioService.getPropietario()
      .subscribe({
        next: (propietario) => {
          this.listadoPropietarios = propietario;
        },
        error: (error) => console.log("Error al consultar el propietario")
      })
  }
}
