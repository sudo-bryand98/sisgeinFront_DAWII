import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ListarEncargadoComponent } from './componentes/encargado/listar-encargado/listar-encargado.component';
// import { AddEncargadoComponent } from './componentes/encargado/add-encargado/add-encargado.component';
// import { EditEncargadoComponent } from './componentes/encargado/edit-encargado/edit-encargado.component';
// import { ListarCategoriaComponent } from './componentes/categoria/listar-categoria/listar-categoria.component';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
// import { EditCategoriaComponent } from './componentes/categoria/edit-categoria/edit-categoria.component';
// import { AddCategoriaComponent } from './componentes/categoria/add-categoria/add-categoria.component';
// import { ListarAlmacenComponent } from './componentes/almacen/listar-almacen/listar-almacen.component';
// import { AddAlmacenComponent } from './componentes/almacen/add-almacen/add-almacen.component';
// import { EditAlmacenComponent } from './componentes/almacen/edit-almacen/edit-almacen.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    // ListarEncargadoComponent,
    // AddEncargadoComponent,
    // EditEncargadoComponent,
    // ListarCategoriaComponent,
    // AddCategoriaComponent,
    // EditCategoriaComponent,
    // ListarAlmacenComponent,
    // AddAlmacenComponent,
    // EditAlmacenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
