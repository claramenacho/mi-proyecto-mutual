import React from 'react'
import '../styles/Entidades.css'

export const Entidades = () => {
  return (
    <div className="entidades-page">
      <header className="servicios-header">
        <h1>Entidades y Convenios</h1>
        <p>Trabajamos en conjunto con instituciones referentes para brindar mejores beneficios.</p>
      </header>

      <section className="entidades-container">
        {/* Aquí podés repetir esta estructura por cada entidad */}
        <div className="entidad-card">
          <div className="logo-placeholder">
            {/* <img src="URL_LOGO" alt="Nombre Entidad" /> */}
            <span>Logo Entidad</span>
          </div>
          <h3>Nombre de la Institución</h3>
          <p>Convenio de salud y deportes.</p>
        </div>

        <div className="entidad-card">
          <div className="logo-placeholder">
            <span>Logo Entidad</span>
          </div>
          <h3>Centro de Comercio</h3>
          <p>Alianza para beneficios locales.</p>
        </div>

        <div className="entidad-card">
          <div className="logo-placeholder">
            <span>Logo Entidad</span>
          </div>
          <h3>Federación de Mutuales</h3>
          <p>Respaldo institucional y legal.</p>
        </div>
      </section>
    </div>
  )
}