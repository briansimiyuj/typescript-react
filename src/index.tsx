import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import './style.css'
import Script from './Script.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Script />
  </StrictMode>,
)
