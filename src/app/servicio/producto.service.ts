import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../modelos/Producto';
import { Categoria } from '../modelos/Categoria';
import { Almacen } from '../modelos/Almacen';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:8080/productos';

  urlCat = 'http://localhost:8080/api/categorias';

  urlAlm = 'http://localhost:8080/api/almacenes';

  getProductos(){
    return this.http.get<Producto[]>(this.url);
  }

  createProducto(producto: Producto){
    return this.http.post<Producto>(this.url,producto);
  }

  getProductoId(id:number){
    return this.http.get<Producto>(this.url+"/"+id);
  }

  updateProducto(producto:Producto){
    return this.http.put<Producto>(this.url,producto);
  }
  deleteProducto(producto:Producto){
    return this.http.delete<Producto>(this.url+"/"+producto.idp);
  }

  getCategorias(){
    return this.http.get<Categoria[]>(this.urlCat);
  }

  getAlmacenes(){
    return this.http.get<Almacen[]>(this.urlAlm);
  }

}
