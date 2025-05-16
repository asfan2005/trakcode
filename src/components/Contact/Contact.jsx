import React from 'react'
import { useTranslation } from 'react-i18next'

function Contact() {
  const { t } = useTranslation()

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
        <div className="space-y-4 sm:space-y-6">
          <div>
            <h3 className="font-medium mb-2 text-base sm:text-lg">{t('contactSection.contactInfo.email.title')}</h3>
            <p className="text-xs sm:text-sm text-gray-600">{t('contactSection.contactInfo.email.description')}</p>
            <a href="mailto:support@bluestaraide.com" className="text-blue-600 text-sm sm:text-base hover:underline">{t('contactSection.contactInfo.email.value')}</a>
          </div>

          <div>
            <h3 className="font-medium mb-2 text-base sm:text-lg">{t('contactSection.contactInfo.phone.title')}</h3>
            <p className="text-xs sm:text-sm text-gray-600">{t('contactSection.contactInfo.phone.description')}</p>
            <a href="tel:+12675514401" className="text-blue-600 text-sm sm:text-base hover:underline">{t('contactSection.contactInfo.phone.value')}</a>
          </div>

          <div>
            <h3 className="font-medium mb-2 text-base sm:text-lg">{t('contactSection.contactInfo.office.title')}</h3>
            <p className="text-xs sm:text-sm text-gray-600">{t('contactSection.contactInfo.office.description')}</p>
            <p className="text-blue-600 text-sm sm:text-base">{t('contactSection.contactInfo.office.address')}</p>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <form className="space-y-4 sm:space-y-5">
          <div>
            <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">{t('contactSection.form.name')}</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 sm:py-2.5 border border-gray-300 rounded-md text-sm"
              required 
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">{t('contactSection.form.companyName')}</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 sm:py-2.5 border border-gray-300 rounded-md text-sm"
              required 
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">{t('contactSection.form.email')}</label>
            <input 
              type="email" 
              className="w-full px-3 py-2 sm:py-2.5 border border-gray-300 rounded-md text-sm"
              required 
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">{t('contactSection.form.phoneNumber')}</label>
            <input 
              type="tel" 
              className="w-full px-3 py-2 sm:py-2.5 border border-gray-300 rounded-md text-sm"
              required 
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">{t('contactSection.form.amountOfTrucks')}</label>
            <input 
              type="number" 
              className="w-full px-3 py-2 sm:py-2.5 border border-gray-300 rounded-md text-sm"
              required 
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">{t('contactSection.form.message')}</label>
            <textarea 
              rows="4" 
              className="w-full px-3 py-2 sm:py-2.5 border border-gray-300 rounded-md text-sm"
              required
            ></textarea>
          </div>

          <div className="text-xs sm:text-sm text-gray-600">
            <label className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" required />
              <span>{t('contactSection.form.consent')}</span>
            </label>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2.5 sm:py-3 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base font-medium"
          >
            {t('contactSection.form.submit')}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact