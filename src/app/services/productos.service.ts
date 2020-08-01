import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Producto, Carrito } from '../Models/producto.model';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  

  // productos$:Observable<Producto[]>;
  productos:Producto[]=[
    { "nombre": "chocolate", "precio": 30, "cantidad": 1 },
    { "nombre": "azucar", "precio": 20, "cantidad": 100 },
    { "nombre": "café", "precio": 40, "cantidad": 100 },
    { "nombre": "coca-cola", "precio": 12, "cantidad": 100 },
    { "nombre": "jugo", "precio": 15, "cantidad": 100 },
    { "nombre": "piña", "precio": 20, "cantidad": 100 },
    { "nombre": "fresa", "precio": 40, "cantidad": 100 },
    { "nombre": "mango", "precio": 12, "cantidad": 100 },
    { "nombre": "pera", "precio": 15, "cantidad": 100 },
    { "nombre": "patatas ", "precio": 15, "cantidad": 100 }
   ];

   carrito:Producto[]=[];
   
  constructor(private httpcliente:HttpClient) {
    console.log('servicio de productos online...');
  }

  // getProductos(): Observable<Producto[]>{
  //   this.productos$= this.httpcliente.get<Producto[]>('/assets/data/productos.json');
  //   return this.productos$;
  // }

  getProductos(){
    return this.productos;
  }

  getCarrito(){
    return this.carrito;
  }



  //  addProducto(producto:Producto):Observable<any>{
  //   console.log(producto)
  //   return this.httpcliente.post('/assets/data/productos.json',producto);
  //  }

   addProducto(producto:Producto){
    this.productos.push(producto);
    return this.productos;
   }

   addCarrito(producto:Producto){
    this.carrito.push(producto);
    return this.carrito;
   }

   removeCarrito(producto:Producto){
    const index: number = this.carrito.indexOf(producto);
    if (index !== -1) {
        this.carrito.splice(index, 1);
    }        
    return this.carrito;
   }
}

