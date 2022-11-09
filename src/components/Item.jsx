import React from 'react';
import "./Item.css";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
//{tittle, description, color, price, pictureUrl, stock}
export default function Item({item}) {
  return (
    <div className="item_container">
      <h3 className="item_tittle">{item.tittle}</h3>
      <img className="item_pic" src={item.pictureUrl} alt={"Foto producto " + item.tittle} />
      <p className="item_price">${item.price}</p>
      <Button variant="contained" >
        <Link to={"/item/" + item.id} style={{textDecoration:"none"}}>
            Ver Detalle
        </Link>
      </Button>
    </div>
  )
}
