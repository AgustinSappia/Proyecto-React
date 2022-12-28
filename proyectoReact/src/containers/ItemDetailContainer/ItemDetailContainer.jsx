import React from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import ItemCount from '../../components/ItemCount/ItemCount'
import ButtomCart from '../../components/buttomCart/ButtomCart'
import { useState,useContext } from 'react'
import { CartContext } from '../../context/CartContext'
const ItemDetailContainer = () => {
  
  const {cartItems,agregarCarrito}=useContext(CartContext)


  return (
    
    <div>
      <ItemDetail/>     
      </div>
  )
}

export default ItemDetailContainer