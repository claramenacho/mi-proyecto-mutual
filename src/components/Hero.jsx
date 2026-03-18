import React from 'react'
import '../styles/Hero.css'
import { Link } from 'react-router-dom'

export const Hero = () => {
  return ( 
    <section className="hero-split">
      {/* Mitad Izquierda: Texto y Botón */}
      <div className="hero-left">
        <h2>Un espacio para crecer juntos en comunidad.</h2>
        <p>"En Mutual DECAM promovemos el bienestar integral a través del deporte, la solidaridad y terapias para el equilibrio del cuerpo y la mente."</p>
        <Link to="/servicios"><button className="btn-servicios">Ver Servicios</button></Link>
      </div>
      
      {/* Mitad Derecha: Imagen */}
      <div className="hero-right">
        {/* Usá una sola imagen aquí. Podés reemplazar el src cuando tengas la foto final */}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRDwu7Uummi-eIsGjiMn_qnLmotLVOV1nfDw&s" alt="Bienestar y Comunidad" />
      </div>
    </section>
  )
}