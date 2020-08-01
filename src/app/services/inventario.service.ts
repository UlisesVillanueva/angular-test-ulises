import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  private productos:Producto[];
  private productos$: Subject<Producto[]> = new Subject<Producto[]>();
  constructor() {
    
    this.productos=[
     { "nombre": "chocolate", "precio": 30, "cantidad": 100 },
     { "nombre": "azucar", "precio": 20, "cantidad": 100 },
     { "nombre": "café", "precio": 40, "cantidad": 100 },
     { "nombre": "coca-cola", "precio": 12, "cantidad": 100 },
     { "nombre": "jugo", "precio": 15, "cantidad": 100 },
     { "nombre": "piña", "precio": 20, "cantidad": 100 },
     { "nombre": "fresa", "precio": 40, "cantidad": 100 },
     { "nombre": "mango", "precio": 12, "cantidad": 100 },
     { "nombre": "pera", "precio": 15, "cantidad": 100 },
     { "nombre": "patatas ajajajajajja", "precio": 15, "cantidad": 100 }
    ];

    console.log(this.productos)
   }


  getProductos$(): Observable<Producto[]> {
    return this.productos$.asObservable();
  }

  getProductos(){
    return this.productos;
  }
 

  agregarProducto(producto: Producto) {
    this.productos.push(producto);
    this.productos$.next(this.productos);
  }


  nuevoProducto(producto:Producto): Producto {
    return {
      id: this.productos.length,
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad:producto.cantidad
    };
  }




}


export interface Producto{
  id?:number
  nombre:string;
  cantidad:number;
  precio:number;
};

