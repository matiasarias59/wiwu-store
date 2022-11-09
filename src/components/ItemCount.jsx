import React, {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import './ItemCount.css'


export default function ItemCount({max, initial, onAdd}) {
    
    let [Count, setCount] = useState(initial);
    const addCount = () =>{
        
        Count < max && setCount(Count + 1);
    }

    const removeCount = () =>{
        
        Count > 1 && setCount(Count - 1);
    }

  return (
    <div className="itemCountContainer">
        {/* <p className="itemName"></p> */}
        <div className="CountContainer">
            <IconButton onClick={()=>removeCount()}>
                <RemoveIcon sx={{ fontSize: "2rem" }}/>
            </IconButton>
            <p>{Count}</p>
            <IconButton onClick={()=>addCount()}>
                <AddIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
        </div>
        <Button variant="contained" onClick = {()=>onAdd(Count)}>
            Agregar al Carrito
        </Button>
    </div>
  )
}
