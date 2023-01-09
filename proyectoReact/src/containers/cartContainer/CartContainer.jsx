
import { useCartContext } from '../../context/CartContext'
import Table from 'react-bootstrap/Table';
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


export const CartContainer = () => {
 const {cartItems,vaciarCarrito,precioTotal,eliminarItem} = useCartContext();
 
 const [idCompra,setIdCompra] = useState()

 const [dataForm,setDataform] = useState({
  name:"",
  email:"",
  phone:"",
  confirmarEmail:""
 })


 const generarOrden = (event) =>{
  event.preventDefault()  // es para que no se actualice cuando apretamos el boton del formulario
  
  const orden = {
    //tengo que agregar validaciones
    comprador: {name:dataForm.name,email:dataForm.email,phone:dataForm.phone},  //lo pongo asi porque no quiero que en la orden aparezca el valor de "confirmarEmail"
    items: cartItems.map (({id, nombre, precio}) => ({id,nombre,precio})),  //destructuro solo los campos que necesito y los vuelvo a llamar para crear un array que contenga solo esos datos
    total: precioTotal()
  }
 

  const dataBase = getFirestore();
  const queryOrdenes = collection(dataBase, "ordenes");
  if (dataForm.email!== "" && dataForm.name!== "" && dataForm.phone!== ""){
    
    if(dataForm.email === dataForm.confirmarEmail){
      addDoc(queryOrdenes, orden)
      .then( resp => {
        setIdCompra(resp.id)
        salert("su compra se realizo con exito")
        
      } )
      .catch(err => console.log(err))
      .finally(()=>{
        vaciarCarrito();
        setDataform({
          name:"",
          phone:"",
          email:"",
          confirmarEmail:""
        })
        
      })
    }
    else{
      alert("Compruebe que sus emails coincidan ")
    }
  }
  else{
    alert("Por favor completa el formulario")
  }
    
 }

 const handleOnChange= (evento)=>{

 setDataform({
  ...dataForm,
  [evento.target.name]:evento.target.value,
 })
}
  return (
    <div>
      {

        cartItems.length >0 ?  
          <div>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th></th>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Precio unitario</th>
                  <th>Precio total</th>
                </tr>
              </thead>
              <tbody>
                {
                  cartItems.map(objeto=> 
                    <tr key={objeto.id}>

                      <th><button onClick={ ()=> eliminarItem(objeto.id)}>x</button></th>
                      <td>{objeto.nombre}</td>
                      <td>{objeto.contador}</td>
                      <td>{objeto.precio}</td>
                      <td>{objeto.precio*objeto.contador}</td>

                    </tr> 
                  )
                }
                <tr>

                  <td colSpan={3} ></td>
                  <td>Precio total:</td>
                  <td>${precioTotal()}</td>
                
                </tr>
              </tbody>

            </Table>
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
            
            
           <form onSubmit={generarOrden}>
          <div className='form-group w-50'>
            <label htmlFor="">Nombre:</label>
            <input 
                  type="text" 
                  name='name'  
                  className='form-control'
                  value={dataForm.name}
                  onChange={handleOnChange}/>
                  
            <label htmlFor="">Telefono:</label>
            <input 
                  type="number" 
                  name='phone' 
                  className='form-control' 
                  value={dataForm.phone} 
                  onChange={handleOnChange}/>
            <label htmlFor="">Email:</label>
            <input 
                  type="email" 
                  name="email" 
                  className='form-control' 
                  value={dataForm.email}
                  onChange={handleOnChange}/>
                <label htmlFor="">Repita su email:</label>
            <input 
                  type="email" 
                  name="confirmarEmail" 
                  className='form-control' 
                  value={dataForm.confirmarEmail}
                  onChange={handleOnChange}/>
            <button >generar orden</button>
          </div>
        </form> 
        

          </div>
         : idCompra===undefined?
         <div>
          <h2>
          No hay objetos
          </h2>
          <NavLink to="/home" className='btn btn-success p-2 d-inline-block w-25 text-white' >home</NavLink>
          </div>:
         <div>
          <h2>Muchas gracias por su compra!!!</h2>
          <h3>su id es : {idCompra}</h3>
          <NavLink to="/home" className='btn btn-success p-2 d-inline-block w-25 text-white' >home</NavLink>
         </div>
        }

     

    
    </div> 
    )
  }
export default CartContainer