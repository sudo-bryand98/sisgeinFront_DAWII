import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductoService } from '../../shared/services/producto.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { NewProductoComponent } from '../new-producto/new-producto.component';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(private productoService: ProductoService, public dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getProductos();
  }

  displayedColumns: string[] = ['idp', 'nombrep', 'stock', 'almacen', 'categoria','actions'];
  dataSource = new MatTableDataSource<ProductoElement>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

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
    const dataProductos: ProductoElement[] = [];

    if(resp.metadata[0].code == "00"){

      let listProducto = resp.productoResponse.productos;

      listProducto.forEach((element: ProductoElement) => {
        dataProductos.push(element);
      });
  
      this.dataSource = new MatTableDataSource<ProductoElement>(dataProductos);
      this.dataSource.paginator = this.paginator;
    }   
  }

  openProductoDialog(){
    const dialogRef = this.dialog.open(NewProductoComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      if(result == 1){
          this.openSnackBar("Producto Agregado", "Exito");
          this.getProductos();
      } else if(result == 2){
        this.openSnackBar("Se produjo un error al guardar producto", "Error");
      }
    });
  }

  openSnackBar(message: string, action: string) : MatSnackBarRef<SimpleSnackBar>{
    return this.snackBar.open(message, action, {
      duration: 2000
    })
  }

}

export interface ProductoElement{
  idp: number;
  nombrep: string;
  stock: number;
  almacen: any;
  categoria: any;
}

