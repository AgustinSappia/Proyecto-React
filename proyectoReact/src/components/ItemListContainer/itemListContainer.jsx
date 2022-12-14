import { useState } from "react";
import { useEffect } from "react";
import { task } from "../../helpers/gFetch";
import "./ItemListContainer.css"





const ItemListContainer = (props) => {


  const [products,setProducts] = useState([]);
  const [loading,setLoading] =useState([true])
  useEffect(()=>{
    task() //simulador de fetch para consultar una api
    .then(respuestaAfirmativa =>{setTimeout(()=>{
      setProducts(respuestaAfirmativa); 
      setLoading(false)
    },3000)})
    .catch(err =>{console.log (err)})
    .finally((console.log("no olvidar de borrar")));
},[])
 console.log("productos",products);

  return (
    <div className="itemListContainer">
    <ul className="itemListContainerUl">
        <p className="itemListContainerP">{props.titulo}</p>
        {loading? <h2>cargando...</h2>:
        products.map(prod=> <div key={prod.id} className="card w-500 mt-3">
                                <div>
                                  {prod.nombre} -/- {prod.categoria}
                                </div>
                                <div>
                                <img src={prod.foto} alt={prod.nombre}></img>  
                                </div>
                                <div>
                                  <button>ver detalle</button>
                                </div>
                            </div>           )}
        <li>{props.ele1}</li>
        <li>{props.ele2}</li>
    </ul>
    </div>
  )
}

export default ItemListContainer