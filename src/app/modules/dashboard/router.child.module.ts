import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from '../category/components/category/category.component';
import { EncargadoComponent } from '../encargado/encargado/encargado.component';
import { ProductoComponent } from '../producto/producto/producto.component';
import { AlmacenComponent } from '../almacen/almacen/almacen.component';

const childRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'category', component: CategoryComponent },
    { path: 'encargado', component: EncargadoComponent },
    { path: 'producto', component: ProductoComponent },
    { path: 'almacen', component: AlmacenComponent }
]

@NgModule({
    imports: [RouterModule.forChild(childRoutes)],
    exports: [RouterModule],
})
export class RouterChildModule { }
