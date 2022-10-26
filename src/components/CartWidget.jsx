import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';

export default function CartWidget() {
  return (
    <div>
        <IconButton>
            <ShoppingCartIcon fontSize="large" />
        </IconButton>
    </div>
  )
}
