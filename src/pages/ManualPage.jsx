import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Header from '../components/header/Header12'
import Footer from '../components/footer/Footer'
import { FaDownload, FaBookOpen, FaBook, FaTools, FaQuestionCircle, FaFileAlt, FaLanguage } from 'react-icons/fa'

function ManualPage() {
  const { t, i18n } = useTranslation()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const manuals = [
    {
      id: 'driver',
      title: {
        en: 'Driver Manual',
        uz: 'Haydovchi uchun qo\'llanma'
      },
      icon: <FaBook className="text-blue-600 w-8 h-8 mb-3" />,
      description: {
        en: 'Comprehensive guide for drivers on how to use the ELD device and app.',
        uz: 'Haydovchilar uchun ELD qurilmasi va ilovasidan foydalanish bo\'yicha to\'liq qo\'llanma.'
      },
      pdfUrl: '#',
      size: '3.2 MB'
    },
    {
      id: 'admin',
      title: {
        en: 'Admin Manual',
        uz: 'Administrator uchun qo\'llanma'
      },
      icon: <FaBookOpen className="text-purple-600 w-8 h-8 mb-3" />,
      description: {
        en: 'Complete instructions for fleet managers and administrators.',
        uz: 'Transport parkini boshqaruvchilari va administratorlar uchun to\'liq ko\'rsatmalar.'
      },
      pdfUrl: '#',
      size: '4.7 MB'
    },
    {
      id: 'installation',
      title: {
        en: 'Installation Guide',
        uz: 'O\'rnatish qo\'llanmasi'
      },
      icon: <FaTools className="text-green-600 w-8 h-8 mb-3" />,
      description: {
        en: 'Step-by-step instructions for installing the ELD device in your vehicle.',
        uz: 'Transport vositangizga ELD qurilmasini o\'rnatish uchun bosqichma-bosqich ko\'rsatmalar.'
      },
      pdfUrl: '#',
      size: '2.8 MB'
    },
    {
      id: 'troubleshooting',
      title: {
        en: 'Troubleshooting Guide',
        uz: 'Muammolarni bartaraf etish qo\'llanmasi'
      },
      icon: <FaQuestionCircle className="text-red-600 w-8 h-8 mb-3" />,
      description: {
        en: 'Solutions for common issues and troubleshooting steps.',
        uz: 'Umumiy muammolar uchun yechimlar va ularni bartaraf etish bosqichlari.'
      },
      pdfUrl: '#',
      size: '1.9 MB'
    },
    {
      id: 'compliance',
      title: {
        en: 'Compliance Manual',
        uz: 'Muvofiqlik qo\'llanmasi'
      },
      icon: <FaFileAlt className="text-yellow-600 w-8 h-8 mb-3" />,
      description: {
        en: 'Understanding ELD regulations and compliance requirements.',
        uz: 'ELD qoidalari va muvofiqlik talablarini tushunish.'
      },
      pdfUrl: '#',
      size: '3.5 MB'
    },
    {
      id: 'quickstart',
      title: {
        en: 'Quick Start Guide',
        uz: 'Tezkor boshlash qo\'llanmasi'
      },
      icon: <FaBook className="text-indigo-600 w-8 h-8 mb-3" />,
      description: {
        en: 'Get started quickly with this essential guide for new users.',
        uz: 'Yangi foydalanuvchilar uchun ushbu asosiy qo\'llanma bilan tezda ishni boshlang.'
      },
      pdfUrl: '#',
      size: '1.5 MB'
    }
  ]

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'uz' : 'en'
    i18n.changeLanguage(newLang)
    setIsDropdownOpen(false)
  }

  const currentLanguage = i18n.language === 'uz' ? 'Uzbek' : 'English'

  return (
    <>
      <Header />
      <div className="bg-gray-50 pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('manualsPage.title')}</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('manualsPage.subtitle')}
            </p>
            
            {/* Language Switcher */}
            <div className="relative mt-6 inline-block text-left">
            

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={toggleLanguage}
                    >
                      {i18n.language === 'en' ? 'O\'zbekcha' : 'English'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {manuals.map((manual) => (
              <div key={manual.id} className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex flex-col items-center mb-4">
                  {manual.icon}
                  <h3 className="text-xl font-semibold text-center">
                    {manual.title[i18n.language] || manual.title['en']}
                  </h3>
                </div>
                <p className="text-gray-600 text-center mb-6">
                  {manual.description[i18n.language] || manual.description['en']}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{manual.size}</span>
                  <a 
                    href={manual.pdfUrl} 
                    className="flex items-center text-purple-600 hover:text-purple-800 font-medium"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaDownload className="mr-2" />
                    {t('manualsPage.download')}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('manualsPage.needHelp.title')}</h2>
            <p className="text-gray-600 mb-6">
              {t('manualsPage.needHelp.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center py-3 px-6 bg-purple-600 text-white font-medium rounded-md shadow-sm hover:bg-purple-700 transition-colors">
                {t('manualsPage.needHelp.contactSupport')}
              </Link>
              <a href="#" className="inline-flex items-center justify-center py-3 px-6 border border-gray-300 text-gray-700 font-medium rounded-md shadow-sm hover:bg-gray-50 transition-colors">
                {t('manualsPage.needHelp.watchTutorials')}
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ManualPage 