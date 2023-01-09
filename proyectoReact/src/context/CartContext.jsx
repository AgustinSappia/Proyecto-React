import { useContext, useState, createContext } from "react";


export const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children})=>{
    const [cartItems,setCartItems] = useState([]);
    
    const agregarCarrito = (producto) =>
             {
                console.log(producto)
                
               const encontradoProducto = cartItems.filter(elemento => elemento.id===producto.id); // encuentro si el elemento esta repetido
                 if(encontradoProducto.length>0){
                    console.log(encontradoProducto)
                    const elemento=encontradoProducto[0];
                    elemento.contador = elemento.contador + producto.contador ;
                    setCartItems([...cartItems]);       // con esto me aseguro que se renderice otra vez, se nota la diferencia en el logo del carrito, si esto no estubiera el logo no se actualizaria

                 }
                 else{

                     setCartItems([   //uso un array para poder unir los productos que ya estaban en el carrito con el nuevo ingresado en onAdd       
                     ...cartItems,
                     producto
                     
                    ]);
                }
             }
            //vaciar carrito
             const vaciarCarrito = ()=>{
                setCartItems([]); 
             }
             
             //cantidad total
             const cantidadTotal = ()=> cartItems.reduce((count,producto)=>count=count+producto.contador,0)  //"reduce" nos da la oportunidad de recorrer el array incluyendo un contador, el "0" que aparece es el valor inicial que va a tener la variable contador
             
             // mostrar precio total
             const precioTotal = ()=> cartItems.reduce((count,producto)=>count = count + (producto.contador * producto.precio),0)  //"reduce" nos da la oportunidad de recorrer el array incluyendo un contador, el "0" que aparece es el valor inicial que va a tener la variable contador

             //eliminar por item

             const eliminarItem = (id) => setCartItems(cartItems.filter( elemento => elemento.id !== id))   //setea un nuevo cartItems con todos los productos menos el del id filtrado por eso la desigualdad



    return(
        <CartContext.Provider value={{
            cartItems,
            agregarCarrito,
            vaciarCarrito,
            cantidadTotal,
            precioTotal,
            eliminarItem
        }}>
            {children}
        </CartContext.Provider>

    )

}