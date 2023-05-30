import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Encargado } from 'src/app/modelos/Encargado';
import { EncargadoService } from 'src/app/servicio/encargado.service';

@Component({
  selector: 'app-add-encargado',
  templateUrl: './add-encargado.component.html',
  styleUrls: ['./add-encargado.component.css']
})
export class AddEncargadoComponent implements OnInit {
  modelEncargado = new Encargado();
  constructor(private router:Router, private encargadoService:EncargadoService) { }

  ngOnInit(): void {
  }

  guardar(encargado:Encargado){
    this.encargadoService.createEncargado(encargado).subscribe(data=>{
      this.router.navigate(['encargados']);
    });
  }

}
