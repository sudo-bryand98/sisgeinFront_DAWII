import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Almacen } from '../modelos/Almacen';


@Injectable({
  providedIn: 'root'
})
export class AlmacenService {

  constructor(private http:HttpClient) { }
   url = "http://localhost:8080/api/almacen";


   getAlmacen(){
   return this.http.get<Almacen[]>(this.url);}
 

  createAlmacen(almacen:Almacen){
    return this.http.post<Almacen>(this.url,almacen);
  }

  getAlmacenId(id:number){
    return this.http.get<Almacen>(this.url+"/"+id);
  }

  updateAlmacen(almacen:Almacen){
    return this.http.put<Almacen>(this.url, almacen);
  }

  deleteAlmacen(almacen:Almacen){
    return this.http.delete<Almacen>(this.url+"/"+almacen.idal);
  }

}
