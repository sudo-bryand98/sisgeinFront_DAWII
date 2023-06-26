import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class AlmacenService {

  constructor(private http:HttpClient) { }

  getAlmacenes(){

    const endpoint = `${base_url}/almacenes`;
    return this.http.get(endpoint);
  }

  saveAlmacenes(body: any){
    const endpoint = `${base_url}/almacenes`;
    return this.http.post(endpoint, body);
  }

  updateAlmacen(body: any, idal: any){
    const endpoint = `${base_url}/almacenes/ ${idal}`;
    return this.http.put(endpoint, body);
  }

  deleteAlmacen(idal: any){
    const endpoint = `${base_url}/almacenes/ ${idal}`;
    return this.http.delete(endpoint);
  }

}
