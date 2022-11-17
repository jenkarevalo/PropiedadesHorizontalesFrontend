import { Component, OnInit } from '@angular/core';
import { HabitanteModelo } from 'src/app/modelos/habitantes.modelo';
import { HabitantesService } from 'src/app/servicios/habitantes.service';

@Component({
  selector: 'app-buscar-habitante',
  templateUrl: './buscar-habitante.component.html',
  styleUrls: ['./buscar-habitante.component.css']
})
export class BuscarHabitanteComponent implements OnInit {
  listadoHabitantes: HabitanteModelo[] = []
  constructor(
    private habitantesService: HabitantesService
  ) {
    this.getListadoHabitantes();
   }

  ngOnInit(): void {
  }

  getListadoHabitantes(){
    this.habitantesService.getHabitantes()
      .subscribe( (habitantes: HabitanteModelo[]) => {
        this.listadoHabitantes = habitantes;
      });
  }

}
