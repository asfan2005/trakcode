import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
// import logo from '../assets/logo.png' // Make sure this path is correct for your logo

// Using a direct HTTPS URL instead of local import
const logoUrl = 'https://www.usfasteld.com/wp-content/themes/sanbi/images/color-logo.png'

function LoginPage() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    
    // Here you would typically handle authentication with your backend
    console.log('Login submitted:', formData)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // For demo purposes only - in a real app you'd validate with your backend
      if (formData.email && formData.password) {
        // Successful login would redirect or update auth state
        console.log('Login successful')
      } else {
        setError(t('auth.invalidCredentials'))
      }
    }, 1000)
  }

  return (
    <div className="h-screen bg-gray-50 flex flex-col overflow-auto">
      <div className="flex-grow flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-center mb-6">
            <img className="h-16 w-auto" src={logoUrl} alt="Logo" />
          </div>
          
          <h2 className="mt-4 mb-8 text-center text-2xl font-bold text-gray-900">
            Log in to your Account
          </h2>
          
          {error && (
            <div className="bg-red-50 text-red-700 p-4 rounded-md mb-6">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-mail <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <FaEyeSlash className="h-5 w-5 text-gray-400" />
                  ) : (
                    <FaEye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
            
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white font-medium bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Sign In
              </button>
            </div>
            
            <div className="text-center">
              <Link to="/forgot-password" className="text-purple-600 hover:text-purple-500 text-sm">
                Forgot password
              </Link>
            </div>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an Account?{' '}
              <Link to="/signup" className="font-medium text-purple-600 hover:text-purple-500">
                Create your Account
              </Link>
            </p>
          </div>
          
          <div className="mt-8 text-center text-xs text-gray-500">
            Version: 2.0.49
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage 