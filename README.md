# TestUlises

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.1.

## Paso 1. Instalar dependencias y paquetes
Lo primero es posicionarse sobre el directorio del proyecto y ejecutar el comando `npm install`


## Paso 2. Correr el proyecto
Para correr el proyecto, ya instalados los paquetes, se debe ejecutar el comando  `ng serve` para levantar el servidor. Después, en el explorador navegar hacia `http://localhost:4200/`


## Sobre el proyecto:



////// Página de agregar de productos //////
El programa permite ingresar nuevos productos, si el nombre del producto ya existe, el producto se actualizará.
Además de que se muestra el listado de los productos.

////// Página del carrito //////
Se muestra el listado de los productos con su nombre, precio y cantidad disponible.
Se incluye botón para agregar productos al invetario, al momento de presionar el botón de agregar,se añade 
a la lista del carrito, se actualiza el inventario y se muestra el subtotal y total.(si ya no hay productos
disponibles, el sistema no permitirá añadir más).


////// Página de error //////
Si el usuario trata de entrar a una página diferente a las registradas se moestrará mensaje de error 404.