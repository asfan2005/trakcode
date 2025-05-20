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
import ManualPage from './pages/ManualPage.jsx'
import TermsPage from './pages/TermsPage.jsx'
import PrivacyPage from './pages/PrivacyPage.jsx'
import ReturnsPage from './pages/ReturnsPage.jsx'
import WarrantyPage from './pages/WarrantyPage.jsx'
import ScrollToTop from './components/common/ScrollToTop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/store' element={<StorePage/>}/>
        <Route path='/product/:productId' element={<ProductDetailPage/>}/>
        <Route path='/downloads' element={<DownloadPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/manuals' element={<ManualPage/>}/>
        <Route path='/terms' element={<TermsPage/>}/>
        <Route path='/privacy' element={<PrivacyPage/>}/>
        <Route path='/returns' element={<ReturnsPage/>}/>
        <Route path='/warranty' element={<WarrantyPage/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
