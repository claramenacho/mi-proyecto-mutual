import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Home } from './Home';
import { Servicios } from '../services/Servicios';
import { LaMutual } from '../services/LaMutual';
import { Entidades } from '../services/Entidades';
import { Contacto } from '../services/Contacto';
import { WhatsappBtn } from '../components/WhatsappBtn'

function App() {
  return (
    <Router>
      {/* El Navbar está acá afuera, entonces se ve en TODAS las páginas */}
      <Navbar /> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path='/lamutual' element={<LaMutual/>} />
        <Route path='/entidades' element={<Entidades/>} />
        <Route path='/contacto' element={<Contacto/>} />
      </Routes>
      <WhatsappBtn /> {/* <--- Agregalo acá, antes del cierre del Router */}
      {/* El Footer también es global */}
      <Footer />
    </Router>
  );
}

export default App;