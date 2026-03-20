import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'


export const Navbar = () => {
  return (

    

    <>
    <header className="main-header">
      <div className="logo">
        <h1>Mutual Decam</h1>
      </div>
    
    
    <nav>
        <div>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>
            <button>Inicio</button></NavLink>
            <NavLink to="/servicios" className={({ isActive }) => isActive ? 'active-link' : ''}><button>Servicios</button></NavLink>
            <NavLink to="/lamutual" className={({ isActive }) => isActive ? 'active-link' : ''}>
            <button>La Mutual</button></NavLink>
            <NavLink to="/entidades" className={({ isActive }) => isActive ? 'active-link' : ''}><button>Entidades</button></NavLink>
            <NavLink to="/contacto" className={({ isActive }) => isActive ? 'active-link' : ''}>
            <button>Contacto</button></NavLink>
            <NavLink to="/feriaArtesanos" className={({ isActive }) => isActive ? 'active-link' : ''}>
            <button>Feria</button></NavLink>
        </div>
        
    </nav>
    
  
        
    
    </header>

    </>  )
}
