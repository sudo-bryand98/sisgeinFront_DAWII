import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class EncargadoService {

  constructor(private http: HttpClient) { }

  getEncargados(){
    const endpoint = `${base_url}/encargados`;
    return this.http.get(endpoint);
  }

  saveEncargado(body: any){
    const endpoint = `${base_url}/encargados`;
    return this.http.post(endpoint, body);
  }

  updateEncargado(body: any, ide:any){
    const endpoint = `${base_url}/encargados/${ide}`;
    return this.http.put(endpoint, body);
  }

  deleteEncargado(ide: any){
    const endpoint = `${base_url}/encargados/${ide}`;
    return this.http.delete(endpoint);
  }

}
