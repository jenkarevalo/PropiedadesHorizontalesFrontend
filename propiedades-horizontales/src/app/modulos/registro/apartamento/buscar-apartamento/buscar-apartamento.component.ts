import { Component, OnInit } from '@angular/core';
import { ApartamentoModelo } from 'src/app/modelos/apartamento.modelo';
import { ApartamentoService } from 'src/app/servicios/apartamento.service';

@Component({
  selector: 'app-buscar-apartamento',
  templateUrl: './buscar-apartamento.component.html',
  styleUrls: ['./buscar-apartamento.component.css']
})
export class BuscarApartamentoComponent implements OnInit {
  listadoApartamentos: ApartamentoModelo[] = []
  constructor(
    private apartamentoService: ApartamentoService
  ) {
    this.getListadoApartamentos();
  }

  ngOnInit(): void {
  }

  // getListadoApartamentos(){
  //   this.apartamentoService.obtenerApartamentos()
  //     .subscribe((apartamentos: ApartamentoModelo[])=>{ 
  //       this.listadoApartamentos = apartamentos;
  //       console.log("Total de apartamentos" + this.listadoApartamentos.length);
  //     }, (error) =>{
  //       console.log("Se genero un error al consultar el listado de apartamentos");
  //     } )
  // }

  getListadoApartamentos(){
    this.apartamentoService.getApartamento()
      .subscribe( (apartamentos: ApartamentoModelo[]) => {
        this.listadoApartamentos = apartamentos;
      });
    }

}
