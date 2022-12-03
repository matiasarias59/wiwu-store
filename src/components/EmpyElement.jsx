import React from 'react'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


export default function EmpyElement() {
    return (
        <div>
            <p>
                Ops.. Nada por aqui
            </p>
            <Link to="/" style={{textDecoration:"none"}}>
                <Button variant="contained">
                    Ir al Inicio
                </Button>
            </Link>

        </div>
    )
}
