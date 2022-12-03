# Wiwu Store - Tienda Online de productos electronicos

Wiwu Store es una E-comerce de productos electronicos / accesorios / tecnologia. 
Proyecto Final ReactJS - CoderHouse 
Creado por Matias Arias

Aplicación Web Ecommerce desarrollada con React JS, Material UI y Firebase.

Deploy: https://wiwu-store.web.app/

## Descripcion de la Aplicación

En el primer acercamiento la aplicación nos ofrece una vista de todos los productos disponibles en la base de datos, renderizando cada uno de ellos en el componente ItemList. 
El usuario a partir de aqui puede navegar entre categorias desde la NavBar, o ingresar el nombre de la catergoria especifica en la Url. 

Al clickear en "ver Detalle" en algun producto, se renderiza el componente ItemDetail, donde el usuario podrá tener una vision mas detallada de cada producto. 
Asi mismo tendrá un panel para seleccionar la cantidad deseada y agregar los items al carrito. 

Una vez en el carrito, se verá un detalle con los items agregados, con la opcion de quitar uno por uno de la lista, o eliminar todos. 
Tambien habrá un resumen donde se refleja el total a pagar. 

Al terminar la compra el usuario debe completar un formulario, que genera una Order en Firestore. 
Si se genera satisfactoriamente, mostraremos el Id de la order al usuario. 


## Librerias utilizadas

    React: V18.2.0,
    Material UI V5.10.10,
    Firebase: V9.14,
    React Router Dom: V6.4.3
