import React, { useState } from 'react'
import { productosFeria } from './mockApi'
import './styles/feriaArtesanos.css'
import { Modal } from './Modal'

export const FeriaArtesanos = () => {

    const [categoria, setCategoria] = useState("todos")
    const [seleccionado, setSeleccionado] = useState(null);

    const handleClick = (selectedCategoria) => {
        setCategoria(selectedCategoria)
    }

    const productosFiltrados = productosFeria.filter((unProducto) => {
        if (categoria === 'todos') return true;
        return unProducto.categoria === categoria
    })

    return (
        <>
            <main>
                <header>
                    <h1>Feria de Artesanos y Emprendedores</h1>
                </header>

                <div className='filtro-contenedor'>
                    <button 
                        className={categoria === 'todos' ? 'boton-activo' : 'boton-normal'} 
                        onClick={() => handleClick('todos')}
                    >
                        todos
                    </button>
                    <button 
                        className={categoria === 'ceramica' ? 'boton-activo' : 'boton-normal'} 
                        onClick={() => handleClick('ceramica')}
                    >
                        ceramica
                    </button>
                    <button 
                        className={categoria === 'textil' ? 'boton-activo' : 'boton-normal'} 
                        onClick={() => handleClick('textil')}
                    >
                        telas
                    </button>
                </div>

                <div className='productos-grid'>
                    {productosFiltrados.map((unProducto) => (
                        <div 
                            className='producto-card' 
                            key={unProducto.id} 
                            onClick={() => setSeleccionado(unProducto)}
                        >
                            <img 
                                src={unProducto.imagen} 
                                alt={unProducto.nombre} 
                                className='producto-imagen' 
                            />
                            
                            <div className='producto-info'>
                                <span className='categoria'>{unProducto.categoria}</span>
                                <h3>{unProducto.nombre}</h3>
                                <p className='artesano'>Por: {unProducto.artesano}</p>
                                <p className='precio'>$ {unProducto.precio.toLocaleString('es-AR')}</p>
                                <p className='descripcion'>{unProducto.descripcion}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* EL MODAL VA ACÁ: FUERA DE LA GRILLA DE PRODUCTOS */}
                {seleccionado && (
                    <Modal 
                        producto={seleccionado} 
                        onClose={() => setSeleccionado(null)} 
                    />
                )}
            </main>
        </>
    )
}