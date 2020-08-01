import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Producto, Carrito } from '../../Models/producto.model';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {

  public productos:Producto[]=[];
  public productosCarrito:Producto[]=[];
  private newproducto:Producto={nombre:'',precio:1,cantidad:0};
  private ptotal:number=0;

  //Banderas para validar
  public agregado=false;
  public existeProducto=false;
  public cantproductos:number;
  
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

  addCarrito(pro:Producto){
    this.agregado=false;
    this.existeProducto=false;
    this.cantproductos=0;
    
    //si hay productos disponibles en el inventario
    if(pro.cantidad> 0){ 
  
      //se descuenta del inventario
      this.productos.forEach(p => {
        if(pro.nombre== p.nombre){
          p.cantidad= p.cantidad-1;
        }
      });
  
      //se busca el producto en el carrito para saber si ya fue agregado
      this.productosCarrito.forEach(p => {
        if(p.nombre== pro.nombre){
          this.newproducto.cantidad= this.newproducto.cantidad+1; 
          console.log(this.newproducto.cantidad);
          this.agregado=true;
        }
      });
  
    
       if(!this.agregado){   
        this.newproducto.nombre=pro.nombre;
        this.newproducto.cantidad=this.cantproductos+1;
        this.newproducto.precio=pro.precio;
        this.productosCarrito= this.productoservice.addCarrito(this.newproducto);
        // this.getCarrito();
        console.log(this.productosCarrito)
       }
  
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
    console.log(producto);
    this.productoservice.removeCarrito(producto);
  }

}





// addCarrito(pro:Carrito){
//   this.agregado=false;
//   this.existeProducto=false;
  
//   //si hay inventario
//   console.log(pro);
//   if(pro.agregados> 0){ 
//     this.productosCarrito.forEach(p => {
//       if(p.nombre== pro.nombre){
//         // producto.cantidad=p.cantidad+1; 
//         this.agregado=true;
//       }
//     });

//     this.productos.forEach(p => {
//       if(pro.nombre== p.nombre){
//         console.log(p.cantidad);
//         p.cantidad= p.cantidad-1;
//         console.log(p.cantidad);
//         this.existeProducto=true;
//       }
//     });
      
//      if(!this.agregado){   
//       console.log(pro)
//       this.productoservice.addCarrito(pro);
//       this.getCarrito();
//       console.log(pro);
//       //
//      }
  



//     console.log('Posteando formulario...');

//   }else{
//     Swal.fire({
//       title: 'Error!',
//       text: 'Ya no hay más productos disponibles en el inventario',
//       icon: 'error'
//      });
//   }    
// }



