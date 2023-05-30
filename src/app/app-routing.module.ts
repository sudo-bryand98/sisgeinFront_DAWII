import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarEncargadoComponent } from './componentes/encargado/listar-encargado/listar-encargado.component';
import { AddEncargadoComponent } from './componentes/encargado/add-encargado/add-encargado.component';
import { EditEncargadoComponent } from './componentes/encargado/edit-encargado/edit-encargado.component';
import { ListarCategoriaComponent } from './componentes/categoria/listar-categoria/listar-categoria.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: 'encargados', component:ListarEncargadoComponent},
  {path: 'nuevoEncargado', component:AddEncargadoComponent},
  {path: 'editarEncargado', component:EditEncargadoComponent},
  {path: 'categorias', component:ListarCategoriaComponent},
  {path: 'dash', component:DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
