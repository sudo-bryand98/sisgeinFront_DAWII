import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './pages/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CategoryModule } from '../category/category.module';
import { EncargadoModule } from '../encargado/encargado.module';
import { ProductoModule } from '../producto/producto.module';
import { AlmacenModule } from '../almacen/almacen.module';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CategoryModule,
    EncargadoModule,
    ProductoModule,
    AlmacenModule,
    MaterialModule,
    FlexLayoutModule,
    NgChartsModule
  ]
})
export class DashboardModule { }
