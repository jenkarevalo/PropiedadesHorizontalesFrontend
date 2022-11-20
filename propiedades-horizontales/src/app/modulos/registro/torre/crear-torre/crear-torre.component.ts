import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TorreModelo } from 'src/app/modelos/torre.modelo';
import { TorreService } from 'src/app/servicios/torre.service';

@Component({
  selector: 'app-crear-torre',
  templateUrl: './crear-torre.component.html',
  styleUrls: ['./crear-torre.component.css']
})
export class CrearTorreComponent implements OnInit {
  formTorre: FormGroup = this.formBuilder.group({
    'Nombre':['',[Validators.required]],
    'Descrpicion':['',[Validators.required]],
    'ConjutoId':['',[Validators.required]]
  });
  constructor(
    private formBuilder: FormBuilder,
    private torreService: TorreService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  guardarTorre(){
    let torre: TorreModelo = {
      nombre: this.formTorre.controls['Nombre'].value,
      descripcion: this.formTorre.controls['Descrpicion'].value,
      conjuntoId: this.formTorre.controls['ConjutoId'].value,
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

}
