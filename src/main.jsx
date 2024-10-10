import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MultiFormProvider from './Context.jsx/MultiFormProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MultiFormProvider>
      <App />
    </MultiFormProvider>
  </StrictMode>,
)
