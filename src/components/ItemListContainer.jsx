import { width } from '@mui/system'
import React from 'react'

export default function ItemListContainer({greeting}) {
    const greetingStyle = {
        fontSize: "5rem",
        color: "#1976d2",
        backgroundColor: "#FFF",
        width: "100vw",
        padding: "10rem 0 10rem 0"
    }
  return (
    <div style={greetingStyle}>{greeting}</div>
  )
}
