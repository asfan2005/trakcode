import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaTruck, FaBars, FaTimes } from 'react-icons/fa'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-900 to-blue-800 shadow-lg z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <FaTruck className="h-8 w-8 text-white group-hover:text-yellow-400 transform group-hover:scale-110 transition-all duration-300" />
              <div className="absolute -bottom-1 w-full h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
            <div className="ml-3">
              <span className="text-xl font-bold text-white tracking-wider">US FAST</span>
              <span className="text-xl font-bold text-yellow-400 tracking-wider">ELD</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-yellow-400 transition-colors font-medium">Home</Link>
            <Link to="/about" className="text-white hover:text-yellow-400 transition-colors font-medium">About</Link>
            <Link to="/features" className="text-white hover:text-yellow-400 transition-colors font-medium">Features</Link>
            <Link to="/pricing" className="text-white hover:text-yellow-400 transition-colors font-medium">Pricing</Link>
            <Link to="/integrations" className="text-white hover:text-yellow-400 transition-colors font-medium">Integrations</Link>
            <Link to="/store" className="text-white hover:text-yellow-400 transition-colors font-medium">Store</Link>
            <Link to="/contact" className="text-white hover:text-yellow-400 transition-colors font-medium">Contact</Link>
            <Link to="/downloads" className="text-white hover:text-yellow-400 transition-colors font-medium">Downloads</Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              to="/login" 
              className="text-white hover:text-yellow-400 transition-all duration-300 font-medium px-4 py-2 rounded-md border-2 border-transparent hover:border-yellow-400 hover:shadow-yellow-400/30 hover:shadow-lg"
            >
              Log in
            </Link>
            <Link 
              to="/signup" 
              className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-md font-semibold hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-400/50 hover:shadow-yellow-400/70"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white hover:text-yellow-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-3">
            <Link to="/" className="block text-white hover:text-yellow-400 transition-colors font-medium">Home</Link>
            <Link to="/about" className="block text-white hover:text-yellow-400 transition-colors font-medium">About</Link>
            <Link to="/features" className="block text-white hover:text-yellow-400 transition-colors font-medium">Features</Link>
            <Link to="/pricing" className="block text-white hover:text-yellow-400 transition-colors font-medium">Pricing</Link>
            <Link to="/integrations" className="block text-white hover:text-yellow-400 transition-colors font-medium">Integrations</Link>
            <Link to="/store" className="block text-white hover:text-yellow-400 transition-colors font-medium">Store</Link>
            <Link to="/contact" className="block text-white hover:text-yellow-400 transition-colors font-medium">Contact</Link>
            <Link to="/downloads" className="block text-white hover:text-yellow-400 transition-colors font-medium">Downloads</Link>
            
            <div className="pt-4 space-y-3">
              <Link 
                to="/login" 
                className="block w-full text-center text-white hover:text-yellow-400 transition-all duration-300 font-medium px-4 py-2 rounded-md border-2 border-transparent hover:border-yellow-400 hover:shadow-yellow-400/30 hover:shadow-lg"
              >
                Log in
              </Link>
              <Link 
                to="/signup" 
                className="block w-full text-center bg-yellow-400 text-blue-900 px-6 py-2 rounded-md font-semibold hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-400/50 hover:shadow-yellow-400/70"
              >
                Sign up
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header