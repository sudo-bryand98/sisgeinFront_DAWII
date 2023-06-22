import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { error } from 'console';
import { CategoryService } from 'src/app/modules/shared/services/category.service';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {

  public categoryForm: FormGroup;

  constructor(private fb: FormBuilder, private categoryService: CategoryService, private dialogRef: MatDialogRef<NewCategoryComponent>,
                @Inject(MAT_DIALOG_DATA) public data:any) { 

    console.log(data);

    this.categoryForm = this.fb.group({
        name: ['', Validators.required]    
    });

    if (data != null){
      this.updateForm(data)
    }

  }

  ngOnInit(): void {
  }

  onSave(){
    let data = {
      id: this.dialogRef.id,
      nombreCat: this.categoryForm.get('name')?.value
    }

    if(this.data != null){
      //actualizar registro
      this.categoryService.updateCategoria(data)
        .subscribe((data: any) =>{
          this.dialogRef.close(1);
        }, (error:any) =>{
          this.dialogRef.close(2);
        })
    }else{
      //crear nuevo registro
      this.categoryService.saveCategorias(data)
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
    this.categoryForm = this.fb.group({
      name: [data.name, Validators.required]    
    });
  }

}
