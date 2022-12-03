import React, {useContext, useState,  } from 'react'
import { Button } from '@mui/material';
import { CartContext } from "../context/CartContext";
import {addDoc, collection, getFirestore, } from "firebase/firestore";
import "./Checkout.css"
import FinishedOrder from './FinishedOrder';

export default function Checkout() {
    
    const {cart, calcTotalCart, clear} = useContext(CartContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [orderId, setOrderId] = useState("");

    const validateForm = () =>{
        const items = cart.map((item)=>{
            const {id,tittle,price,quantity} = item 
            return {id,tittle,price,quantity}

        })
        const order = {
            buyer: {
                name,
                email,
                phone,
            },
            items,
            totalToPay: calcTotalCart(),
        }
        const db = getFirestore();
        const orderCollections = collection(db, "orders");
        addDoc(orderCollections, order).then(({id}) => {
            setOrderId(id)
            clear();    
        });
    }

    if(orderId){
        return(
            <FinishedOrder order={orderId}/>
        )
    } 
    

  return (
    <div className="checkout_container">
        <h2>Ya casi terminamos!</h2>
        <p>Por favor ingresa tus datos:</p>
        <input className="checkout_input" type="text" placeholder="Nombre" onChange={(e)=>setName(e.target.value)}/>
        <input className="checkout_input" type="email" placeholder="E-mail" onChange={(e)=>setEmail(e.target.value)}/>
        <input className="checkout_input" type="tel" placeholder="Telefono" onChange={(e)=>setPhone(e.target.value)}/>
        <div className="checkout_submit">
        <Button  variant="contained" onClick={validateForm}>Enviar</Button>
        </div>
    </div>
  )
}
