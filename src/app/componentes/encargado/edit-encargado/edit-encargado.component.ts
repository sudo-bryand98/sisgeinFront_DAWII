// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Encargado } from 'src/app/modelos/Encargado';
// import { EncargadoService } from 'src/app/servicio/encargado.service';

// @Component({
//   selector: 'app-edit-encargado',
//   templateUrl: './edit-encargado.component.html',
//   styleUrls: ['./edit-encargado.component.css']
// })
// export class EditEncargadoComponent implements OnInit {

//   encargado: Encargado = new Encargado();

//   constructor( private router:Router, private encargadoService:EncargadoService) { }

//   ngOnInit(): void {
//     this.editar();
//   }

//   editar(){
//     let ide = JSON.parse(localStorage.getItem('ide') as string);
//     this.encargadoService.getEncargadoId(ide).subscribe(data=>{
//       this.encargado=data;
//     });
//   }

//   actualizar(encargado:Encargado){
//     this.encargadoService.updateEncargado(encargado).subscribe(data=>{
//       this.encargado=data;
//       this.router.navigate(['encargados']);
//     });
//   }

// }
