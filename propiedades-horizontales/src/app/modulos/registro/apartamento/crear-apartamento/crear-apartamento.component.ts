import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApartamentoModelo } from 'src/app/modelos/apartamento.modelo';
import { ApartamentoService } from 'src/app/servicios/apartamento.service';


@Component({
  selector: 'app-crear-apartamento',
  templateUrl: './crear-apartamento.component.html',
  styleUrls: ['./crear-apartamento.component.css']
})
export class CrearApartamentoComponent implements OnInit {
  formApartamento: FormGroup = this.formBuilder.group({
    'Numero':['',[Validators.required]],
    'TorreId':['',[Validators.required]],
    'PropietarioId':['',[Validators.required]]
  });
  constructor(
    private formBuilder: FormBuilder,
    private apartamentoService: ApartamentoService,
    private router : Router
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

}
