import 'react'
import './styles/feriaArtesanos.css'


export const Modal = ({ producto, onClose }) => {

  if (!producto) return null; // Por seguridad, si no hay producto, no renderiza nada

  return (
    <div className="modal-overlay">
       <div className="modal-content">
          <button onClick={onClose} className="boton-cerrar">X</button>
          
          {/* Este es el Contenedor Padre que agrupa las dos columnas */}
          <div className="modal-cuerpo">
            
            {/* Columna Izquierda: Imagen */}
            <div className="modal-col-izq">
                <img 
                    src={producto.imagen} 
                    alt={producto.nombre} 
                    className='producto-imagen-modal' 
                />
            </div>

            {/* Columna Derecha: Información y Acción */}
            <div className="modal-col-der">
                <span className='categoria'>{producto.categoria}</span>
                <h2>{producto.nombre}</h2>
                <p className='artesano'>Por: {producto.artesano}</p>
                <p className='precio-grande'>$ {producto.precio.toLocaleString('es-AR')}</p>
                <p className='descripcion'>{producto.descripcion}</p>
                
                {/* Botón de acción tipo Mercado Libre */}
                <a 
                    href={`https://wa.me/TUNUMERO?text=Hola! Me interesa el producto: ${producto.nombre}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn-whatsapp"
                >
                    Consultar disponibilidad
                </a>
            </div>

          </div>
       </div>
    </div>
  );
}