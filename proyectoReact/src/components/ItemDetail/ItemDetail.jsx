import { useState } from "react"
import { useContext } from "react";
import { useEffect } from "react"
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { task } from "../../helpers/gFetch"



const ItemDetail = () =>{
    const {cartItems,agregarCarrito} = useContext(CartContext);     //contexto
    const [prod,setProd] = useState([]);        //setear producto useState
    const [loading,setLoading] =useState([true])    //Es para setear el Loading
    const objId = useParams();  //Captura el dato de la url
    useEffect(()=>{
            task(objId.prodId)
            .then(respuestaA=>{
                console.log(respuestaA)
                setTimeout(()=>{setProd(respuestaA);setLoading(false);},1000)
                
                })
            .catch(respuestaE=> console.log(respuestaE));
                
    },[])
    return(
        <div>
            {
            loading? <h2>cargando...</h2>: prod.map(elemento=><div key={elemento.id} className="card w-500 mt-3">
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
            )}
            
        </div>
    )
}

export default ItemDetail