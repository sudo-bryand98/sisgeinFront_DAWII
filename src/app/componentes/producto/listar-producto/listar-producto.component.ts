import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelos/Producto';
import { ProductoService } from 'src/app/servicio/producto.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {

  productos?:Producto[];

  constructor(private productoService:ProductoService, private router: Router) { }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(
      data=>{
        this.productos=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );
  }

  nuevo(): void{
    this.router.navigate(['nuevoProducto'])
  }

  editar(producto: Producto): void{
    localStorage.setItem("id",producto.idp.toString());
    this.router.navigate(['editarProducto']);
  }

  eliminar(producto:Producto):void{
    this.productoService.deleteProducto(producto).subscribe(
      data=>{
        this.productos=this.productos!.filter(p=>p!==producto)
      }
    )
  }

}
