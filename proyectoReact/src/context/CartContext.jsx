import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext([])

export const CartContextProvider = ({children})=>{
    const [cartItems,setCartItems] = useState([]);
    
    const agregarCarrito = (producto) =>
             {
                   setCartItems(producto);
             }

    return(
        <CartContext.Provider value={{
            cartItems,
            agregarCarrito
        }}>
            {children}
        </CartContext.Provider>

    )

}