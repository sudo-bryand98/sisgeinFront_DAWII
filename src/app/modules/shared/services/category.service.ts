import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }


  getCategorias(){

    const endpoint = `${base_url}/categorias`;
    return this.http.get(endpoint);
  }


  saveCategorias(body: any){
    const endpoint = `${base_url}/categorias`;
    return this.http.post(endpoint, body);
  }

  updateCategoria(body: any){
    const endpoint = `${base_url}/categorias`;
    return this.http.put(endpoint, body);
  }

  deleteCategoria(id: any){
    const endpoint = `${base_url}/categorias/${id}`;
    return this.http.delete(endpoint);
  }

  getCategoriaById(id: any){
    const endpoint = `${base_url}/categorias/${id}`;
    return this.http.get(endpoint);
  }
  

}


