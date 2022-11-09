import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Categorias() {
  return (
    <div>
        
        <Button variant="contained" >
        <Link to="/category/smartwatch " style={{textDecoration:"none"}}>
        smartwatch
        </Link>
      </Button>
      <Button variant="contained" >
        <Link to="/category/pencil " style={{textDecoration:"none"}}>
        pencil
        </Link>
      </Button>
      <Button variant="contained" >
        <Link to="/category/mouses " style={{textDecoration:"none"}}>
        mouses
        </Link>
      </Button>
      <Button variant="contained" >
        <Link to="/category/auriculares " style={{textDecoration:"none"}}>
        auriculares
        </Link>
      </Button>
      <Button variant="contained" >
        <Link to="/category/hubs " style={{textDecoration:"none"}}>
        hubs
        </Link>
      </Button>
      <Button variant="contained" >
        <Link to="/category/mochilas " style={{textDecoration:"none"}}>
        mochilas
        </Link>
      </Button>
      <Button variant="contained" >
        <Link to="/category/cargadores " style={{textDecoration:"none"}}>
        cargadores
        </Link>
      </Button>
    </div>
  )
}
