import React from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import ItemCount from '../../components/ItemCount/ItemCount'
import ButtomCart from '../../components/buttomCart/ButtomCart'
import { useState,useContext } from 'react'
import { CartContext } from '../../context/CartContext'
const ItemDetailContainer = () => {
  
  const [inputType,setInputType] = useState("inicio") ;
  const {cartItems,agregarCarrito}=useContext(CartContext)
   const onAdd = (contador)=>{

    console.log("Usted eligio comprar: "+contador+" items")
    setInputType("comprando")
    
  }

  return (
    
    <div>
      <ItemDetail/>
      {
        inputType === "inicio" ? 
        <ItemCount handleInter={onAdd}/>    //tengo que pasar esto al item detail para poder agregar objetos al contexto 
         :
        <ButtomCart/>
      }
      
      </div>
  )
}

export default ItemDetailContainer