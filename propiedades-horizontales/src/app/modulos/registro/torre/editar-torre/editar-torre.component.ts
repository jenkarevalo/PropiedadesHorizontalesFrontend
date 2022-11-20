import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TorreModelo } from 'src/app/modelos/torre.modelo';
import { TorreService } from 'src/app/servicios/torre.service';

@Component({
  selector: 'app-editar-torre',
  templateUrl: './editar-torre.component.html',
  styleUrls: ['./editar-torre.component.css']
})
export class EditarTorreComponent implements OnInit {
  id: string= '';
  formTorre: FormGroup = this.formBuilder.group({
    'id':['',[Validators.required]],
    'Nombre':['',[Validators.required]],
    'Descrpicion':['',[Validators.required]],
    'ConjutoId':['',[Validators.required]]
  });
  constructor(
    private formBuilder: FormBuilder,
    private torreService: TorreService,
    private router : Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getTorre();
  }

  guardarTorre(){
    let torre: TorreModelo = {
      id: this.formTorre.controls['id'].value,
      nombre: this.formTorre.controls['Nombre'].value,
      descripcion: this.formTorre.controls['Descrpicion'].value,
      conjuntoId: this.formTorre.controls['ConjutoId'].value,
    }
    // se llama al servicio para guardar los datos
    this.torreService.actualizarTorre(torre)
      .subscribe({
        next: (datos) => {
          this.router.navigate(['/registro/torre/buscar-Torre']);
        },
        error: (error) => {
          console.log("Error al guardar torre")
        }
      }); 
  }

  getTorre(){
    this.torreService.getTorrexid(this.id)
      .subscribe({
        next: (torre) =>{
          this.formTorre.controls['id'].setValue(torre.id);
          this.formTorre.controls['Nombre'].setValue(torre.nombre);
          this.formTorre.controls['Descripcion'].setValue(torre.descripcion); 
          this.formTorre.controls['ConjuntoId'].setValue(torre.conjuntoId);
        },
        error: (error) =>{
          console.log("error al buscar el propietario");
        }
      })
  }

}
