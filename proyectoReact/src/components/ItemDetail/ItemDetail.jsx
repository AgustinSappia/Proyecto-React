import { useState } from "react"
import { useCartContext } from "../../context/CartContext";

import ButtomCart from "../buttomCart/ButtomCart";
import ItemCount from "../ItemCount/ItemCount";
import Loading from "../loading/loading";

import "./itemDetail.css"


const ItemDetail = ({product,loading}) =>{
  const {agregarCarrito} = useCartContext();
    const [inputType,setInputType] = useState("inicio") ;
    const producto= [product];   // saco el objeto del array (es la unica solucion que  encontre despues de 3 horas)

    const onAdd = (contador)=>{       
        agregarCarrito({...product,contador});//tengo que pasarlo con llaves porque en el contexto la funcion recibe un array
        setInputType("comprando")
      }
    
      
    return(
        <div>
            {// el loading esta abarcando desde el detalle hasta el producto, esto es para evitar que se pueda agregar productos al carrito antes de que se carguen los mismos
            loading? <Loading/>: <div>    

             {

               producto.map(elemento => <div key={`key-${elemento.id}`} >
                                <div>
                                  <h2 id="nombreDetail">{elemento.nombre} </h2>
                                </div>
                                <div> <h3 id="categoriaDetail">categoria: {elemento.categoria}</h3>  </div>
                                <div id="fotoDivDetail">
                                <img id="fotoDetail"  src={elemento.foto} alt={elemento.nombre}></img>  
                                </div>
                                <div id="precioDetail">
                                  ${elemento.precio}
                                </div>
                                <div id="stockDetail">stock:{elemento.stock}</div>
                                <div id="descripcionDetail">{elemento.descripcion}</div>
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