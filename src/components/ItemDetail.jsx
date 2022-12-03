import { Button } from '@mui/material';
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import "./ItemDetail.css";
import { CartContext } from "../context/CartContext";
import Loading from './Loading';

export default function ItemDetail({item}) {
  
  const {addItem} = useContext(CartContext);

  const [addIsClicked, setAddIsClicked] = useState(false);

  const onAdd = (quantityToAdd) => {
    addItem(item, quantityToAdd)
    setAddIsClicked(true);
  }

      
  return (
    <>
    {item.id? (
        <div className="item_detail">   
      <img className="item_pic" src={item.pictureUrl} alt="" />
      <h3 className="item_tittle">{item.tittle}</h3>
      <p className="item_color">Color: {item.color}</p>
      <p className="item_price">${item.price}</p>
      <p className="item_stock">Stock: {item.stock}</p>
      {addIsClicked?
        <Link to="/cart">
          <Button variant="contained">
            Ir al Carrito
          </Button>
        </Link> : 
        <ItemCount max={item.stock} initial={1} onAdd={onAdd} /> 
      }
           
      <p className="item_desc">{item.description}</p>
      </div>
      ):
      <Loading/>}
      </>
  )
}
