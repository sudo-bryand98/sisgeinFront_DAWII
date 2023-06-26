import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AlmacenService } from '../../shared/services/almacen.service';
import { NewAlmacenComponent } from '../new-almacen/new-almacen.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { ConfirmComponent } from '../../shared/components/confirm/confirm.component';

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styleUrls: ['./almacen.component.css']
})
export class AlmacenComponent implements OnInit {

  constructor(private almacenService: AlmacenService, public dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAlmacenes();
  }

  displayedColumns: string[] = ['idal', 'nombalm', 'direccion', 'encargado', 'foto','actions'];
  dataSource = new MatTableDataSource<AlmacenElement>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  getAlmacenes(){
    this.almacenService.getAlmacenes()
      .subscribe((data:any) => {
          console.log("respuesta de almacenes:", data);
          this.processAlmacenResponse(data);
      }, (error:any) => {
        console.log("error en almacenes:", error);
      })
  }

  processAlmacenResponse(resp:any){
    const dataAlmacen: AlmacenElement[] = [];

    if(resp.metadata[0].code == "00"){

      let listAlmacen = resp.almacenResponse.almacens;

      listAlmacen.forEach((element: AlmacenElement) => {
        //element.encargado = element.encargado.nombre;
        element.foto = 'data:image/jpeg;base64,'+element.foto;
        dataAlmacen.push(element);
      });
  
      this.dataSource = new MatTableDataSource<AlmacenElement>(dataAlmacen);
      this.dataSource.paginator = this.paginator;
    }   
  }

  openAlmacenDialog(){
    const dialogRef = this.dialog.open(NewAlmacenComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      if(result == 1){
          this.openSnackBar("Almacén Agregada", "Exito");
          this.getAlmacenes();
      } else if(result == 2){
        this.openSnackBar("Se produjo un error al guardar almacén", "Error");
      }
    });
  }

  openSnackBar(message: string, action: string) : MatSnackBarRef<SimpleSnackBar>{
    return this.snackBar.open(message, action, {
      duration: 2000
    })
  }

  edit(idal: number, nombalm: string, direccion: string, encargado: any){
    const dialogRef = this.dialog.open(NewAlmacenComponent, {
      width: '450px',
      data: {idal: idal, nombalm: nombalm, direccion: direccion, encargado: encargado}
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      if(result == 1){
          this.openSnackBar("Almacén editado", "Exito");
          this.getAlmacenes();
      } else if(result == 2){
        this.openSnackBar("Se produjo un error al editar almacén", "Error");
      }
    });
  }

  delete(idal: any){
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '450px',
      data: {idal: idal, module: "almacen"}
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      if(result == 1){
          this.openSnackBar("Almacén eliminado", "Exito");
          this.getAlmacenes();
      } else if(result == 2){
        this.openSnackBar("Se produjo un error al eliminar almacén", "Error");
      }
    });
  }

}

export interface AlmacenElement{
  idal: number;
  nombalm: string;
  direccion: string;
  encargado: any;
  foto: any;
}
