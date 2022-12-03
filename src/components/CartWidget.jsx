import React, { useState, useEffect, useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import { CartContext } from "../context/CartContext";
import "./CartWidget.css"



export default function CartWidget() {
  const {cart, calcItemsQty} = useContext(CartContext);
  const [qty, setQty] = useState(0)

  useEffect(() => {
    setQty(calcItemsQty()) 
  }, [cart])


  
  return (
    <div>
        <IconButton>
          <ShoppingCartIcon fontSize="large" />
          {cart.length!=0 && <p className="cartWidget_qty">{qty}</p>}
        </IconButton>
    </div>
  )
}
