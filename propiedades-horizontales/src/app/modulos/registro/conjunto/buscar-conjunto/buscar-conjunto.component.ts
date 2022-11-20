import { Component, OnInit } from '@angular/core';
import { ConjuntoModelo } from 'src/app/modelos/conjunto.modelo';
import { ConjuntoService } from 'src/app/servicios/conjunto.service';

@Component({
  selector: 'app-buscar-conjunto',
  templateUrl: './buscar-conjunto.component.html',
  styleUrls: ['./buscar-conjunto.component.css']
})
export class BuscarConjuntoComponent implements OnInit {
  listadoConjuntos: ConjuntoModelo[] = [];
  constructor(
    private conjuntoService: ConjuntoService
  ) {
    this.getListadoConjuntos();
   }

  ngOnInit(): void {
  }

  getListadoConjuntos(){
    this.conjuntoService.getConjuntos()
      .subscribe( (conjunto: ConjuntoModelo[]) => {
        this.listadoConjuntos = conjunto;
      });
    }
    
}