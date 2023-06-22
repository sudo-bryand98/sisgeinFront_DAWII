import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styleUrls: ['./almacen.component.css']
})
export class AlmacenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export interface AlmacenElement{
  idal: number;
  nombalm: string;
  direccion: string;
  encargado: any;
}
