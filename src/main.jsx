import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Formulario from './Formulario.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* <App /> */}
    <Formulario />
  </StrictMode>,
)

// Para importar uma página nova no main, precisa primeiro colocar um export default (nome da função principal)
// no fim do arquivo depois da chave, depois importar no main.jsx, e colocar o componente dentro do StrictMode.