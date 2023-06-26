import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlmacenComponent } from './almacen/almacen.component';
import { NewAlmacenComponent } from './new-almacen/new-almacen.component';



@NgModule({
  declarations: [
    AlmacenComponent,
    NewAlmacenComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AlmacenModule { }
