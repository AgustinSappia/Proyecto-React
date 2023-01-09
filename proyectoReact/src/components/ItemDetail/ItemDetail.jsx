import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

import { task } from "../../helpers/gFetch"
import ButtomCart from "../buttomCart/ButtomCart";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({product,loading}) =>{
  const {cartItems,agregarCarrito} = useCartContext();

    const [inputType,setInputType] = useState("inicio") ;
    const producto= [product];   // saco el objeto del array (es la unica solucion que  encontre despues de 3 horas)

    const onAdd = (contador)=>{
     
        //console.log(agregarCarrito)
        
        agregarCarrito({...product,contador});//tengo que pasarlo con llaves porque en el contexto la funcion recibe un array
        console.log(cartItems)
        setInputType("comprando")
      }

    return(
        <div>
            {// el loading esta abarcando desde el detalle hasta el producto, esto es para evitar que se pueda agregar productos al carrito antes de que se carguen los mismos
            loading? <h2>cargando...</h2>: <div>    

             {

               producto.map(elemento => <div key={elemento.id} className="card w-500 mt-3">
                                <div>
                                  {elemento.nombre} 
                                </div>
                                <div>categoria:  {elemento.categoria}</div>
                                <div>
                                <img src={elemento.foto} alt={elemento.nombre}></img>  
                                </div>
                                <div>
                                  ${elemento.precio}
                                </div>
                                <div>stock:{elemento.stock}</div>
                                <div>{elemento.descripcion}</div>
                            </div>   
            )
          }
        {

        inputType === "inicio" ? 
        <ItemCount handleInter={onAdd} producto={product}/>    //tengo que pasar esto al item detail para poder agregar objetos al contexto 
         :
        <ButtomCart/>
      
        }
            </div>
            }

      
            
        </div>
    )
}

export default ItemDetail