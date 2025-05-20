import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

// Direct HTTPS URL for logo
const logoUrl = 'https://www.usfasteld.com/wp-content/themes/sanbi/images/color-logo.png'

function SignupPage() {
  const { t } = useTranslation()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const nextStep = (e) => {
    e.preventDefault()
    setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    setCurrentStep(currentStep - 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    
    // Simple validation
    if (formData.password !== formData.confirmPassword) {
      setError(t('auth.passwordsDoNotMatch'))
      setIsLoading(false)
      return
    }
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // For demo purposes only
      console.log('Registration successful')
    }, 1000)
  }

  // Step indicators rendering
  const renderStepIndicators = () => {
    return (
      <div className="flex justify-center items-center mb-8">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
          <span>1</span>
        </div>
        <div className={`w-24 h-1 ${currentStep >= 2 ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
          <span>2</span>
        </div>
        <div className={`w-24 h-1 ${currentStep >= 3 ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 3 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
          <span>3</span>
        </div>
      </div>
    )
  }

  // Step 1: Basic Information
  const renderStepOne = () => {
    return (
      <form onSubmit={nextStep} className="space-y-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            placeholder="First Name"
          />
        </div>
        
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            placeholder="Last Name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            placeholder="Enter your email"
          />
        </div>
        
        <div>
          <button
            type="submit"
            className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white font-medium bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Next <FaArrowRight className="ml-2" />
          </button>
        </div>
      </form>
    )
  }

  // Step 2: Company Information
  const renderStepTwo = () => {
    return (
      <form onSubmit={nextStep} className="space-y-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            placeholder="Company Name"
          />
        </div>
        
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            placeholder="Phone Number"
          />
        </div>
        
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={prevStep}
            className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-gray-700 font-medium bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Back
          </button>
          <button
            type="submit"
            className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white font-medium bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Next <FaArrowRight className="ml-2" />
          </button>
        </div>
      </form>
    )
  }

  // Step 3: Account Security
  const renderStepThree = () => {
    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            placeholder="Create a password"
          />
        </div>
        
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            placeholder="Confirm your password"
          />
        </div>
        
        <div className="flex items-center">
          <input
            id="agreeTerms"
            name="agreeTerms"
            type="checkbox"
            checked={formData.agreeTerms}
            onChange={handleChange}
            required
            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
          />
          <label htmlFor="agreeTerms" className="ml-2 block text-sm text-gray-700">
            I agree to the <Link to="/terms" className="text-purple-600 hover:text-purple-500">Terms of Service</Link> and <Link to="/privacy" className="text-purple-600 hover:text-purple-500">Privacy Policy</Link>
          </label>
        </div>
        
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={prevStep}
            className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-gray-700 font-medium bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white font-medium bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </button>
        </div>
      </form>
    )
  }

  // Render the current step
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return renderStepOne()
      case 2:
        return renderStepTwo()
      case 3:
        return renderStepThree()
      default:
        return renderStepOne()
    }
  }

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-center mb-4">
            <img className="h-14 w-auto" src={logoUrl} alt="Logo" />
          </div>
          
          <h2 className="mt-2 mb-6 text-center text-2xl font-bold text-gray-900">
            Create an account
          </h2>
          
          {renderStepIndicators()}
          
          {error && (
            <div className="bg-red-50 text-red-700 p-3 rounded-md mb-4 text-sm">
              {error}
            </div>
          )}
          
          <div className="overflow-y-auto" style={{ maxHeight: "calc(100vh - 280px)" }}>
            {renderStep()}
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Already Registered?{' '}
              <Link to="/login" className="font-medium text-purple-600 hover:text-purple-500">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupPage