import React from 'react'
import { Link } from 'react-router-dom'

const ButtomCart = () => {
  return (
    <div>
      <Link to="/">
        <button>Keep buying</button>
      </Link>
      <Link to="/cart">
        <button>Go to te Cart</button>
      </Link>
    </div>

  )
}
export default ButtomCart
