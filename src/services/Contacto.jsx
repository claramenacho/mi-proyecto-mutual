import React from 'react';
import '../styles/Contacto.css';

export const Contacto = () => {
  return (
    <div className="contacto-page">
      <header className="servicios-header">
        <h1>Contactate con Nosotros</h1>
        <p>Estamos para escucharte y ayudarte en lo que necesites.</p>
      </header>

      <div className="contacto-container">
        {/* Lado Izquierdo: Información */}
        <div className="contacto-info">
          <h2>Información de Contacto</h2>
          <div className="info-item">
            <h3>📍 Dirección</h3>
            <p>Los Hornos, La Plata, Buenos Aires</p>
          </div>
          <div className="info-item">
            <h3>📞 Teléfono</h3>
            <p>+54 (221) XXX-XXXX</p>
          </div>
          <div className="info-item">
            <h3>✉️ Email</h3>
            <p>info@mutualdecam.com.ar</p>
          </div>
          <div className="info-item">
            <h3>⏰ Horarios</h3>
            <p>Lunes a Viernes: 09:00 - 18:00</p>
          </div>
        </div>

        {/* Lado Derecho: Formulario */}
        <div className="contacto-form">
          <form>
            <div className="input-group">
              <label>Nombre Completo</label>
              <input type="text" placeholder="Tu nombre..." />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="email@ejemplo.com" />
            </div>
            <div className="input-group">
              <label>Mensaje</label>
              <textarea rows="5" placeholder="¿En qué podemos ayudarte?"></textarea>
            </div>
            <button type="submit" className="btn-enviar">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </div>
  );
};