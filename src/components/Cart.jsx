import React, { useContext, useEffect} from 'react';
import { CartContext } from "../context/CartContext";
import "./Cart.css";
import { Button } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';
import EmpyElement from './EmpyElement';

export default function Cart() {

  const {cart, clear,removeItem, calcTotalCart} = useContext(CartContext);
  //console.log(cart)

    
    if (cart.length==0){
      //{console.log("bla clas")}
      return <EmpyElement/>
      }

  

  return (
    <>
      <div className="cart_container">
        <h1>Mi Carrito</h1>
        {cart.map((item) => {
          return (
            <div className="item_cart" key={item.id}>
              <img className="item_pic_cart" src={item.pictureUrl} alt="" />
              <h3 className="item_tittle">{item.tittle}</h3>
              <p className="item_color">Color: {item.color}</p>
              <p className="item_quantity">{item.quantity} </p>
              <p className="item_price">${item.price}</p>
              <Button className="del_btn" onClick={() => { removeItem(item.id) }}><RemoveCircleOutlineIcon /></Button>
            </div>
          )
        })}

        <div className="cart_total">
          <p>Total: 
            <span> ${calcTotalCart()}</span>
          </p>
        </div>
        <div className="cart_buttons_container">
          <Button className="del_btn" variant="contained" onClick={clear}>
            <DeleteForeverIcon /> Vaciar Carrito
          </Button>
          <Link to="/checkout">
            <Button variant="contained">
              Terminar Compra
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
