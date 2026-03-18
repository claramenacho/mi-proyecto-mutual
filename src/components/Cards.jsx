import React from 'react'
import '../styles/Cards.css'


export const Cards = () => {
  return (
    <section className="services-container">
      <div className="card">
        <h3>Deportes</h3>
        <p>Fomentamos la salud física y el trabajo en equipo con actividades para todas las edades.</p>
      </div>
      
      <div className="card">
        <h3>Bienestar y Terapias</h3>
        <p>Encontrá tu equilibrio con nuestras sesiones de Reiki y terapias alternativas.</p>
      </div>

      <div className="card">
        <h3>Solidaridad</h3>
        <p>Proyectos y convenios pensados para ayudar a nuestra comunidad.</p>
      </div>
    </section>
  )
}