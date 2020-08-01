import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { Error404Component } from './pages/error404/error404.component';
import { AgregarProductoComponent } from './pages/agregar-producto/agregar-producto.component';


const routes: Routes = [

  { path: '', redirectTo: '', component:AgregarProductoComponent, pathMatch: 'full' },
  { path: 'carrito', component: CarritoComponent},
  { path: 'productos', component: ProductosComponent},
  { path: '**', component: Error404Component },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
