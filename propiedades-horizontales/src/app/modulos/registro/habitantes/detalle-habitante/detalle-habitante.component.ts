import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private habitantesService: HabitantesService,
    private route: ActivatedRoute,

  ) { 
   
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getHabitanteXApartamento();
  }

  getHabitanteXApartamento(){
    this.habitantesService.getHabitanteXApartamento(this.id)
    .subscribe((apartamentos: ApartamentoModelo) => {
      this.apartamentoHabitante = apartamentos;
    });
  }
}
