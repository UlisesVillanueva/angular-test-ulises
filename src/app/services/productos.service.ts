import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Producto } from '../Models/producto.model';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  

  // productos$:Observable<Producto[]>;
  productos:Producto[]=[
    { "nombre": "Chocolate", "precio": 30, "cantidad": 10 },
    { "nombre": "Azucar", "precio": 22, "cantidad": 5 },
    { "nombre": "Café", "precio": 40, "cantidad": 20 },
    { "nombre": "Coca-cola", "precio": 12, "cantidad": 100 },
    { "nombre": "Jugo", "precio": 15, "cantidad": 100 },
    { "nombre": "Piña", "precio": 20, "cantidad": 100 },
    { "nombre": "Fresa", "precio": 40, "cantidad": 100 },
    { "nombre": "Mango", "precio": 12, "cantidad": 100 },
    { "nombre": "Pera", "precio": 15, "cantidad": 100 },
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

