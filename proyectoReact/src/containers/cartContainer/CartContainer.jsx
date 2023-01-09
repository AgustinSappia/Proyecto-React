import React from 'react'
import { useCartContext } from '../../context/CartContext'
import Table from 'react-bootstrap/Table';
export const CartContainer = () => {
 const {cartItems,vaciarCarrito,precioTotal,eliminarItem} = useCartContext();
 

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
                    <tr>

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

          </div>
         : 
          <div>No hay objetos</div>
    }
    </div> 
    )
  }
export default CartContainer