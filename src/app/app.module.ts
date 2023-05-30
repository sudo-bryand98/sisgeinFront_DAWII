import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarEncargadoComponent } from './componentes/encargado/listar-encargado/listar-encargado.component';
import { HttpClientModule } from "@angular/common/http"
import { FormsModule } from '@angular/forms';
import { AddEncargadoComponent } from './componentes/encargado/add-encargado/add-encargado.component';
import { EditEncargadoComponent } from './componentes/encargado/edit-encargado/edit-encargado.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarEncargadoComponent,
    AddEncargadoComponent,
    EditEncargadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
