import { useState } from "react";
import { useEffect } from "react";
import { task } from "../../helpers/gFetch";
import { Link, NavLink, useParams } from 'react-router-dom';
import "./ItemListContainer.css"





const ItemListContainer = (props) => {


  const [products,setProducts] = useState([]);
  const [loading,setLoading] =useState([true])
  const obj= useParams()
  useEffect(()=>{
    if (obj.categoriaProd) {
        task() //simulador de fetch para consultar una api
    .then(respuestaAfirmativa =>{setTimeout(()=>{
      setProducts(respuestaAfirmativa.filter(prod => prod.categoria===obj.categoriaProd)); 
      setLoading(false)
    },1000)})
    .catch(err =>{console.log (err)})
    } else {
      task() //simulador de fetch para consultar una api
      .then(respuestaAfirmativa =>{setTimeout(()=>{
        setProducts(respuestaAfirmativa); 
        setLoading(false)
      },1000)})
      .catch(err =>{console.log (err)})
    }

},[obj.categoriaProd])

  console.log(obj.categoriaProd)


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
                                  <Link to={`/detail/${prod.id}`}>
                                  <button>ver detalle</button>
                                  </Link>
                                </div>
                            </div>           )}
    </ul>
    </div>
  )
}

export default ItemListContainer