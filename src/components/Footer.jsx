import React from 'react'
import '../styles/Footer.css'

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Mutual DECAM</h3>
          <p>Comprometidos con el bienestar y la solidaridad comunitaria.</p>
        </div>
        
        <div className="footer-section">
          <h4>Navegación</h4>
          <ul>
            <li>Inicio</li>
            <li>La Mutual</li>
            <li>Servicios</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contacto</h4>
          <p>📍 La Plata, Argentina</p>
          <p>📧 contacto@mutualdecam.com.ar</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 Mutual DECAM. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}