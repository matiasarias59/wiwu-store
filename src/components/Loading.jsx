import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import "./Loading.css"

      

export default function Loading() {
  return (
    <div className="loading">
        <CircularProgress />
    </div>
  )
}
