import { Component, OnInit } from '@angular/core';
import { HabitanteModelo } from 'src/app/modelos/habitantes.modelo';
import { HabitantesService } from 'src/app/servicios/habitantes.service';

@Component({
  selector: 'app-detalle-habitante',
  templateUrl: './detalle-habitante.component.html',
  styleUrls: ['./detalle-habitante.component.css']
})
export class DetalleHabitanteComponent implements OnInit {

  listaHabitantes: HabitanteModelo[] = [];

  constructor(
    private habitantesService: HabitantesService
  ) { 
    this.getlistaApato('id');
  }

  ngOnInit(): void {
  }

  getlistaApato(id: string){
    this.habitantesService.getHabitanteXApartamento(id)
    .subscribe((habitantes: HabitanteModelo[]) => {
      this.listaHabitantes = habitantes;
    });
  }
}
