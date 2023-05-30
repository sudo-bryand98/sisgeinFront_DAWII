import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Encargado } from 'src/app/modelos/Encargado';
import { EncargadoService } from 'src/app/servicio/encargado.service';

@Component({
  selector: 'app-listar-encargado',
  templateUrl: './listar-encargado.component.html',
  styleUrls: ['./listar-encargado.component.css']
})
export class ListarEncargadoComponent implements OnInit {

  encargados?:Encargado[];

  constructor( private encargadoService:EncargadoService, private router:Router ) { }

  ngOnInit(): void {
    this.encargadoService.getEncargados().subscribe(
      data=>{
        this.encargados=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );
  }

  nuevo():void{
    this.router.navigate(['nuevoEncargado'])
  }
  
  editar(encargado:Encargado):void{
    localStorage.setItem("ide",encargado.ide.toString());
    this.router.navigate(['editarEncargado']);
  }

  eliminar(encargado: Encargado):void{
    this.encargadoService.deleteEncargado(encargado).subscribe(data=>{
      this.encargados=this.encargados!.filter(e=>e!==encargado);
});
  }

}
