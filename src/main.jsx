import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from "react-router-dom"
// Import i18n configuration
import './i18n'
import StorePage from './pages/StorePage.jsx'
import ProductDetailPage from './pages/ProductDetailPage.jsx'
import DownloadPage from './pages/DownloadPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/store' element={<StorePage/>}/>
      <Route path='/product/:productId' element={<ProductDetailPage/>}/>
      <Route path='/downloads' element={<DownloadPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
