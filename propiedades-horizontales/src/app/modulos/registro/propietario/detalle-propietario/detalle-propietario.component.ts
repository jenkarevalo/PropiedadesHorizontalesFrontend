import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApartamentoModelo } from 'src/app/modelos/apartamento.modelo';
import { PropietarioModelo } from 'src/app/modelos/propietario.modelo';
import { PropietarioService } from 'src/app/servicios/propietario.service';

@Component({
  selector: 'app-detalle-propietario',
  templateUrl: './detalle-propietario.component.html',
  styleUrls: ['./detalle-propietario.component.css']
})
export class DetallePropietarioComponent implements OnInit {
  listaApartamento: ApartamentoModelo[] = [];
  id: string = '';

  formPropApto: FormGroup = this.formBuilder.group({
    'id': ['', [Validators.required]],
    'PrimerNombre': ['', [Validators.required]],
    'SegundoNombre': ['', [Validators.required]],
    'PrimerApellido': ['', [Validators.required]],
    'SegundoApellido': ['', [Validators.required]],
    'Documento': ['', [Validators.required]],
    'Telefono': ['', [Validators.required]],
    'Email': ['', [Validators.required]],
  });


  constructor(
    private formBuilder: FormBuilder,
    private propietarioService: PropietarioService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getPropApartamento();
    this.getPropxApto()

  }


  getPropApartamento(){
    this.propietarioService.getPropietarioApartamento(this.id)
    .subscribe((apartamentos: ApartamentoModelo[]) => {
      this.listaApartamento= apartamentos;
    });
  }

  getPropxApto(){
    this.propietarioService.getPropietarioXId(this.id)
      .subscribe({
        next: (propietario) => {
          this.formPropApto.controls['id'].setValue(propietario.id);
          this.formPropApto.controls['PrimerNombre'].setValue(propietario.primerNombre);
          this.formPropApto.controls['SegundoNombre'].setValue(propietario.segundoNombre);
          this.formPropApto.controls['PrimerApellido'].setValue(propietario.primerApellido);
          this.formPropApto.controls['SegundoApellido'].setValue(propietario.segundoApellido);
          this.formPropApto.controls['Documento'].setValue(propietario.documento);
          this.formPropApto.controls['Telefono'].setValue(propietario.telefono);
          this.formPropApto.controls['Email'].setValue(propietario.email);
        },
        error: (error) => {
          console.log("error al buscar el propietario")
        }
      });
  }
}