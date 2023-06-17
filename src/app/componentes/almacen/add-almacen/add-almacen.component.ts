import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Almacen } from 'src/app/modelos/Almacen';
import {AlmacenService } from 'src/app/servicio/almacen.service';
@Component({
  selector: 'app-add-almacen',
  templateUrl: './add-almacen.component.html',
  styleUrls: ['./add-almacen.component.css']
})
export class AddAlmacenComponent implements OnInit {

  modelAlmacen = new Almacen();
  constructor(private router:Router, private almacenService:AlmacenService) { }

  ngOnInit(): void {
  }

  guardar(almacen:Almacen){
    this.almacenService.createAlmacen(almacen).subscribe(data=>{
      this.router.navigate(['almacen']);
    });
  }

}
