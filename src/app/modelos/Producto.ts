import { Almacen } from "./Almacen";
import { Categoria } from "./Categoria";

export class Producto{
    idp: number;
    nombrep: string;
    precio: number;
    stock: number;
    almacen!: Almacen;
    categ!: Categoria;

    constructor(){
        this.idp=0;
        this.nombrep="";
        this.precio=0;
        this.stock=0;
    }
}