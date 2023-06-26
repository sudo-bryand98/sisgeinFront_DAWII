import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlmacenService } from '../../shared/services/almacen.service';
import { CategoryService } from '../../shared/services/category.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductoService } from '../../shared/services/producto.service';
import { error } from 'console';

export interface Category{
  id: number;
  nombreCat: string;
}

export interface Almacen{
  idal: number;
  nombalm: string;
  direccion: string;
  encargado: any;
  foto: any;
}

@Component({
  selector: 'app-new-producto',
  templateUrl: './new-producto.component.html',
  styleUrls: ['./new-producto.component.css']
})
export class NewProductoComponent implements OnInit {

  public ProductoForm: FormGroup;
  estadoFormulario: string = "";
  categorias: Category[]=[];
  almcenes: Almacen[]=[];

  constructor(private fb: FormBuilder, private productoService: ProductoService ,private almcenService: AlmacenService,private categoriaService: CategoryService ,private dialogRef: MatDialogRef<NewProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {

      this.estadoFormulario = "Agregar";

      this.ProductoForm = this.fb.group({
        nombrep: ['', Validators.required],
        stock: ['', Validators.required],
        almacen: ['', Validators.required],
        categoria: ['', Validators.required]
      })

      if(data != null){
        this.updateForm(data);
        this.estadoFormulario = "Actualizar";
      }

     }

  ngOnInit(): void {
    this.getCategorias();
    this.getAlmacen();
  }

  onSave(){
    let data={
      nombrep: this.ProductoForm.get('nombrep')?.value,
      stock: this.ProductoForm.get('stock')?.value,
      idal: this.ProductoForm.get('almacen')?.value,
      id: this.ProductoForm.get('categoria')?.value
    }

    const uploadData = new FormData();

    uploadData.append('nombrep', data.nombrep);
    uploadData.append('stock', data.stock);
    uploadData.append('idal', data.idal);
    uploadData.append('id', data.id);

    if(this.data != null){
      //actualizar el producto
      this.productoService.updateProducto(uploadData, this.data.idp)
        .subscribe((data:any) =>{
          this.dialogRef.close(1);
        }, (error: any) =>{
          this.dialogRef.close(2);
        })
    } else{
      // registrar el producto
      this.productoService.saveProductos(uploadData)
        .subscribe((data:any) =>{
          this.dialogRef.close(1);
        }, (error: any) =>{
          this.dialogRef.close(2);
        })
    }
  }

  onCancel(){
    this.dialogRef.close(3);
  }

  getCategorias(){
    this.categoriaService.getCategorias()
        .subscribe((data:any) => {
          this.categorias = data.categoriaResponse.categoria;
        },(error:any) => {
          console.log("error al consultar categorias");
        })
  }

  getAlmacen(){
    this.almcenService.getAlmacenes()
        .subscribe((data:any) => {
          this.almcenes = data.almacenResponse.almacens;
        }, (error:any) =>{
          console.log("error al consultar almacenes");
        })
  }

  updateForm(data: any){
    this.ProductoForm = this.fb.group({
      nombrep: [data.nombrep, Validators.required],
      stock: [data.stock , Validators.required],
      almacen: [data.almacen.idal, Validators.required],
      categoria: [data.categoria.id, Validators.required]
    })
  }

}
