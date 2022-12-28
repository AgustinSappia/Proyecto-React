import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"


import NavBar from './components/navBar/navBar'
import ItemListContainer from './containers/ItemListContainer/itemListContainer'
import './App.css'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './containers/cartContainer/CartContainer'
import { CartContextProvider } from './context/CartContext'


import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"




function App() {
  const [count, setCount] = useState(0)

  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer titulo="Soy un ItemListContainer"/>} />
          <Route path='/detail/:prodId' element={<ItemDetailContainer/>} />
          <Route path='/categoria/:categoriaProd' element={<ItemListContainer/>}/>
          <Route path='/cart' element={<CartContainer/>}/>
          <Route path='*'element={<Navigate to="/" />}/>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
