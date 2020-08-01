import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MatInputModule, } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
// import {MatTableModule} from '@angular/material/table'
// import { MatButtonModule } from '@angular/material/button';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductosService } from './services/productos.service';

import { CarritoComponent } from './pages/carrito/carrito.component';
import { NavbarComponent } from './pages/shared/navbar/navbar.component';
import { Error404Component } from './pages/error404/error404.component';
import { AgregarProductoComponent } from './pages/agregar-producto/agregar-producto.component';



@NgModule({
  declarations: [
    AppComponent,
    CarritoComponent,
    NavbarComponent,
    Error404Component,
    AgregarProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
 
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
   
  ],
  providers: [
    ProductosService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
