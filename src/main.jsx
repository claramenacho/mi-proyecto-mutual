import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './pages/Home'
import App from './pages/App' //Director de orquesta//


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />  
  </StrictMode>,
)
