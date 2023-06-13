import { Component, OnInit } from '@angular/core';
import { Almacen } from 'src/app/modelos/Almacen';
import { AlmacenService } from 'src/app/servicio/almacen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-almacen',
  templateUrl: './edit-almacen.component.html',
  styleUrls: ['./edit-almacen.component.css']
})
export class EditAlmacenComponent implements OnInit {

  almacen: Almacen = new Almacen();

  constructor( private router:Router, private almacenService:AlmacenService) { }

  ngOnInit(): void {
    this.editar();
  }

  editar(){
    let idal = JSON.parse(localStorage.getItem('idal') as string);
    this.almacenService.getAlmacenId(idal).subscribe(data=>{
      this.almacen=data;
    });
  }

  actualizar(almacen:Almacen){
    this.almacenService.updateAlmacen(almacen).subscribe(data=>{
      this.almacen=data;
      this.router.navigate(['almacen']);
    });
  }
}
