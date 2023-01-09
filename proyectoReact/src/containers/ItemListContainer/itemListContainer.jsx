import { useState } from "react";
import { useEffect } from "react";
import { Link, NavLink, useParams } from 'react-router-dom';
import "./ItemListContainer.css"

import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import Loading from "../../components/loading/loading";



const ItemListContainer = (props) => {


  const [products,setProducts] = useState([]);
  const [loading,setLoading] =useState([true])
  const obj= useParams()


    
    useEffect(()=>{
      setLoading(true)
      const dataBase = getFirestore();
      const buscarColeccion = collection(dataBase,"productos");
      if(obj.categoriaProd === undefined){        //consulto si quiero que se muestren todos los productos o se tienen que ver filtrado

        getDocs(buscarColeccion)
        .then(respuesta => setProducts(respuesta.docs.map(elemento =>({id:elemento.id, ...elemento.data()}))))    //todo esto en detalle en el video firebase I minutio 1:20:00
        .catch(err=> console.log(err))
        .finally(()=> setLoading(false))
      }
      else{
         const busquedaFiltrada = 
                                  query(   //aplicamos un filtro
                                     buscarColeccion,    // aqui va de donde lo va a filtrar
                                     where("categoria","==",obj.categoriaProd) //esto es como lo va a filtrar  (busca que la categoria sea igual a taza)
                                   )
  
        getDocs(busquedaFiltrada)
          .then(respuesta => setProducts(respuesta.docs.map(elemento =>({id:elemento.id, ...elemento.data()}))))    //todo esto en detalle en el video firebase I minutio 1:20:00
          .catch(err=> console.log(err))
          .finally(()=> setLoading(false))
      }
    },[obj])
  

  



 


  return (
    <div className="itemListContainer">
    <ul className="itemListContainerUl">
        <p className="itemListContainerP">{props.titulo}</p>
        {loading? <Loading/>:
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