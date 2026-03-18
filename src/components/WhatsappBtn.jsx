import React from 'react'
import '../styles/WhatsappBtn.css'

export const WhatsappBtn = () => {
  // Reemplazá el número con el tuyo (formato internacional sin el + ni espacios)
  const nroTelefono = "549221XXXXXXX" 
  const mensaje = encodeURIComponent("Hola! Quisiera consultar por las terapias de la Mutual.")
  const url = `https://wa.me/${nroTelefono}?text=${mensaje}`

  return (
    <a href={url} className="whatsapp-float" target="_blank" rel="noopener noreferrer">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="WhatsApp" 
      />
    </a>
  )
}