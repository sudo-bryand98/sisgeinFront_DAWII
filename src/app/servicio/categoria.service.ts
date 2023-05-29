import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../modelos/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:8080/api/categorias';

  getCategorias(){
    return this.http.get<Categoria[]>(this.url);
  }

}
