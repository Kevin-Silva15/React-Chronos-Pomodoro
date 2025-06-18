import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//uma forma de importar os componentes! - esse podendo dar o nome que quiser ao componente
import {App} from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
//Pra usar ele, temos que abrir as tags e fechar, assim --> <Nome/>















