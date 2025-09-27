import React from 'react'
import { useTranslation } from 'react-i18next'
import Header from '../components/header/Header12'

function DownloadPage() {
  const { t } = useTranslation()

  const DownloadButton = ({ icon, title, link = "#" }) => (
    <a 
      href={link} 
      className="flex items-center p-6 rounded-md border transition-all duration-300 hover:border-gray-400 w-full bg-gray-50"
    >
      <div className="mr-4 text-2xl text-gray-800">{icon}</div>
      <div className="text-lg font-medium">{title}</div>
    </a>
  )

  return (
    <>
      <Header />
      <div className="container mx-auto px-6 pt-28 pb-16 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gray-800">
            {t('downloadPage.title', 'Download')}
          </h1>
          <p className="text-xl text-gray-700">
            {t('downloadPage.subtitle', 'Build your Fleet Power with TheBestELD')}
          </p>
        </div>

        {/* Applications Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center">
            {t('downloadPage.applications')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DownloadButton 
              icon={<span className="font-bold text-2xl">📱</span>} 
              title={t('downloadPage.androidApp.title')} 
            />
            <DownloadButton 
              icon={<span className="font-bold text-2xl">🍎</span>} 
              title={t('downloadPage.iosApp.title')} 
            />
          </div>
        </div>

        {/* Others Section */}
        <div>
          <h2 className="text-3xl font-bold mb-10 text-center">
            {t('downloadPage.others')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DownloadButton 
              icon={<span className="font-bold text-2xl">🚛</span>} 
              title={t('downloadPage.truckSticker.title')} 
            />
            <DownloadButton 
              icon={<span className="font-bold text-2xl">📄</span>} 
              title={t('downloadPage.dotInstruction.title')} 
            />
            <DownloadButton 
              icon={<span className="font-bold text-2xl">📚</span>} 
              title={t('downloadPage.userManual.title')} 
            />
            <DownloadButton 
              icon={<span className="font-bold text-2xl">🔧</span>} 
              title={t('downloadPage.malfunctionManual')} 
            />
          </div>
          
          <div className="mt-8">
            <DownloadButton 
              icon={<span className="font-bold text-2xl">🏆</span>} 
              title={t('downloadPage.certificate.title')} 
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default DownloadPage 