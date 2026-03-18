import React, { useState } from 'react';
import '../styles/Servicios.css';
import { serviciosData } from '../mockApi';
import { motion, AnimatePresence } from 'framer-motion';

// Creamos un sub-componente interno para manejar la lógica de cada imagen
const ImagenConSkeleton = ({ src, alt }) => {
    const [cargado, setCargado] = useState(false);

    return (
        <div className="servicio-imagen" style={{ 
            position: 'relative', 
            overflow: 'hidden',
            backgroundColor: '#eee1d5' // Color arena de fondo mientras carga
        }}>
            <motion.img 
                src={src} 
                alt={alt} 
                onLoad={() => setCargado(true)}
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ 
                    opacity: cargado ? 1 : 0, 
                    filter: cargado ? 'blur(0px)' : 'blur(10px)' 
                }}
                transition={{ duration: 0.5 }}
                loading="lazy"
                style={{ width: '100%', height: '450px', objectFit: 'cover' }}
            />
            
            {!cargado && (
                <div className="skeleton skeleton-img" style={{ position: 'absolute', top: 0, left: 0 }} />
            )}
        </div>
    );
};
export const Servicios = () => {

    const [categoria, setCategoria] = useState("todos")

    const handleClick = (selectedCategoria) => {
        return setCategoria(selectedCategoria)

    }
   

     

    const serviciosFiltrados = serviciosData.filter((unServicio) => {

        if (categoria === "todos") return true;

        return unServicio.categoria === categoria

    })    

    

    return (
        <>
        <div className="servicios-page">

            <header className="servicios-header">
                <h1>Nuestros Servicios</h1>
                <p>En Mutual DECAM trabajamos para tu bienestar integral.</p>
                <div className="botones-container">
                    {['todos', 'seguro_medico', 'terapias_alternativas', 'asesoramiento_legal', 'turismo'].map((cat) => (
                        <button key={cat} onClick={() => setCategoria(cat)}>
                            {cat.replace('_', ' ').toUpperCase()}
                        </button>
                    ))}
                </div>
            </header>
        
            <main className="servicios-lista">
                {/* AnimatePresence permite que los elementos que SE VAN tengan animación */}
                <AnimatePresence mode="popLayout">
                            
                    {serviciosFiltrados.length > 0 ? (serviciosFiltrados.map((unServicio, index) => ( 
                        <motion.section 
                            key={unServicio.id} 
                            className={`servicio-bloque ${index % 2 !== 0 ? 'reverse' : ''}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }} // El delay hace que aparezcan en cascada
                        >               
                            <div className="servicio-info">
                                <h2>{unServicio.nombre} </h2>
                                <p>{unServicio.descripcion}Fomentamos la salud física y el trabajo en equipo con actividades para todas las edades, promoviendo un estilo de vida activo.</p> 
                            </div>
                            <div className="servicio-imagen">
                            <img src={unServicio.imagen} alt={unServicio.nombre} />
                            </div>
                        </motion.section>    
                        ))
                    ) : (<h2>"No hay servicios"</h2>)}
                </AnimatePresence>
            </main>
        </div>
        </>
  );
};