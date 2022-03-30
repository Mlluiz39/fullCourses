import React from 'react'
import './Relogio.css'

export default function Relogio(){
  return(
    <p className='relogio'>
      {new Date().toLocaleTimeString()}
    </p>
  )
}