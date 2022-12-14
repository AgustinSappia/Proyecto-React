import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import NavBar from './components/navBar/navBar'
import ItemListContainer from './components/ItemListContainer/itemListContainer'
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './components/cartContainer/CartContainer'

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"




function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer titulo="Soy un ItemListContainer" ele1="Taza cuadrada" ele2="Cuchillo sierrita"/>} />
      <Route path='/detail' element={<ItemDetailContainer/>} />
      <Route path='/cart' element={<CartContainer/>}/>
      <Route path='*'element={<Navigate to="/" />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
