import { Component, OnInit } from '@angular/core';
import { Almacen } from 'src/app/modelos/Almacen';
import { AlmacenService } from 'src/app/servicio/almacen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-almacen',
  templateUrl: './listar-almacen.component.html',
  styleUrls: ['./listar-almacen.component.css']
})
export class ListarAlmacenComponent implements OnInit {

  almacen?:Almacen[];
 
  constructor(private almacenService: AlmacenService, private router:Router) { }

  ngOnInit(): void {
 
    this.almacenService.getAlmacen().subscribe(
     
      data=>{
      this.almacen=data;
      console.log(data);
      },
      error=>{
      console.log(error);
      }
    );
  }


  nuevo():void{
    this.router.navigate(['nuevoAlmacen'])
  }
  
  editar(almacen:Almacen):void{
    localStorage.setItem("idal",almacen.idal.toString());
    this.router.navigate(['editarAlmacen']);
  }

  eliminar(almacen:Almacen):void{
    this.almacenService.deleteAlmacen(almacen).subscribe(data=>{
    this.almacen=this.almacen!.filter(e=>e!==almacen);
    });
  }

}
