import React from 'react'

export default function TestPromesas() {
    /* let array = ["guille", "romina", "matias"];

    if(array.length > 0){
        console.log(array);
    }else{
        console.log("che hay un error el array no esta cargado");
    } */

    // Hay una deuda 
  /*   let pago;
    if(pago > 0){
        console.log("genial porque la persona pago");
    }else{
        console.log("no pago y no tengo nada basicamente");
    } */

/*     let pago = new Promise((res, rej)=>{
        setTimeout(()=>{
            res("genial pago!!!")
        },3000)
    });
    console.log(pago)
 */

let prod = [{id:"001",name:"nombre", description:"descripcion", stock: 10}];

let mostrarProd = new Promise((res, rej)=>{
    setTimeout(()=>{
        res(prod)
    },3000)
});

mostrarProd.then((res)=>{
    console.log(res)
});

  return (
    <div>TestPromesas</div>
  )
}
