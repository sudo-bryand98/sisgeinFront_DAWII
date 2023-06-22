import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ListarEncargadoComponent } from './componentes/encargado/listar-encargado/listar-encargado.component';
// import { AddEncargadoComponent } from './componentes/encargado/add-encargado/add-encargado.component';
// import { EditEncargadoComponent } from './componentes/encargado/edit-encargado/edit-encargado.component';
// import { ListarCategoriaComponent } from './componentes/categoria/listar-categoria/listar-categoria.component';
// import { AddCategoriaComponent } from './componentes/categoria/add-categoria/add-categoria.component';
// import { EditCategoriaComponent } from './componentes/categoria/edit-categoria/edit-categoria.component';
// import { ListarAlmacenComponent } from './componentes/almacen/listar-almacen/listar-almacen.component';
// import { AddAlmacenComponent } from './componentes/almacen/add-almacen/add-almacen.component';
// import { EditAlmacenComponent } from './componentes/almacen/edit-almacen/edit-almacen.component';
import { DashboardRoutingModule } from './modules/dashboard/dashboard-routing.module';




const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },

  // {path: 'encargados', component:ListarEncargadoComponent},
  // {path: 'nuevoEncargado', component:AddEncargadoComponent},
  // {path: 'editarEncargado', component:EditEncargadoComponent},
  // {path: 'categorias', component:ListarCategoriaComponent},
  // {path: 'nuevaCategoria', component:AddCategoriaComponent},
  // {path: 'editarCategoria', component:EditCategoriaComponent},
  // {path: 'almacen', component:ListarAlmacenComponent},
  // {path: 'nuevoAlmacen', component:AddAlmacenComponent},
  // {path: 'editarAlmacen', component:EditAlmacenComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {enableTracing: false, useHash: true}
    ),
    DashboardRoutingModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
