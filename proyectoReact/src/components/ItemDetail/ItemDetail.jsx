import { useState } from "react"
import { useContext } from "react";
import { useEffect } from "react"
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { task } from "../../helpers/gFetch"
import ButtomCart from "../buttomCart/ButtomCart";
import ItemCount from "../ItemCount/ItemCount";



const ItemDetail = () =>{
    const {cartItems,agregarCarrito} = useContext(CartContext);     //contexto
    const [prod,setProd] = useState([]);        //setear producto useState
    const [loading,setLoading] =useState([true])    //Es para setear el Loading
    const objId = useParams();  //Captura el dato de la url
    const [inputType,setInputType] = useState("inicio") ;
    useEffect(()=>{
            task(objId.prodId)
            .then(respuestaA=>{
                console.log(respuestaA)
                setTimeout(()=>{setProd(respuestaA);setLoading(false);},1000)
                
                })
            .catch(respuestaE=> console.log(respuestaE));
                
    },[])
    const onAdd = (contador)=>{

        console.log("Usted eligio comprar: "+contador+" items")
        setInputType("comprando")
        
      }
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

{
        inputType === "inicio" ? 
        <ItemCount handleInter={onAdd}/>    //tengo que pasar esto al item detail para poder agregar objetos al contexto 
         :
        <ButtomCart/>
      }
      
            
        </div>
    )
}

export default ItemDetail