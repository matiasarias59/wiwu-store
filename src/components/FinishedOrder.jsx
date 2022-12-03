import React from 'react';
import "./FinishedOrder.css"

export default function FinishedOrder({order}) {
    return(
        <div className="finishedOrder_container">
           <h2>
            ¡Gracias por tu compra! 
           </h2>
           <p>
            Tu número de compra es: {order} 
           </p>
        </div>
    )
}
