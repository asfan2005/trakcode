import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { FaArrowLeft } from 'react-icons/fa'

function TermsPage() {
  const { t, i18n } = useTranslation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header />
      <div className="pt-28 pb-16">
        <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="mb-6">
            <Link to="/" className="inline-flex items-center text-purple-600 hover:text-purple-800">
              <FaArrowLeft className="mr-2" />
              {t('common.backToHome')}
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">{t('termsPage.title')}</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="mb-6 text-gray-700 leading-relaxed">
                {t('termsPage.introduction')}
              </p>
              
              <div className="bg-gray-50 p-5 rounded-lg my-8 border-l-4 border-purple-500">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">{t('termsPage.sections.description.title')}</h2>
                <p className="mb-0 text-gray-700">
                  {t('termsPage.sections.description.content')}
                </p>
              </div>
              
              <h2 className="text-xl font-semibold mb-3 mt-8 text-gray-800">{t('termsPage.sections.pricing.title')}</h2>
              <p className="mb-6 text-gray-700 leading-relaxed">
                {t('termsPage.sections.pricing.content')}
              </p>
              
              <h2 className="text-xl font-semibold mb-3 mt-8 text-gray-800">{t('termsPage.sections.access.title')}</h2>
              <p className="mb-6 text-gray-700 leading-relaxed">
                {t('termsPage.sections.access.content')}
              </p>
              
              <div className="bg-blue-50 p-5 rounded-lg my-8 border-l-4 border-blue-500">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">{t('termsPage.sections.contact.title')}</h2>
                <p className="mb-0 text-gray-700">
                  {t('termsPage.sections.contact.content')}
                </p>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mt-8 flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  {t('termsPage.lastUpdated')}: {t('termsPage.updateDate')}
                </p>
                <Link to="/contact" className="text-sm text-purple-600 hover:text-purple-800 font-medium">
                  {t('common.contactUs')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default TermsPage 