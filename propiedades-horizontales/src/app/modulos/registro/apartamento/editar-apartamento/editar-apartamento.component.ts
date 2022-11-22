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
    'Numero':['',[Validators.required]],
    'TorreId':['',[Validators.required]],
    'PropietarioId':['',[Validators.required]]
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
      numero: this.formApartamento.controls['Numero'].value,
      torreId: this.formApartamento.controls['TorreId'].value,
      propietarioId: this.formApartamento.controls['PropietarioId'].value,
    }
    // llamar al servicio para guardar la info del apto
    this.apartamentoService.actualizarApartamento(apartamento)
      .subscribe({
        next: (datos) =>{
          this.router.navigate(['/registro/apartamento/buscar-Apartamento']);
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
          this.formApartamento.controls['Numero'].setValue(apartamento.numero);
          this.formApartamento.controls['TorreId'].setValue(apartamento.torreId); 
          this.formApartamento.controls['PropietarioId'].setValue(apartamento.propietarioId);
        },
        error: (error) =>{
          console.log("error al buscar el apartamento");
        }
      })
  }
}
