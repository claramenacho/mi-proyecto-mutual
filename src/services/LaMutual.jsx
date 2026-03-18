import React from 'react'
import '../styles/Servicios.css'


export const LaMutual = () => {
  return (
    <div className="la-mutual-page">
      <header className="servicios-header">
        <h1>Nuestra Institución</h1>
        <p>Conocé los valores y el camino recorrido por Mutual DECAM.</p>
      </header>

      {/* Bloque 1: Misión y Visión (Ya lo tenemos) */}
      <section className="servicio-bloque">
        <div className="servicio-info">
          <h2>Misión y Visión</h2>
          <p>Nuestra misión es brindar servicios de salud, recreación y asistencia social de excelencia, promoviendo el bienestar integral de nuestros asociados...</p>
        </div>
        <div className="servicio-imagen">
          <img src="URL_FOTO_ACTUAL" alt="Sede Mutual DECAM" />
        </div>
      </section>

      {/* Bloque 2: Nuestra Historia (Clase reverse) */}
      <section className="servicio-bloque reverse">
        <div className="servicio-info">
          <h2>Nuestra Historia</h2>
          <p>
            Nacimos con el sueño de fortalecer los lazos de nuestra comunidad. 
            A lo largo de los años, hemos crecido paso a paso, transformando 
            pequeños proyectos en una realidad que hoy abraza a cientos de familias 
            en Los Hornos y la región. Cada convenio y cada nueva terapia es un 
            capítulo más en este compromiso de ayuda mutua.
          </p>
        </div>
        <div className="servicio-imagen">
          <img src="URL_FOTO_ANTIGUA" alt="Inicios de la Mutual" />
        </div>
      </section>

      {/* Bloque 3: Valores */}
      <section className="valores-section">
        <h2 className="titulo-valores">Nuestros Valores</h2>
        <div className="valores-grid">
          <div className="valor-card">
            <h3>Solidaridad</h3>
            <p>El pilar fundamental de nuestra unión para el beneficio colectivo.</p>
          </div>
          <div className="valor-card">
            <h3>Compromiso</h3>
            <p>Estar presentes y responder con eficiencia a las necesidades de cada asociado.</p>
          </div>
          <div className="valor-card">
            <h3>Salud Integral</h3>
            <p>Cuidar el equilibrio entre cuerpo, mente y espíritu como un todo.</p>
          </div>
        </div>
      </section>
    </div>
  )
}