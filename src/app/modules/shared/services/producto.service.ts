import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  getProductos(){
    const endpoint = `${base_url}/productos`;
    return this.http.get(endpoint);
  }

  saveProductos(body: any){
    const endpoint = `${base_url}/productos`;
    return this.http.post(endpoint, body);
  }

  updateProducto(body: any, idp: any){
    const endpoint = `${base_url}/productos/ ${idp}`;
    return this.http.put(endpoint, body);
  }

  deleteProducto(idp: any){
    const endpoint = `${base_url}/productos/ ${idp}`;
    return this.http.delete(endpoint);
  }

  getProductoById(idp: any){
    const endpoint = `${base_url}/productos/ ${idp}`;
    return this.http.get(endpoint);
  }

}
