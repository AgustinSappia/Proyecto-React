import React from 'react'
import { useState } from 'react'

import "./itemCount.css"


const ItemCount = ({handleInter,product}) => {
  
  var stock = "5"   //declaro un stock cualquiera antes de todo para que no se rompa si no se carga un producto
  if(product !== undefined){     // pregunto si el producto ya se definio
    stock=product.stock;// asigno el stock
  }
    
    const [count,setCount]=useState(1);
   const increase = () => {
    if(count<stock){
      
      setCount(count + 1);
    }
  }
   const decrease = () =>{
    if(count > 1){
      setCount(count - 1);
    }
   }  
   const handleHandleInter = ()=> handleInter(count);      //declaro handlehandleInner para poder agregar count a la funcion onAdd que se esta llamando HandleInner
    
  return (
    <div >
        <div className='itemCountDiv'>
        <button className='botonIC' onClick={decrease}>-</button>
        <div className='botonIC' >{count}</div>
        <button className='botonIC' onClick={increase}>+</button>
        </div>
        
        <button onClick={handleHandleInter}>Agregar al carrito</button>  
        {/* EL handleHandleInner es la funcion onAdd que se ingreso al ItemCount Con el nombre de handleInner y Usamos handleHandleInner para poder hacer que al apretar onClick la funcion se HandleInner(o tambien llamada onAdd) se pueda guardar el dato del count */}
      
    </div>
  )
}

export default ItemCount