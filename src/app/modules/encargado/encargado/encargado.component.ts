import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EncargadoService } from '../../shared/services/encargado.service';
import { error } from 'console';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { NewEncargadoComponent } from '../new-encargado/new-encargado.component';
import { ConfirmComponent } from '../../shared/components/confirm/confirm.component';
import { UtilService } from '../../shared/services/util.service';

@Component({
  selector: 'app-encargado',
  templateUrl: './encargado.component.html',
  styleUrls: ['./encargado.component.css']
})
export class EncargadoComponent implements OnInit {

  isAdmin: any;

  constructor(private encargadoService: EncargadoService,
    public dialog: MatDialog, private snackBar: MatSnackBar,
    private util: UtilService) { }

  ngOnInit(): void {
    this.getEncargados();
    this.isAdmin = this.util.isAdmin();
  }

  displayedColumns: string[] = ['ide', 'nombre', 'apellidos', 'cel', 'correo', 'actions'];
  dataSource = new MatTableDataSource<EncargadoElement>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;


  getEncargados(){
    this.encargadoService.getEncargados()
        .subscribe((data:any) => {
          console.log("respuesta de encargados: ", data);
          this.proccesEncargadoResponse(data);
        }, (error:any) => {
          console.log("error de encargados: ", error);
        })
  }

  proccesEncargadoResponse(resp:any){
    const dataEncargado: EncargadoElement[] = [];

    if(resp.metadata[0].code == "00"){
      let listEncargado = resp.encargadoResponse.encargado;
      listEncargado.forEach((element: EncargadoElement) => {
        dataEncargado.push(element);
      });
  
      this.dataSource = new MatTableDataSource<EncargadoElement>(dataEncargado);
      this.dataSource.paginator = this.paginator;
    }  
  }

  openEncargadoDialog(){
    const dialogRef = this.dialog.open(NewEncargadoComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      if(result == 1){
          this.openSnackBar("Encargado Agregado", "Exito");
          this.getEncargados();
      } else if(result == 2){
        this.openSnackBar("Se produjo un error al guardar encargado", "Error");
      }
    });
  }

  openSnackBar(message: string, action: string) : MatSnackBarRef<SimpleSnackBar>{
    return this.snackBar.open(message, action, {
      duration: 2000
    })
  }

  edit(ide: number, nombre: string, apellidos: string, cel: string, correo: string){
    const dialogRef = this.dialog.open(NewEncargadoComponent, {
      width: '450px',
      data: {ide: ide, nombre: nombre, apellidos: apellidos, cel:cel, correo: correo}
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      if(result == 1){
          this.openSnackBar("Encargado editado", "Exito");
          this.getEncargados();
      } else if(result == 2){
        this.openSnackBar("Se produjo un error al actualizar encargado", "Error");
      }
    });
  }

  delete(ide:any){
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '450px',
      data: {ide: ide, module: "encargado"}
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      if(result == 1){
          this.openSnackBar("Encargado eliminado", "Exito");
          this.getEncargados();
      } else if(result == 2){
        this.openSnackBar("Se produjo un error al eliminar el encargado", "Error");
      }
    });
  }

  buscar(termino: string){
    if(termino.length === 0){
      return this.getEncargados();
    }

    this.encargadoService.getEncargadoById(termino)
      .subscribe( (resp: any) => {
        this.proccesEncargadoResponse(resp);
      })
  }

}

export interface EncargadoElement{
  ide: number;
  nombre: string;
  apellidos: string;
  cel: string;
  correo: string;
}
