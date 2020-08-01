import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Carrito, Producto } from '../../Models/producto.model';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styles: [
  ]
})
export class CarritoComponent implements OnInit {

  public productosCarrito:Producto[]=[];


  constructor(private productoservice:ProductosService) { }

  ngOnInit(): void {
    this.getCarrito();  
  }

  getCarrito(){
    this.productosCarrito = this.productoservice.getCarrito();
  }

}
