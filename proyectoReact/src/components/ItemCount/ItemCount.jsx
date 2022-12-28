import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';


const ItemCount = ({handleInter}) => {
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
   const handleHandleInter = ()=> handleInter(contador);      //declaro handlehandleInner para poder agregar contador a la funcion onAdd que se esta llamando HandleInner
    
  return (
    <div>
        <div >
        <button onClick={aumentar}>+</button>
        <div>{contador}</div>
        <button onClick={disminuir}>-</button>
        </div>
        
        <button onClick={handleHandleInter}>agregar al carrito</button>  
        {/* EL handleHandleInner es la funcion onAdd que se ingreso al ItemCount Con el nombre de handleInner y Usamos handleHandleInner para poder hacer que al apretar onClick la funcion se HandleInner(o tambien llamada onAdd) se pueda guardar el dato del contador */}
      
    </div>
  )
}

export default ItemCount