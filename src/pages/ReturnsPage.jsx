import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { FaArrowLeft, FaBoxOpen, FaMapMarkerAlt, FaShippingFast, FaUndo, FaExchangeAlt, FaInfoCircle } from 'react-icons/fa'

function ReturnsPage() {
  const { t, i18n } = useTranslation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const sections = [
    {
      id: 'return-policy',
      icon: <FaUndo className="h-6 w-6 text-purple-600" />,
      title: t('returnsPage.sections.policy.title'),
      content: t('returnsPage.sections.policy.content'),
      points: [
        t('returnsPage.sections.policy.points.timeframe'),
        t('returnsPage.sections.policy.points.fault'),
        t('returnsPage.sections.policy.points.eligibility')
      ]
    },
    {
      id: 'return-process',
      icon: <FaBoxOpen className="h-6 w-6 text-purple-600" />,
      title: t('returnsPage.sections.process.title'),
      content: t('returnsPage.sections.process.content'),
      points: [
        t('returnsPage.sections.process.points.contact'),
        t('returnsPage.sections.process.points.accessories'),
        t('returnsPage.sections.process.points.condition'),
        t('returnsPage.sections.process.points.packaging'),
        t('returnsPage.sections.process.points.documentation'),
        t('returnsPage.sections.process.points.shipping')
      ]
    },
    {
      id: 'return-address',
      icon: <FaMapMarkerAlt className="h-6 w-6 text-purple-600" />,
      title: t('returnsPage.sections.address.title'),
      content: t('returnsPage.sections.address.content')
    },
    {
      id: 'refunds',
      icon: <FaExchangeAlt className="h-6 w-6 text-purple-600" />,
      title: t('returnsPage.sections.refunds.title'),
      content: t('returnsPage.sections.refunds.content')
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
              <FaShippingFast className="h-8 w-8 text-purple-600 mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">{t('returnsPage.title')}</h1>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="mb-6 text-gray-700 leading-relaxed">
                {t('returnsPage.introduction')}
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
                    
                    {section.points && (
                      <ul className="list-disc pl-5 mb-4 space-y-2">
                        {section.points.map((point, index) => (
                          <li key={index} className="text-gray-700">{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
              
              <div className="bg-blue-50 p-5 rounded-lg my-8 border-l-4 border-blue-500 flex">
                <div className="mr-4 mt-1">
                  <FaInfoCircle className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">{t('returnsPage.help.title')}</h3>
                  <p className="text-gray-700">
                    {t('returnsPage.help.content')}
                    <Link to="/contact" className="text-blue-600 hover:text-blue-800 font-medium ml-1">
                      {t('returnsPage.help.contactLink')}
                    </Link>
                  </p>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mt-8 flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  {t('returnsPage.lastUpdated')}: {t('returnsPage.updateDate')}
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

export default ReturnsPage 