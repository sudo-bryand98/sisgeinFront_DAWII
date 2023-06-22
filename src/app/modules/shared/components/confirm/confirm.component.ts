import { Component, Inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { error } from 'console';
import { CategoryService } from '../../services/category.service';
import { EncargadoService } from '../../services/encargado.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmComponent>,
              @Inject (MAT_DIALOG_DATA) public data:any, private categoryService: CategoryService,
              private encargadoService: EncargadoService) { }

  ngOnInit(): void {
  }

  onNoClick(){
    this.dialogRef.close(3);
  }

  delete(){
    if(this.data != null){

      if(this.data.module == "category"){

        this.categoryService.deleteCategoria(this.data.id).subscribe((data:any) =>{
          this.dialogRef.close(1);
        }, (error: any) => {
          this.dialogRef.close(2);
        })
      } else if(this.data.module == "encargado"){
        this.encargadoService.deleteEncargado(this.data.ide).subscribe((data:any) =>{
          this.dialogRef.close(1);
        }, (error: any) => {
          this.dialogRef.close(2);
        })
      }
    } else{
      this.dialogRef.close(2);
    }
  }

}
