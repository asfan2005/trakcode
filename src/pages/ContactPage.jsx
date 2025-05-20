import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaEnvelope, FaClock, FaPhone } from 'react-icons/fa'
import Header from '../components/header/Header'

function ContactPage() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send this data to your server/API
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({
      fullName: '',
      email: '',
      phoneNumber: '',
      message: ''
    })
    alert(t('contactSection.success'))
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-6 pt-28 pb-16 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Left sidebar - Contact info */}
          <div className="md:col-span-1">
            <div className="bg-white shadow-lg rounded-lg p-8 sticky top-32">
              <h2 className="text-2xl font-bold text-blue-900 mb-2">{t('contactSection.company')}</h2>
              
              {/* Support team section */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-blue-900 mb-4">{t('contactSection.supportTeam')}</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <FaEnvelope className="text-blue-800" />
                    </div>
                    <a href={`mailto:${t('contactSection.supportContact.email')}`} className="text-gray-700 hover:text-blue-700 transition-colors">
                      {t('contactSection.supportContact.email')}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <FaClock className="text-blue-800" />
                    </div>
                    <span className="text-gray-700">{t('contactSection.supportContact.hours')}</span>
                  </div>
                </div>
              </div>
              
              {/* Sales team section */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-blue-900 mb-4">{t('contactSection.salesTeam')}</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <FaPhone className="text-blue-800" />
                    </div>
                    <a href={`tel:${t('contactSection.salesContact.phone')}`} className="text-gray-700 hover:text-blue-700 transition-colors">
                      {t('contactSection.salesContact.phone')}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <FaEnvelope className="text-blue-800" />
                    </div>
                    <a href={`mailto:${t('contactSection.salesContact.email')}`} className="text-gray-700 hover:text-blue-700 transition-colors">
                      {t('contactSection.salesContact.email')}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <FaClock className="text-blue-800" />
                    </div>
                    <span className="text-gray-700">{t('contactSection.salesContact.hours')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Contact form */}
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold mb-8">{t('contactSection.contactUs')}</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contactSection.form.fullName')}<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contactSection.form.email')}<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contactSection.form.phoneNumber')}<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contactSection.form.message')}<span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              {/* Captcha */}
              <div className="g-recaptcha" data-sitekey="your-recaptcha-site-key">
                {/* This div will be replaced by the reCAPTCHA widget */}
                <div className="border border-gray-300 p-3 rounded-md flex items-center justify-start w-fit">
                  <input type="checkbox" className="mr-3" />
                  <span className="text-sm text-gray-700">{t('contactSection.form.captcha')}</span>
                </div>
              </div>
              
              <button
                type="submit"
                className="mt-6 bg-red-600 text-white py-3 px-8 rounded-md font-semibold hover:bg-red-700 transition-colors"
              >
                {t('contactSection.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage 