import React from 'react'
import ItemCount from './ItemCount'
import "./ItemDetail.css"
import CircularProgress from '@mui/material/CircularProgress';

export default function ItemDetail({item}) {
    const mostrarCantidad = (count) =>{
        alert(`Agregaste ${count} ${item.tittle} al carrito`);
      }
      
  return (
    <div className="item_detail">
      {item.id? (
      <>
      <img className="item_pic" src={item.pictureUrl} alt="" />
      <h3 className="item_tittle">{item.tittle}</h3>
      <p className="item_color">Color: {item.color}</p>
      <p className="item_price">${item.price}</p>
      <p className="item_stock">Stock: {item.stock}</p>
      <ItemCount max={item.stock} initial={1} onAdd={mostrarCantidad} />
      <p className="item_desc">{item.description}</p>
      </>):
      <><CircularProgress /></>}
      
    </div>
  )
}
