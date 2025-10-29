import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import './styles/index.css'
import App from './App.tsx'

const basename = window.location.hostname === 'axindri.github.io' ? '/frg_website' : '';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
      <Toaster position="top-right" 
      toastOptions={{
        duration: 4000,
        style: {
          background: 'var(--color-container-bg)',
          color: 'var(--color-fg)',
        }
      }} />
    </BrowserRouter>
  </StrictMode>,
)
