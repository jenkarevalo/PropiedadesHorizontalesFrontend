import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApartamentoModelo } from 'src/app/modelos/apartamento.modelo';
import { ApartamentoService } from 'src/app/servicios/apartamento.service';

@Component({
  selector: 'app-editar-apartamento',
  templateUrl: './editar-apartamento.component.html',
  styleUrls: ['./editar-apartamento.component.css']
})
export class EditarApartamentoComponent implements OnInit {
  id: string= '';
  formApartamento: FormGroup = this.formBuilder.group({
    'id':['',[Validators.required]],
    'numero':['',[Validators.required]],
    'torreId':['',[Validators.required]],
    'propietarioId':['',[Validators.required]]
  });
  constructor(
    private formBuilder: FormBuilder,
    private apartamentoService: ApartamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getApartamento();
  }

  guardarApartamento(){
    let apartamento: ApartamentoModelo = {
      id: this.formApartamento.controls['id'].value,
      numero: this.formApartamento.controls['numero'].value,
      torreId: this.formApartamento.controls['torreId'].value,
      propietarioId: this.formApartamento.controls['propietarioId'].value,
    }
    // llamar al servicio para guardar la info del apto
    this.apartamentoService.actualizarApartamento(apartamento)
      .subscribe({
        next: (datos) =>{
          this.router.navigate(['/registro/buscar-apartamento']);
        },
        error: (error) => {
          console.log("Error al guardar el Apartamento");
        }
      });
  }
  getApartamento(){
    this.apartamentoService.getApartamentoxid(this.id)
      .subscribe({
        next: (apartamento) =>{
          this.formApartamento.controls['id'].setValue(apartamento.id);
          this.formApartamento.controls['numero'].setValue(apartamento.numero);
          this.formApartamento.controls['torreId'].setValue(apartamento.torreId); 
          this.formApartamento.controls['propietarioId'].setValue(apartamento.propietarioId);
        },
        error: (error) =>{
          console.log("error al buscar el propietario");
        }
      })
  }
}
