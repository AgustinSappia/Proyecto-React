import React from 'react'
import { Link } from 'react-router-dom'

const ButtomCart = () => {
  return (
    <div>
      <Link to="/">
        <button>Seguir Comprando</button>
      </Link>
      <Link to="/cart">
        <button>Ir al carrito</button>
      </Link>
    </div>

  )
}
export default ButtomCart
