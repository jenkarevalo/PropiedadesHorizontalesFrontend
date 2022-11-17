import { Component, OnInit } from '@angular/core';
import { PropietarioModelo } from 'src/app/modelos/propietario.modelo';
import { PropietarioService } from 'src/app/servicios/propietario.service';

@Component({
  selector: 'app-buscar-propietario',
  templateUrl: './buscar-propietario.component.html',
  styleUrls: ['./buscar-propietario.component.css']
})
export class BuscarPropietarioComponent implements OnInit {
  listadoPropietarios: PropietarioModelo[]= [];

  constructor(
    private propietarioService: PropietarioService
  ) { 
    this.getListadoPropietarios();
  }

  ngOnInit(): void {
  }

  getListadoPropietarios(){
    this.propietarioService.getPropietario()
      .subscribe( (propietarios: PropietarioModelo[]) =>{
        this.listadoPropietarios = propietarios;
      });
    
  }

}
