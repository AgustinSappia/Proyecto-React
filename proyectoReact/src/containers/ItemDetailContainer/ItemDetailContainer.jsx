import React from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useParams,NavLink } from "react-router-dom";
import { useState,useEffect } from 'react'
import Loading from '../../components/loading/loading';

import { getDoc,getFirestore,doc} from 'firebase/firestore'


const ItemDetailContainer = () => {

  const objId = useParams();  //Captura el dato de la url
  const [loading,setLoading] =useState([true])    //Es para setear el Loading
  const [prod,setProd] = useState({});        //setear producto useState
  
  useEffect(()=>{
    
    const baseDatos = getFirestore();
    const objetoBuscado = doc(baseDatos,"productos",objId.prodId);
    getDoc(objetoBuscado)
                        .then(respuesta => {                               
                          setProd({id:respuesta.id , ...respuesta.data() })                       
                        })
                        .catch(err=> console.log(err))
                        .finally(setTimeout(()=>{setLoading(false)},500) )
                        
  },[])

  return (
    
    <div>
      {!prod.nombre? 
        <div>
          {
            loading? <Loading/>
            : <div>
                <p>el producto no existe</p> 
                <NavLink to="/home" className='btn btn-success p-2 d-inline-block w-25 text-white' >home</NavLink>
              </div>
         
        
          }
          </div>
         
      :  <ItemDetail  product={prod} loading={loading}/> 
      }
    </div>
  )
}

export default ItemDetailContainer