import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlmacenService } from '../../shared/services/almacen.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EncargadoService } from '../../shared/services/encargado.service';
import { error } from 'console';

export interface Encargado{
  ide: number;
  nombre: string;
  apellidos: string;
  cel: string;
  correo: string;
}

@Component({
  selector: 'app-new-almacen',
  templateUrl: './new-almacen.component.html',
  styleUrls: ['./new-almacen.component.css']
})
export class NewAlmacenComponent implements OnInit {

  public almacenForm: FormGroup;
  estadoFormulario: string = "";
  encargados: Encargado[]=[];
  selectedFile: any;
  nameImg: String = "";

  constructor(private fb: FormBuilder, private almcenService: AlmacenService,private encargadoService: EncargadoService ,private dialogRef: MatDialogRef<NewAlmacenComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {
      
      this.estadoFormulario = "Agregar";

      this.almacenForm = this.fb.group({
        nombalm: ['', Validators.required],
        direccion: ['', Validators.required],
        encargado: ['', Validators.required],
        foto: ['', Validators.required]
      })

      if(data != null){
        this.updateForm(data);
        this.estadoFormulario = "Actualizar";
      }

     }

  ngOnInit(): void {
    this.getEncargados();
  }

  onSave(){
    let data={
      nombalm: this.almacenForm.get('nombalm')?.value,
      direccion: this.almacenForm.get('direccion')?.value,
      ide: this.almacenForm.get('encargado')?.value,
      foto: this.selectedFile
    }

    const uploadImageData = new FormData();

    uploadImageData.append('foto', data.foto, data.foto.name)
    uploadImageData.append('nombalm', data.nombalm);
    uploadImageData.append('direccion', data.direccion);
    uploadImageData.append('ide', data.ide);

    if(this.data != null){
      //actualizar el almacen
      this.almcenService.updateAlmacen(uploadImageData, this.data.idal)
        .subscribe((data:any) =>{
          this.dialogRef.close(1);
        }, (error: any) =>{
          this.dialogRef.close(2);
        })
    } else{
      // registrar el almacen
      this.almcenService.saveAlmacenes(uploadImageData)
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

  getEncargados(){
    this.encargadoService.getEncargados()
        .subscribe((data:any) => {
          this.encargados = data.encargadoResponse.encargado;
          
        })
  }

  onFileChanged(event:any){
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile);

      this.nameImg = event.target.files[0].name
  }

  updateForm(data: any){
    this.almacenForm = this.fb.group({
      nombalm: [data.nombalm, Validators.required],
      direccion: [data.direccion , Validators.required],
      encargado: [data.encargado.ide, Validators.required],
      foto: ['', Validators.required]
    })
  }

}
