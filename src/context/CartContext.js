import React, { useEffect, createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart"))|| []);

    const addItem = (item, quantity) => {
        
        if (isInCart(item.id)) {
            const arrCart = [...cart]
            arrCart.map((el)=>{
                if (el.id == item.id) el.quantity += quantity 
            })
            setCart([...arrCart]);
            
        } else {
            item.quantity = quantity;
            setCart([...cart, item])
        }
    }

    const isInCart = (id) => {
        return (cart.find((item) => item["id"] == id)? true : false)
    }

    const removeItem = (itemId) =>{
        //console.log(itemId)
        const arrCart = [...cart]
       // console.log(arrCart)
        const index = arrCart.findIndex(e=>e.id==itemId)
        //console.log(index)
        arrCart.splice(index, 1)
        setCart([...arrCart])

       // console.log(cart)
    }

    const clear = () => {
       // console.log("limpiar cart")
        setCart([])
    }

    const calcItemsQty = () => {
        let qty = 0;
        cart.forEach(el => {
            qty += el.quantity
        });
        return (qty);
    }

    const calcTotalCart = () => {
        let total = 0
        cart.forEach(el => {
            let subTotal = el.quantity * el.price;
            total += subTotal;
        })
        return total;  
    }

      useEffect(() => {  
        localStorage.setItem("cart", JSON.stringify(cart)) 
      }, [cart])

     
      
    
    return (
        <CartContext.Provider value={{ addItem, removeItem, clear, cart, setCart, calcItemsQty, calcTotalCart}}>
            {props.children}
        </CartContext.Provider>
    )

}