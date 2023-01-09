import React from 'react'

import { useCartContext } from '../../../context/CartContext'
import "./carrito.css"

const Carrito = () => {
  const {cantidadTotal} = useCartContext();
  return (
    <div>
      <i className="bi bi-basket-fill"></i>
      <div>{cantidadTotal()>0 && cantidadTotal()}</div>  
    </div>
  )
}

export default Carrito