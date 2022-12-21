import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';

const ItemCount = () => {
    const stock = "5";
    const [contador,setearContador]=useState(1);
   const aumentar = () => {
    if(contador<=stock){
      
      setearContador(contador + 1);
    }
  }
   const disminuir = () =>{
    if(contador > 1){
      setearContador(contador - 1);
    }
   }  

    
  return (
    <div>
        <div >
        <button onClick={aumentar}>+</button>
        <div>{contador}</div>
        <button onClick={disminuir}>-</button>
        </div>
        <NavLink  to= "/cart">
        <button>agregar al carrito</button>
        </NavLink>
    </div>
  )
}

export default ItemCount