import React from 'react'
import './App.css'
import Inicio from './components/section/inicio'
import NavBar from './components/navbar/Navbar'
import Nosotros from './components/section/Nosotros'

function App() {

  return (
    <>
      <NavBar/>
      <h1>Hola Mundo</h1>
      <Inicio/>
      <Nosotros/>
    </>
  )
}

export default App
