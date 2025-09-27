import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Header from '../components/header/Header12'
import Footer from '../components/footer/Footer'
import { FaArrowLeft, FaShieldAlt, FaUserLock, FaMapMarkerAlt, FaShareAlt, FaToggleOn, FaBell } from 'react-icons/fa'

function PrivacyPage() {
  const { t, i18n } = useTranslation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const sections = [
    {
      id: 'information-collect',
      icon: <FaUserLock className="h-6 w-6 text-purple-600" />,
      title: t('privacyPage.sections.collect.title'),
      content: t('privacyPage.sections.collect.content')
    },
    {
      id: 'account-profile',
      title: t('privacyPage.sections.account.title'),
      content: t('privacyPage.sections.account.content')
    },
    {
      id: 'service-usage',
      title: t('privacyPage.sections.usage.title'),
      content: t('privacyPage.sections.usage.content')
    },
    {
      id: 'device-info',
      title: t('privacyPage.sections.device.title'),
      content: t('privacyPage.sections.device.content')
    },
    {
      id: 'location',
      icon: <FaMapMarkerAlt className="h-6 w-6 text-purple-600" />,
      title: t('privacyPage.sections.location.title'),
      content: t('privacyPage.sections.location.content')
    },
    {
      id: 'sharing',
      icon: <FaShareAlt className="h-6 w-6 text-purple-600" />,
      title: t('privacyPage.sections.sharing.title'),
      content: t('privacyPage.sections.sharing.content'),
      subsections: [
        {
          id: 'sharing-service',
          title: t('privacyPage.sections.sharing.subsections.service.title'),
          content: t('privacyPage.sections.sharing.subsections.service.content')
        },
        {
          id: 'sharing-providers',
          title: t('privacyPage.sections.sharing.subsections.providers.title'),
          content: t('privacyPage.sections.sharing.subsections.providers.content')
        },
        {
          id: 'sharing-legal',
          title: t('privacyPage.sections.sharing.subsections.legal.title'),
          content: t('privacyPage.sections.sharing.subsections.legal.content')
        }
      ]
    },
    {
      id: 'choices',
      icon: <FaToggleOn className="h-6 w-6 text-purple-600" />,
      title: t('privacyPage.sections.choices.title'),
      content: t('privacyPage.sections.choices.content'),
      subsections: [
        {
          id: 'choices-optout',
          title: t('privacyPage.sections.choices.subsections.optout.title'),
          content: t('privacyPage.sections.choices.subsections.optout.content')
        },
        {
          id: 'choices-modify',
          title: t('privacyPage.sections.choices.subsections.modify.title'),
          content: t('privacyPage.sections.choices.subsections.modify.content')
        }
      ]
    },
    {
      id: 'notifications',
      icon: <FaBell className="h-6 w-6 text-purple-600" />,
      title: t('privacyPage.sections.notifications.title'),
      content: t('privacyPage.sections.notifications.content')
    }
  ]

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
            <div className="flex items-center mb-6 pb-4 border-b border-gray-200">
              <FaShieldAlt className="h-8 w-8 text-purple-600 mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">{t('privacyPage.title')}</h1>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="mb-6 text-gray-700 leading-relaxed">
                {t('privacyPage.introduction')}
              </p>
              
              {sections.map((section) => (
                <div key={section.id} className="mb-8" id={section.id}>
                  <div className="flex items-center mb-3">
                    {section.icon && <div className="mr-3">{section.icon}</div>}
                    <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
                  </div>
                  
                  <div className={section.icon ? "pl-9" : ""}>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      {section.content}
                    </p>
                    
                    {section.subsections && section.subsections.map((subsection) => (
                      <div key={subsection.id} className="mb-4 bg-gray-50 p-4 rounded-md" id={subsection.id}>
                        <h3 className="font-medium text-gray-800 mb-2">{subsection.title}</h3>
                        <p className="text-gray-700">
                          {subsection.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="border-t border-gray-200 pt-6 mt-8 flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  {t('privacyPage.lastUpdated')}: {t('privacyPage.updateDate')}
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

export default PrivacyPage 