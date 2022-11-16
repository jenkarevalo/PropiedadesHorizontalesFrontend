import { Component, OnInit } from '@angular/core';
import { TorreModelo } from 'src/app/modelos/torre.modelo';
import { TorreService } from 'src/app/servicios/torre.service';

@Component({
  selector: 'app-buscar-torre',
  templateUrl: './buscar-torre.component.html',
  styleUrls: ['./buscar-torre.component.css']
})
export class BuscarTorreComponent implements OnInit {
  listadoTorres : TorreModelo[] = []
  constructor(
    private torreService : TorreService
  ) {
    this.getListadoTorres();
   }
  
  ngOnInit(): void {
  }

  getListadoTorres(){
    this.torreService.obtenerTorres()
      .subscribe((torres: TorreModelo[])=>{ 
        this.listadoTorres = torres;
        console.log("Total de torres" + this.listadoTorres.length);
      }, (error) =>{
        console.log("Se genero un error al consultar el listado de torres");
      })
  }

}