import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductoService } from '../../shared/services/producto.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { NewProductoComponent } from '../new-producto/new-producto.component';
import { ConfirmComponent } from '../../shared/components/confirm/confirm.component';
import { UtilService } from '../../shared/services/util.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  isAdmin: any;

  constructor(private productoService: ProductoService, public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private util: UtilService) { }

  ngOnInit(): void {
    this.getProductos();
    this.isAdmin = this.util.isAdmin();
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

  edit(idp: number, nombrep: string, stock: number, almacen: any, categoria: any){
    const dialogRef = this.dialog.open(NewProductoComponent, {
      width: '450px',
      data: {idp: idp, nombrep: nombrep, stock: stock, almacen: almacen, categoria: categoria}
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      if(result == 1){
          this.openSnackBar("Producto editado", "Exito");
          this.getProductos();
      } else if(result == 2){
        this.openSnackBar("Se produjo un error al editar producto", "Error");
      }
    });
  }

  delete(idp: any){
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '450px',
      data: {idp: idp, module: "producto"}
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      if(result == 1){
          this.openSnackBar("Producto eliminado", "Exito");
          this.getProductos();
      } else if(result == 2){
        this.openSnackBar("Se produjo un error al eliminar producto", "Error");
      }
    });
  }

  buscar(termino: string){
    if(termino.length === 0){
      return this.getProductos();
    }

    this.productoService.getProductoById(termino)
      .subscribe( (resp: any) => {
        this.processProductosResponse(resp);
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

