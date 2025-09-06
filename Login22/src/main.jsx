import { BrowserRouter } from 'react-router-dom'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/nav/Navbar.jsx'


createRoot(document.getElementById('root')).render(
  //<StrictMode>
  <BrowserRouter>
  <div className='w-screen h-screen bg-gradient-to-r from-[#00AEEF] via-[#55B5D6] to-[#A7A9AC]'>
    <div className='w-full max-w-[1000px] mx-auto px-3.5'>
    <Navbar/>
    <App />
    </div>
  </div>
  </BrowserRouter>
  //</StrictMode>,
)
