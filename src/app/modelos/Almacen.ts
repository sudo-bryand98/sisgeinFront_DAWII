import { Encargado } from "./Encargado";


export class Almacen{  
    idal: number;
    nombalm: string;
    direccion: string;
    encargado: Encargado;
  static idal: string;

    constructor(){
    this.idal=0;
    this.nombalm="";
    this.direccion="";
    this.encargado= new Encargado();


    }
    



}