import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { Subscription, of } from 'rxjs';
import { InventarioService } from '../../services/inventario.service';
import { Producto } from '../../Models/producto.model';
import { provideRoutes } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})


export class AgregarProductoComponent implements OnInit {

  public formSubmited= false;
  public existeProducto=false;

  private productosSubs:Subscription;
  public productos:Producto[]=[];
 

  public productoForm= this.fb.group({
    nombre:['',[Validators.required, Validators.minLength(4)]],
    precio:['',[Validators.required]],
    cantidad:['',[Validators.required, Validators.minLength(7)]],
  });
  
  constructor(private productoservice:ProductosService,private fb:FormBuilder) {}

  ngOnInit(): void {
    this.getProductos();  
  }

  // getProductos(){
  //   this.productosSubs = this.productoservice.getProductos()
  //                       .subscribe((data:any)=>{
  //                        this.productos= data;         
  //   });

  getProductos(){
    this.productos = this.productoservice.getProductos();
  }
  

  // ngOnDestroy(): void {
  //   this.productosSubs.unsubscribe(); 
  // }
 
  agregarProducto(){
    this.formSubmited=true;
    this.existeProducto=false;

    if(this.productoForm.valid){ 
      this.productos.forEach(producto => {
        if(producto.nombre== this.productoForm.value.nombre){
          producto.precio=this.productoForm.value.precio;
          producto.cantidad=  this.productoForm.value.cantidad;
          this.existeProducto=true;
        }
      });
       if(!this.existeProducto){
        this.productoservice.addProducto(this.productoForm.value);
        Swal.fire({
          title: 'Producto agregado!',
          text: 'Su producto se agregó al inventario',
          icon: 'success'
        })
       }else{
        Swal.fire({
        title: 'Producto actualizado!',
        text: 'Su producto se actualizó correctamente',
        icon: 'info'
       });}    
      console.log(this.productos);
    }else{
      console.log('Formulario incorrecto...');
    }
  }

  // agregar un producto con un observable
  // agregarProducto(){
  //   this.formSubmited=true;
  //   if(this.productoForm.valid){
  //     console.log('Posteando formulario...');
  //     this.productoservice.addProducto(this.productoForm.value).subscribe(resp=>{
  //       console.log(resp)
  //       if(resp.success){
  //         this.getProductos();
  //       }
  //     });
  //   }else{
  //     console.log('Formulario incorrecto...');
  //   }
  // }


  campoNoValido(campo:string):boolean{
    if(this.productoForm.get(campo).invalid && this.formSubmited){
      return true;
    }else{
      return false;
    }
  }



}