import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Almacen } from 'src/app/modelos/Almacen';
import { Categoria } from 'src/app/modelos/Categoria';
import { Producto } from 'src/app/modelos/Producto';
import { ProductoService } from 'src/app/servicio/producto.service';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css']
})
export class EditProductoComponent implements OnInit {

  producto = new Producto();
  categorias!:Categoria[];
  almacenes!:Almacen[];

  constructor(private router:Router, private productoService:ProductoService) { }

  ngOnInit(): void {
    this.editar();
    this.cargarCategoria();
    this.cargarAlmacen();
  }

  editar(){
    let id= JSON.parse(localStorage.getItem('id') as string);
    this.productoService.getProductoId(id).subscribe(data=>{
     this.producto=data;
  });
 }

 actualizar(producto:Producto){
    this.productoService.updateProducto(producto).subscribe(data=>{
        this.producto=data; 
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
