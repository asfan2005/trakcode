import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaTruck, FaBars, FaTimes } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../LanguageSwitcher'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t, i18n } = useTranslation()
  const isUzbek = i18n.language === 'uz'
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Add overflow hidden to body when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navItems = [
    { path: '/', label: t('header.home') },
    { path: '/features', label: t('header.features') },
    { path: '/store', label: t('header.store') },
    { path: '/contact', label: t('header.contact') },
    { path: '/downloads', label: t('header.downloads') },
  ]

  return (
    <>
      {/* Add overflow-x-hidden to prevent horizontal scrolling */}
      <div className="overflow-x-hidden w-full">
        <header className={`fixed top-0 left-0 right-0 w-full ${scrolled ? 'bg-gradient-to-r from-blue-900 to-blue-800 shadow-lg' : 'bg-gradient-to-r from-blue-900/95 to-blue-800/95'} transition-all duration-300 z-50`}>
          <nav className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
            <div className="h-14 sm:h-16 md:h-18 flex items-center justify-between">
              {/* Logo - Make it smaller on mobile */}
              <Link to="/" className="flex items-center group flex-shrink-0">
                <div className="relative">
                  <FaTruck className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white group-hover:text-yellow-400 transform group-hover:scale-110 transition-all duration-300" />
                  <div className="absolute -bottom-1 w-full h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
                <div className="ml-2 sm:ml-3">
                  <span className="text-sm sm:text-lg md:text-xl font-bold text-white tracking-wider">TheBest</span>
                  <span className="text-sm sm:text-lg md:text-xl font-bold text-yellow-400 tracking-wider">ELD</span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center justify-center flex-1 mx-2 xl:mx-4">
                <div className="flex justify-center gap-3 xl:gap-8 w-full max-w-4xl mx-auto">
                  {navItems.map((item) => (
                    <Link 
                      key={item.path} 
                      to={item.path} 
                      className="text-center text-sm xl:text-base text-white hover:text-yellow-400 transition-colors font-medium px-2"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Auth Buttons and Language Switcher */}
              <div className="hidden lg:flex items-center space-x-1.5 xl:space-x-2.5 flex-shrink-0">
                <LanguageSwitcher />
                <Link 
                  to="/login" 
                  className="whitespace-nowrap text-2xs xl:text-xs text-white hover:text-yellow-400 transition-all duration-300 font-medium px-1.5 py-0.5 xl:px-2.5 xl:py-1 rounded-md border border-transparent hover:border-yellow-400 hover:shadow-yellow-400/30 hover:shadow-lg"
                >
                  {t('header.login')}
                </Link>
                <Link 
                  to="/signup" 
                  className="whitespace-nowrap text-2xs xl:text-xs bg-yellow-400 text-blue-900 px-1.5 py-0.5 xl:px-3 xl:py-1 rounded-md font-semibold hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-md shadow-yellow-400/50 hover:shadow-yellow-400/70"
                >
                  {t('header.signup')}
                </Link>
              </div>

              {/* Mobile Menu Button - Optimize for small screens */}
              <div className="flex items-center lg:hidden">
                <LanguageSwitcher small={true} />
                <button 
                  className="text-white hover:text-yellow-400 transition-colors p-1 ml-1"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
                </button>
              </div>
            </div>

            {/* Mobile Menu - Make it fullscreen overlay */}
            {isMenuOpen && (
              <div className="fixed inset-0 top-14 sm:top-16 md:top-18 bg-blue-900/95 lg:hidden z-40 animate-fadeIn">
                <div className="px-3 py-4 max-h-[calc(100vh-3.5rem)] sm:max-h-[calc(100vh-4rem)] md:max-h-[calc(100vh-4.5rem)] overflow-y-auto">
                  {navItems.map((item) => (
                    <Link 
                      key={item.path}
                      to={item.path} 
                      className="block text-white hover:text-yellow-400 transition-colors font-medium text-lg py-3 border-b border-blue-800/40" 
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  
                  <div className="pt-4 flex flex-col space-y-3">
                    <Link 
                      to="/login" 
                      className="block w-full text-center text-white hover:text-yellow-400 transition-all duration-300 font-medium py-2.5 rounded-md border border-white/30 hover:border-yellow-400"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t('header.login')}
                    </Link>
                    <Link 
                      to="/signup" 
                      className="block w-full text-center bg-yellow-400 text-blue-900 py-2.5 rounded-md font-semibold hover:bg-yellow-300 transition-all duration-300 shadow-lg shadow-yellow-400/50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t('header.signup')}
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </nav>
        </header>
      </div>
      
      {/* Add extra div with animation to prevent content jumping when menu opens */}
      {isMenuOpen && <div className="h-screen w-full" />}
    </>
  )
}

export default Header