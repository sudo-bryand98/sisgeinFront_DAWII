import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarEncargadoComponent } from './componentes/encargado/listar-encargado/listar-encargado.component';
import { HttpClientModule } from "@angular/common/http"
import { FormsModule } from '@angular/forms';
import { AddEncargadoComponent } from './componentes/encargado/add-encargado/add-encargado.component';
import { EditEncargadoComponent } from './componentes/encargado/edit-encargado/edit-encargado.component';
import { ListarCategoriaComponent } from './componentes/categoria/listar-categoria/listar-categoria.component';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    ListarEncargadoComponent,
    AddEncargadoComponent,
    EditEncargadoComponent,
    ListarCategoriaComponent,
    NavigationComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
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
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
