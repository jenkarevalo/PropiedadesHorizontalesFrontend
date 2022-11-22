import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConjuntoModelo } from 'src/app/modelos/conjunto.modelo';
import { FacturaModelo } from 'src/app/modelos/factura.modelo';
import { HabitanteModelo } from 'src/app/modelos/habitantes.modelo';
import { PropietarioModelo } from 'src/app/modelos/propietario.modelo';
import { TorreModelo } from 'src/app/modelos/torre.modelo';
import { ConjuntoService } from 'src/app/servicios/conjunto.service';
import { FacturaService } from 'src/app/servicios/factura.service';
import { HabitantesService } from 'src/app/servicios/habitantes.service';
import { PropietarioService } from 'src/app/servicios/propietario.service';
import { TorreService } from 'src/app/servicios/torre.service';
const cryptoJS = require('crypto-js');

@Component({
  selector: 'app-crear-conjunto',
  templateUrl: './crear-conjunto.component.html',
  styleUrls: ['./crear-conjunto.component.css']
})
export class CrearConjuntoComponent implements OnInit {
  listadoTorres: TorreModelo[] = [];
  listadoPropietarios: PropietarioModelo[]=[];
  listadoHabitantes: HabitanteModelo[]=[];
  listadoFacturaciones: FacturaModelo[]=[];

  formConjunto: FormGroup = this.formBuilder.group({
    'Nombre': ['', [Validators.required]],
    'Nit': ['', [Validators.required]],
    'CuentaBancaria': ['', [Validators.required]],
    'Banco': ['', [Validators.required]],
    'NombreAdministrador': ['', [Validators.required]],
    'InteresXMora': ['', [Validators.required]],
    'InicioNumeroFactura': ['', [Validators.required]],
    'PresupuestoActual': ['', [Validators.required]],
    'Email': ['', [Validators.required]],
    'Clave': ['', [Validators.required]],
    'Propietario': ['',[Validators.required]],
    'Habitante':['',[Validators.required]],
    'Facturacion':['',[Validators.required]],
    'Torre': ['',[Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private conjuntoService: ConjuntoService,
    private habitanteService: HabitantesService,
    private torreService: TorreService,
    private facturacionService: FacturaService,
    private propietarioService: PropietarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

  }

  guardarConjunto() {
    let conjunto: ConjuntoModelo = {
      nombre: this.formConjunto.controls['Nombre'].value,
      nit: this.formConjunto.controls['Nit'].value,
      cuentaBancaria: this.formConjunto.controls['CuentaBancaria'].value,
      banco: this.formConjunto.controls['Banco'].value,
      nombreAdministrador: this.formConjunto.controls['NombreAdministrador'].value,
      interesXMora: parseInt (this.formConjunto.controls['InteresXMora'].value),
      inicioNumeroFactura: this.formConjunto.controls['InicioNumeroFactura'].value,
      presupuestoActual: parseInt (this.formConjunto.controls['PresupuestoActual'].value),
      email: this.formConjunto.controls['Email'].value,
      clave: this.formConjunto.controls['Clave'].value
    }
    this.conjuntoService.crearConjunto(conjunto)
      .subscribe({
        next: (datos) => {
          this.router.navigate(['/registro/conjunto/buscar-Conjunto']);
        },
        error: (error) => {
          console.log("Error al guardar el CONJUNTO");
        }
      });
  }

  getTorre(){
    this.torreService.getTorres()
      .subscribe({
        next: (torres) =>{
          this.listadoTorres = torres;
        },
        error: (error)=> console.log("Error al consultar las Torres")  
      })
  }

  getPropietario(){
    this.propietarioService.getPropietario()
    .subscribe({
      next: (propietario) => {
        this.listadoPropietarios = propietario;
      },
      error: (error) => console.log("Error al consultar los Propietarios")
    })
  }

  getHabitante(){
    this.habitanteService.getHabitantes()
      .subscribe({
        next: (habitante) => {
          this.listadoHabitantes = habitante;
        },
        error: (error) => console.log("Error al consultar los Habitantes")
      })
  }
  getFacturacion(){
    this.facturacionService.getFacturas()
      .subscribe({
        next: (facturacion) =>{
          this.listadoFacturaciones = facturacion;
        },
        error: (error) => console.log("Error al consultar las Facturas")
      })
  }
}
