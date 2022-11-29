import { useState } from 'react'
import reactLogo from './assets/react.svg'

import NavBar from './components/navBar/navBar'
import ItemListContainer from './components/ItemListContainer/itemListContainer'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"




function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <NavBar/>
      <ItemListContainer titulo="Soy un ItemListContainer" ele1="Taza cuadrada" ele2="Cuchillo sierrita"/>
    </div>
  )
}

export default App
