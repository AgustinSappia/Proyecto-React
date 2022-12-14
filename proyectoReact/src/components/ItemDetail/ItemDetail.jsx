import { useState } from "react"
import { useEffect } from "react"
import { task } from "../../helpers/gFetch"

const ItemDetail = () =>{
    const [prod,setProd] = useState([]);
    useEffect(()=>{
            task()
            .then(respuestaA=>{
                setTimeout(()=>{setProd(respuestaA);},2000)
                })
            .catch(respuestaE=> console.log(respuestaE));
                
    },[])
    return(
        <div>
            {prod.map(elemento=><div key={elemento.id} className="card w-500 mt-3">
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