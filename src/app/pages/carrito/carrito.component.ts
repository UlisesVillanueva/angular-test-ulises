import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../Models/producto.model';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styles: [
  ]
})
export class CarritoComponent implements OnInit {


  public productos:Producto[]=[];
  public productosCarrito:any[]=[];
  private ptotal:number=0;
  public cantidad:number=1;


  //Banderas para validar
  public agregado=false;
  // public existeProducto=false;
  // public cantproductos:number;

  
  constructor(private productoservice:ProductosService) {}

  ngOnInit(): void {
    this.getProductos();
    this.getCarrito();
  }

  //obtener un producto con un observable
  // getProductos(){
    // this.productoservice.getProductos()
    //                     .subscribe((data:any)=>{
    //                     this.productos= data;
    //                     console.log(this.productos);
    //                     });
  // }


  getCarrito(){
    this.productosCarrito = this.productoservice.getCarrito();
  }

  getProductos(){
    this.productos = this.productoservice.getProductos();
  }

  addCarrito1(pro:Producto){
    this.agregado=false;
    let cantidad=1;

    let newproducto:Producto={nombre:pro.nombre,precio:pro.precio,cantidad:cantidad};

    //si hay productos disponibles en el inventario
    if(pro.cantidad>= cantidad){ 
  
      //se descuenta la cantidad del inventario
      this.productos.forEach(p => {
        if(pro.nombre== p.nombre){
          p.cantidad= p.cantidad-cantidad;
        }
      });
  
      //se busca el producto en el carrito para saber si ya fue agregado
      this.productosCarrito.forEach(p => {
        if(p.nombre== pro.nombre){
          newproducto.cantidad=p.cantidad+cantidad;
          this.agregado=true;
        }
      });
  
      //si no ha sido agregado...
       if(!this.agregado){ 
        this.productosCarrito= this.productoservice.addCarrito(newproducto);
       }else{
        this.productosCarrito.forEach(p => {
          if(p.nombre== pro.nombre){
            p.cantidad=newproducto.cantidad;
          }
        });
       }
        
       this.productosCarrito.map((p)=>{
          p.subtotal= p.precio*p.cantidad;
       });
        
       this.ptotal = this.productosCarrito.reduce((sum, value) => ( sum + value.subtotal ),0);
       console.log(this.productosCarrito);
      console.log('Posteando formulario...');
  
    }else{
      Swal.fire({
        title: 'Error!',
        text: 'Ya no hay más productos disponibles en el inventario',
        icon: 'error'
       });
    } 

  }


  elimiarDelCarrito(producto:Producto){
    this.productos.forEach(p => {
      if(producto.nombre== p.nombre){
        p.cantidad= p.cantidad+producto.cantidad;
      }
    });
    this.productoservice.removeCarrito(producto);
    this.ptotal = this.productosCarrito.reduce((sum, value) => ( sum + value.subtotal ),0);
    Swal.fire({
      title: 'Producto eliminado del carrito!',
      text: 'El producto se eliminó del carrito',
      icon: 'success'
     });
  }
}


