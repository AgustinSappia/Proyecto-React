import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom";
import { task } from "../../helpers/gFetch"

const ItemDetail = () =>{
    const [prod,setProd] = useState([]);
    const [loading,setLoading] =useState([true])
    const objId = useParams();
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