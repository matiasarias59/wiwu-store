import React from 'react'
import logo from '../assets/img/Favicon.png'


export default function Logo({scale}) {
  return (
    <div >
        <img src={logo}  alt="Logotipo" style={{width: scale}}/>
    </div>
  )
}
