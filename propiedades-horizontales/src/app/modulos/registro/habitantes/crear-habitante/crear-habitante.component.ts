// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { HabitanteModelo } from 'src/app/modelos/habitantes.modelo';
// import { HabitantesService } from 'src/app/servicios/habitantes.service';
// const cryptoJS = require('creypto-js');

// @Component({
//   selector: 'app-crear-habitante',
//   templateUrl: './crear-habitante.component.html',
//   styleUrls: ['./crear-habitante.component.css']
// })
// export class CrearHabitanteComponent implements OnInit {
//   formHabitante: FormGroup = this.formBuilder.group({
//     'Primer Nombre': ['', [Validators.required]],
//     'Segundo Nombre': ['', [Validators.required]],
//     'Primer Apellido': ['', [Validators.required]],
//     'Documento': ['', [Validators.required]],
//     'Telefono': ['', [Validators.required]],
//     'Email': ['', [Validators.required]],
//     'clave': ['', [Validators.required]],
//   });

//   constructor(
//     private formBuilder: FormBuilder,
//     private habitanteService: HabitantesService,
//     private router: Router
//   ) { }

//   ngOnInit(): void {
    
//   }

//   guardarHabitante() {
//     let habitante: HabitanteModelo={
//       primerNombre: this.formHabitante.controls['primerNombre'].value,
//       segundoNombre: this.formHabitante.controls['segundoNombre'].value,
//       primerApellido: this.formHabitante.controls['primerApellido'].value,
//       segundoApellido: this.formHabitante.controls['segundoApellido'].value,
//       documento: this.formHabitante.controls['documento'].value,
//       telefono: this.formHabitante.controls['telefono'].value,
//       email: this.formHabitante.controls['email'].value,
//       clave: cryptoJS.MD5(this.formHabitante.controls['clave'].value),toString()
//     }
//     this.habitanteService.crearHabitante(habitante)
//       .subscribe({
//         next: (datos) => {
//           this.router.navigate(['/modulos/registro/buscar-Habitante']);
//         },
//         error: (error) => {
//           console.log("Error al guardar el habitante")
//         }
//       });
//   }
// }
