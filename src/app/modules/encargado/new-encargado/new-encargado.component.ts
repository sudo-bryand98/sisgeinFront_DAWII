import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EncargadoService } from '../../shared/services/encargado.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-encargado',
  templateUrl: './new-encargado.component.html',
  styleUrls: ['./new-encargado.component.css']
})
export class NewEncargadoComponent implements OnInit {

  public encargadoForm: FormGroup;
  estadoFormulario: string ="";

  constructor(private fb: FormBuilder, private encargadoService: EncargadoService, private dialogRef: MatDialogRef<NewEncargadoComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {

      this.estadoFormulario = "Agregar"

      this.encargadoForm = this.fb.group({
        nombre:['', Validators.required],
        apellidos:['', Validators.required],
        cel:['', Validators.required],
        correo:['', Validators.required]
      })

      if(data != null){
        this.updateForm(data);
        this.estadoFormulario = "Actualizar";
      }

    }

  ngOnInit(): void {
  }

  onSave(){
    let data = {
      nombre: this.encargadoForm.get('nombre')?.value,
      apellidos: this.encargadoForm.get('apellidos')?.value,
      cel: this.encargadoForm.get('cel')?.value,
      correo: this.encargadoForm.get('correo')?.value,
    }

    if(this.data != null){
      //ACTUALIZAR REGISTRO
      this.encargadoService.updateEncargado(data, this.data.ide)
      .subscribe((data: any) =>{
        this.dialogRef.close(1);
      }, (error:any) =>{
        this.dialogRef.close(2);
      })
    } else{
      // AGREGAR REGISTRO
      this.encargadoService.saveEncargado(data)
      .subscribe( (data : any) => {
        console.log(data);
        this.dialogRef.close(1);
      }, (error: any) => {
        this.dialogRef.close(2);
      })
    }

    
  }

  onCancel(){
    this.dialogRef.close(3);
  }

  updateForm(data:any){
    this.encargadoForm = this.fb.group({
      nombre:[data.nombre, Validators.required],
      apellidos:[data.apellidos, Validators.required],
      cel:[data.cel, Validators.required],
      correo:[data.correo, Validators.required]
    })
  }

}
