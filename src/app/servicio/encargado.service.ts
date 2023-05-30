import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Encargado } from '../modelos/Encargado';

@Injectable({
  providedIn: 'root'
})
export class EncargadoService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:8080/api/encargados';

  getEncargados(){
    return this.http.get<Encargado[]>(this.url);
  }

  createEncargado(encargado:Encargado){
    return this.http.post<Encargado>(this.url,encargado);
  }

  getEncargadoId(ide:number){
    return this.http.get<Encargado>(this.url+"/"+ide);
  }

  updateEncargado(encargado:Encargado){
    return this.http.put<Encargado>(this.url, encargado);
  }

  deleteEncargado(encargado:Encargado){
    return this.http.delete<Encargado>(this.url+"/"+encargado.ide);
  }
}
