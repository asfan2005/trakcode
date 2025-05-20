import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function Contact() {
  const { t } = useTranslation()
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formErrors, setFormErrors] = useState({})

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const validateForm = (formData) => {
    const errors = {}
    
    // Validate name
    if (!formData.name.trim()) {
      errors.name = t('contactSection.form.required')
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      errors.email = t('contactSection.form.required')
    } else if (!emailRegex.test(formData.email)) {
      errors.email = t('contactSection.form.invalidEmail')
    }
    
    // Validate phone
    if (!formData.phone.trim()) {
      errors.phone = t('contactSection.form.required')
    }
    
    // Validate trucks
    if (!formData.trucks || formData.trucks < 1) {
      errors.trucks = t('contactSection.form.required')
    }
    
    // Validate message
    if (!formData.message.trim()) {
      errors.message = t('contactSection.form.required')
    }
    
    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      company: e.target.company.value,
      phone: e.target.phone.value,
      trucks: e.target.trucks.value,
      message: e.target.message.value,
    }
    
    const errors = validateForm(formData)
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }
    
    setFormErrors({})
    setIsLoading(true)
    
    // Simulate form submission with a delay
    setTimeout(() => {
      setIsLoading(false)
      setFormSubmitted(true)
      // Reset form after submission
      e.target.reset()
      // Reset success message after 5 seconds
      setTimeout(() => setFormSubmitted(false), 5000)
    }, 1000)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header */}
      <div className="mb-8 sm:mb-12">
        <p className="text-blue-600 font-medium text-sm sm:text-base">{t('contactSection.header')}</p>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2">{t('contactSection.title')}</h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">{t('contactSection.subtitle')}</p>
      </div>

      {/* Contact Info Grid */}
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
        {/* Left Column - Contact Details */}
        <div className="space-y-4 sm:space-y-6 bg-gray-50 p-4 sm:p-6 rounded-lg order-2 md:order-1">
          <div className="flex flex-col">
            <h3 className="font-semibold mb-2 text-base sm:text-lg text-gray-800">{t('contactSection.supportTeam')}</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-1">{t('contactSection.supportContact.hours')}</p>
            <a href={`mailto:${t('contactSection.supportContact.email')}`} className="text-blue-600 text-sm sm:text-base hover:underline">
              {t('contactSection.supportContact.email')}
            </a>
          </div>

          <div className="flex flex-col">
            <h3 className="font-semibold mb-2 text-base sm:text-lg text-gray-800">{t('contactSection.salesTeam')}</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-1">{t('contactSection.salesContact.hours')}</p>
            <a href={`tel:${t('contactSection.salesContact.phone')}`} className="text-blue-600 text-sm sm:text-base hover:underline mb-1">
              {t('contactSection.salesContact.phone')}
            </a>
            <a href={`mailto:${t('contactSection.salesContact.email')}`} className="text-blue-600 text-sm sm:text-base hover:underline">
              {t('contactSection.salesContact.email')}
            </a>
          </div>

          <div className="flex flex-col">
            <h3 className="font-semibold mb-2 text-base sm:text-lg text-gray-800">{t('contactSection.company')}</h3>
            <p className="text-gray-700 text-sm sm:text-base">{t('contactSection.contactUs')}</p>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <form className="space-y-4 sm:space-y-5 bg-white p-4 sm:p-6 border border-gray-200 rounded-lg shadow-sm order-1 md:order-2" onSubmit={handleSubmit}>
          <h2 className="text-xl font-bold text-gray-800 mb-4">{t('contactSection.contactUs')}</h2>
          
          {formSubmitted && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
              <span className="block sm:inline">{t('contactSection.success')}</span>
            </div>
          )}
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1 sm:mb-2 text-gray-700">
              {t('contactSection.form.fullName')} <span className="text-red-500">*</span>
            </label>
            <input 
              id="name"
              name="name"
              type="text" 
              className={`w-full px-3 py-2 sm:py-2.5 border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-md text-sm focus:ring-blue-500 focus:border-blue-500 outline-none`}
              required 
            />
            {formErrors.name && <p className="mt-1 text-xs text-red-500">{formErrors.name}</p>}
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-1 sm:mb-2 text-gray-700">
              {t('contactSection.form.companyName')}
            </label>
            <input 
              id="company"
              name="company"
              type="text" 
              className="w-full px-3 py-2 sm:py-2.5 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1 sm:mb-2 text-gray-700">
              {t('contactSection.form.email')} <span className="text-red-500">*</span>
            </label>
            <input 
              id="email"
              name="email"
              type="email" 
              className={`w-full px-3 py-2 sm:py-2.5 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md text-sm focus:ring-blue-500 focus:border-blue-500 outline-none`}
              required 
            />
            {formErrors.email && <p className="mt-1 text-xs text-red-500">{formErrors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1 sm:mb-2 text-gray-700">
              {t('contactSection.form.phoneNumber')} <span className="text-red-500">*</span>
            </label>
            <input 
              id="phone"
              name="phone"
              type="tel" 
              className={`w-full px-3 py-2 sm:py-2.5 border ${formErrors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md text-sm focus:ring-blue-500 focus:border-blue-500 outline-none`}
              required 
            />
            {formErrors.phone && <p className="mt-1 text-xs text-red-500">{formErrors.phone}</p>}
          </div>

          <div>
            <label htmlFor="trucks" className="block text-sm font-medium mb-1 sm:mb-2 text-gray-700">
              {t('contactSection.form.amountOfTrucks')} <span className="text-red-500">*</span>
            </label>
            <input 
              id="trucks"
              name="trucks"
              type="number" 
              className={`w-full px-3 py-2 sm:py-2.5 border ${formErrors.trucks ? 'border-red-500' : 'border-gray-300'} rounded-md text-sm focus:ring-blue-500 focus:border-blue-500 outline-none`}
              required 
              min="1"
            />
            {formErrors.trucks && <p className="mt-1 text-xs text-red-500">{formErrors.trucks}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1 sm:mb-2 text-gray-700">
              {t('contactSection.form.message')} <span className="text-red-500">*</span>
            </label>
            <textarea 
              id="message"
              name="message"
              rows="4" 
              className={`w-full px-3 py-2 sm:py-2.5 border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} rounded-md text-sm focus:ring-blue-500 focus:border-blue-500 outline-none resize-none`}
              required
            ></textarea>
            {formErrors.message && <p className="mt-1 text-xs text-red-500">{formErrors.message}</p>}
          </div>

          <div className="text-xs sm:text-sm text-gray-600">
            <label className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" required />
              <span>{t('contactSection.form.consent')}</span>
            </label>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2.5 sm:py-3 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base font-medium flex justify-center items-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {t('contactSection.form.submitting')}
              </>
            ) : t('contactSection.form.submit')}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact