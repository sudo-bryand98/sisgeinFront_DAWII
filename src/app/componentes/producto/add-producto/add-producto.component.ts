import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Almacen } from 'src/app/modelos/Almacen';
import { Categoria } from 'src/app/modelos/Categoria';
import { Producto } from 'src/app/modelos/Producto';
import { ProductoService } from 'src/app/servicio/producto.service';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {

  modelProducto = new Producto();
  categorias!:Categoria[];
  almacenes!:Almacen[];

  constructor(private router:Router, private productoService:ProductoService) { }

  ngOnInit(): void {
    this.cargarCategoria();
    this.cargarAlmacen();
  }

  guardar(producto:Producto){

    this.productoService.createProducto(producto).subscribe( data=>{
        this.router.navigate(['productos']);
    }); 
  }

  cancelar(){
    this.router.navigate(['productos']);
  }

  cargarCategoria(){
    this.productoService.getCategorias().subscribe(
      data =>{
        this.categorias=data;
      },
      error=>{
          console.log(error);
      }
    );
  }

  cargarAlmacen(){
    this.productoService.getAlmacenes().subscribe(
      data =>{
        this.almacenes=data;
      },
      error=>{
          console.log(error);
      }
    );
  }

}
