import React from 'react'
import "./ItemList.css"
import Item from './Item'
import CircularProgress from '@mui/material/CircularProgress';



//El item tiene que tener Titulo - Foto - Descripcion - color - Precio - stock

/* <Item tittle={catalogue[0].tittle} description = {catalogue[0].description} pictureUrl = {catalogue[0].pictureUrl} color = {catalogue[0].color} price = {catalogue[0].price} stock = {catalogue[0].stock} /> */
export default function ItemList({items}) {

  return (
    <div className="item_list">
    {!items.length && <CircularProgress />}
    {items.map((item)=>{
    return(
      <Item item={item} key={item.id} />
    )
  })}
    </div>
  )
}



/* {catalogue.map((item)=>{
  return(
    <Item tittle={item.tittle} description = {item.description} pictureUrl = {item.pictureUrl} color = {item.color} price = {item.price} stock = {item.stock} />
  ) */

 // tittle={item.tittle} description = {item.description} pictureUrl = {item.pictureUrl} color = {item.color} price = {item.price} stock = {item.stock} key={item.id}