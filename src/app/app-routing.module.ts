import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCategoriaComponent } from './componentes/categoria/listar-categoria/listar-categoria.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [

  {path: 'categorias', component:ListarCategoriaComponent},
  {path: 'dash', component:DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
