import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductoService } from 'src/app/modules/shared/services/producto.service';
import { ProductoElement } from 'src/app/modules/producto/producto/producto.component';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  chartBar: any;
  chardoughnut: any;

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){
    this.productoService.getProductos()
      .subscribe((data:any) => {
          console.log("respuesta de productos:", data);
          this.processProductosResponse(data);
      }, (error:any) => {
        console.log("error en productos:", error);
      })
  }

  processProductosResponse(resp:any){

    const nameProducto: String [] = [];
    const stock: number [] = [];

    if(resp.metadata[0].code == "00"){

      let listProducto = resp.productoResponse.productos;

      listProducto.forEach((element: ProductoElement) => {
        nameProducto.push(element.nombrep);
        stock.push(element.stock);
      });

      // GRAFICO DE BARRAS

      this.chartBar = new Chart('canvas-bar', {
        type: 'bar',
        data: {
          labels: nameProducto,
          datasets: [
            { label: 'Productos', data: stock}
          ]
        }
      });

      // GRAFICO DE doughnut

      this.chardoughnut = new Chart('canvas-doughnut', {
        type: 'doughnut',
        data: {
          labels: nameProducto,
          datasets: [
            { label: 'Productos', data: stock}
          ]
        }
      });
    }   
  }

}
