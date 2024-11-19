import React, {useState} from 'react';
import "./NavBar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='navbar'> 
          <div className='nav_logo'>
              <img className='logo' src="../../../public/Logo-Planea-22.png" alt="" />
          </div>
          <div className={`nav_items ${isOpen && "open"}`}>
              <a className='nav_link' href="#">Inicio</a>
              <a className='nav_link' href="#">Nosotros</a>
              <a className='nav_link' href="#">Servicios</a>
              <a className='nav_link' href="#">Precios</a>
              <a className='nav_link' href="#">Contacto</a>
              <a className='nav_link' href="#">FAQs</a>
          </div>
          <div className={`nav_toogle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header> 
    </>
  )
}

export default Navbar
