import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { error } from 'console';
import { CategoryService } from 'src/app/modules/shared/services/category.service';
import { NewCategoryComponent } from '../new-category/new-category.component';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { ConfirmComponent } from 'src/app/modules/shared/components/confirm/confirm.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService, public dialog: MatDialog,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getCategories();
  }

  displayedColumns: string[] = ['id', 'nombreCat', 'actions'];
  dataSource = new MatTableDataSource<CategoryElement>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  getCategories(){
    this.categoryService.getCategorias()
       .subscribe((data:any) => {
        console.log("respuesta categories: ", data);
        this.processCategoriesResponse(data);
      }, (error: any) => {
        console.log("error: ", error);
      }
      
      )
  }

  processCategoriesResponse(resp: any){
    const dataCategory: CategoryElement[] = [];

      let listCategory = resp;

      listCategory.forEach((element: CategoryElement) => {
        dataCategory.push(element);
      });

      this.dataSource = new MatTableDataSource<CategoryElement>(dataCategory);
      this.dataSource.paginator = this.paginator;
  }

  openCategoryDialog(){
    const dialogRef = this.dialog.open(NewCategoryComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      if(result == 1){
          this.openSnackBar("Categoría Agregada", "Exito");
          this.getCategories();
      } else if(result == 2){
        this.openSnackBar("Se produjo un error al guardar categoría", "Error");
      }
    });
  } 

  edit(id: number, name: string){
    const dialogRef = this.dialog.open(NewCategoryComponent, {
      data: {id: id, name: name}
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      if(result == 1){
          this.openSnackBar("Categoría Actualizada", "Exito");
          this.getCategories();
      } else if(result == 2){
        this.openSnackBar("Se produjo un error al actualizar categoría", "Error");
      }
    });
  }

  delete(id:any){
    const dialogRef = this.dialog.open(ConfirmComponent, {
      data: {id: id, module: "category"}
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      if(result == 1){
          this.openSnackBar("Categoría Eliminada", "Exito");
          this.getCategories();
      } else if(result == 2){
        this.openSnackBar("Se produjo un error al eliminar categoría", "Error");
      }
    });
  }

  buscar(termino: string){
    if(termino.length === 0){
      return this.getCategories();
    }

    this.categoryService.getCategoriaById(termino)
      .subscribe( (resp: any) => {
        this.processCategoriesResponse(resp);
      })
  }

  openSnackBar(message: string, action: string) : MatSnackBarRef<SimpleSnackBar>{
    return this.snackBar.open(message, action, {
      duration: 2000
    })
  }

}

export interface CategoryElement{
  id: number;
  nombreCat: string;
}