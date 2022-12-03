import React, {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import './ItemCount.css'


export default function ItemCount({max, initial, onAdd}) {
    
    let [count, setCount] = useState(initial);
    const addCount = () =>{
        
        count < max && setCount(count + 1);
    }

    const removeCount = () =>{
        
        count > 1 && setCount(count - 1);
    }

  return (
    <div className="itemCountContainer">
        {/* <p className="itemName"></p> */}
        <div className="CountContainer">
            <IconButton onClick={()=>removeCount()}>
                <RemoveIcon sx={{ fontSize: "2rem" }}/>
            </IconButton>
            <p>{count}</p>
            <IconButton onClick={()=>addCount()}>
                <AddIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
        </div>
        <Button variant="contained" onClick = {()=>onAdd(count)} >
            Agregar al Carrito
        </Button>
    </div>
  )
}
