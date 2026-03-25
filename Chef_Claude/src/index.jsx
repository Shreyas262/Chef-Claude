import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header'
import Main from './Main'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Main />
  </StrictMode>,
)
