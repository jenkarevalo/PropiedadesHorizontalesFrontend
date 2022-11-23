import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApartamentoModelo } from 'src/app/modelos/apartamento.modelo';
import { ConjuntoModelo } from 'src/app/modelos/conjunto.modelo';
import { TorreModelo } from 'src/app/modelos/torre.modelo';
import { ApartamentoService } from 'src/app/servicios/apartamento.service';
import { ConjuntoService } from 'src/app/servicios/conjunto.service';
import { TorreService } from 'src/app/servicios/torre.service';

@Component({
  selector: 'app-crear-torre',
  templateUrl: './crear-torre.component.html',
  styleUrls: ['./crear-torre.component.css']
})
export class CrearTorreComponent implements OnInit {
  listadoConjuntos: ConjuntoModelo [] = [];
  listadoApartamentos: ApartamentoModelo[]=[];

  formTorre: FormGroup = this.formBuilder.group({
    'Nombre':['',[Validators.required]],
    'Descripcion':['',[Validators.required]],
    'ConjuntoId':['',[Validators.required]],
    'Apartamento':['',[Validators.required]]
  });
  constructor(
    private formBuilder: FormBuilder,
    private torreService: TorreService,
    private conjuntoService: ConjuntoService,
    private apartamentoService: ApartamentoService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  guardarTorre(){
    let torre: TorreModelo = {
      nombre: this.formTorre.controls['Nombre'].value,
      descripcion: this.formTorre.controls['Descripcion'].value,
      conjuntoId: this.formTorre.controls['ConjuntoId'].value,
    }
    // se llama al servicio para guardar los datos
    this.torreService.crearTorre(torre)
      .subscribe({
        next: (datos) => {
          this.router.navigate(['/registro/torre/buscar-Torre']);
        },
        error: (error) => {
          console.log("Error al guardar torre")
        }
      }); 
  }

  getConjunto(){
    this.conjuntoService.getConjuntos()
      .subscribe ({
        next: (conjunto) =>{
          this.listadoConjuntos = conjunto;
        },
        error: (error) => console.log("Error al consultar los Conjuntos")
      })
  }

  getApartamento(){
    this.apartamentoService.getApartamento()
      .subscribe({
        next: (apartamento)=> {
          this.listadoApartamentos = apartamento;
        },
        error: (error) => console.log("Error al consultar los Apartamentos")
      })
  }

}
