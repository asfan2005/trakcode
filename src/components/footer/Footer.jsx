import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import img1 from "../../img/img1.png"

function Footer() {
  const { t } = useTranslation()
  
  return (
    <footer className="bg-white text-gray-600 py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section with Logo and Tagline */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-10 mb-8 md:mb-12">
          <div className="w-full md:w-1/4">
            <img 
              src={img1} 
              alt="The Best ELD" 
              className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] mb-4"
            />
            <p className="text-[#475467] text-sm md:text-base ml-0 md:ml-2">
              {t('footerSection.tagline')}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 w-full md:w-3/4">
            {/* Company */}
            <div className="ml-0 md:ml-4">
              <h3 className="text-[#1D2939] font-medium text-lg mb-3 md:mb-4">{t('footerSection.columns.company.title')}</h3>
              <ul className="space-y-2 md:space-y-3">
                <li><Link to="/" className="text-sm md:text-base text-[#475467] hover:text-blue-600">Home</Link></li>
                <li><Link to="/store" className="text-sm md:text-base text-[#475467] hover:text-blue-600">Store</Link></li>
                <li><Link to="/contact" className="text-sm md:text-base text-[#475467] hover:text-blue-600">Contact Us</Link></li>
              </ul>
            </div>

            {/* Resource */}
            <div className="ml-0 md:ml-4">
              <h3 className="text-[#1D2939] font-medium text-lg mb-3 md:mb-4">{t('footerSection.columns.resource.title')}</h3>
              <ul className="space-y-2 md:space-y-3">
              <li><Link to="/downloads" className="text-sm md:text-base text-[#475467] hover:text-blue-600">Download</Link></li>
                <li><Link to="/manuals" className="text-sm md:text-base text-[#475467] hover:text-blue-600">{t('footerSection.columns.resource.links.manuals')}</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="ml-0 md:ml-4">
              <h3 className="text-[#1D2939] font-medium text-lg mb-3 md:mb-4">{t('footerSection.columns.legal.title')}</h3>
              <ul className="space-y-2 md:space-y-3">
                <li><Link to="/terms" className="text-sm md:text-base text-[#475467] hover:text-blue-600">{t('footerSection.columns.legal.links.terms')}</Link></li>
                <li><Link to="/privacy" className="text-sm md:text-base text-[#475467] hover:text-blue-600">{t('footerSection.columns.legal.links.privacy')}</Link></li>
                <li><Link to="/returns" className="text-sm md:text-base text-[#475467] hover:text-blue-600">{t('footerSection.columns.legal.links.returns')}</Link></li>
                <li><Link to="/warranty" className="text-sm md:text-base text-[#475467] hover:text-blue-600">{t('footerSection.columns.legal.links.warranty')}</Link></li>
              </ul>
            </div>

            {/* Get the app */}
            <div className="ml-0 md:ml-4">
              <h3 className="text-[#1D2939] font-medium text-lg mb-3 md:mb-4">{t('footerSection.columns.app.title')}</h3>
              <div className="flex flex-col space-y-4">
                {/* App Store Button Card */}
                <div className="flex items-center bg-white rounded-xl shadow-sm p-2 hover:shadow-md transition-shadow">
                  <a 
                    href="https://apps.apple.com/gb/app/usfast-eld/id6499588161" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center w-full"
                  >
                    <div className="flex-1">
                      <img 
                        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                        alt={t('footerSection.columns.app.appStore')}
                        className="h-10" 
                      />
                    </div>
                    <div className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-full ml-4">
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.0645 12.3145C17.0453 9.71735 19.1857 8.19375 19.2805 8.13236C17.9611 6.22252 15.8873 5.93649 15.17 5.91501C13.3974 5.73328 11.6885 6.9813 10.7894 6.9813C9.86879 6.9813 8.45598 5.93649 6.9509 5.97092C5.0367 6.00535 3.25924 7.06016 2.28157 8.71989C0.261052 12.1113 1.74889 17.1158 3.69289 19.6559C4.66202 20.9002 5.79535 22.3001 7.24331 22.2313C8.65613 22.1583 9.1998 21.2764 10.894 21.2764C12.5711 21.2764 13.0803 22.2313 14.5584 22.1885C16.0708 22.1583 17.0429 20.9218 17.9776 19.6645C19.0667 18.2087 19.5158 16.7744 19.5331 16.7056C19.4986 16.6942 17.0883 15.8381 17.0645 12.3145Z" fill="black"/>
                        <path d="M14.0791 4.00306C14.8652 3.03394 15.3871 1.72376 15.2364 0.391968C14.12 0.434936 12.76 1.16395 11.9393 2.11013C11.209 2.9447 10.5847 4.31337 10.7526 5.58065C12.0114 5.67647 13.2659 4.9551 14.0791 4.00306Z" fill="black"/>
                      </svg>
                    </div>
                  </a>
                </div>
                
                {/* Google Play Button Card */}
                <div className="flex items-center bg-white rounded-xl shadow-sm p-2 hover:shadow-md transition-shadow">
                  <a 
                    href="https://play.google.com/store/apps/details?id=app.usfast.eld" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center w-full"
                  >
                    <div className="flex-1">
                      <img 
                        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                        alt={t('footerSection.columns.app.googlePlay')}
                        className="h-10 object-contain" 
                      />
                    </div>
                    <div className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-full ml-4">
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.22376 0.271973C0.933804 0.582973 0.750244 1.06547 0.750244 1.69747V22.3025C0.750244 22.9345 0.933804 23.417 1.22376 23.728L1.31276 23.817L13.6598 11.447V11.25V11.053L1.31276 -1.31703L1.22376 0.271973Z" fill="#5BC9F4"/>
                        <path d="M17.1966 14.9963L13.6602 11.4473V11.2503V11.0533L17.1996 7.50433L17.3111 7.56733L21.4761 9.98783C22.6686 10.6788 22.6686 11.8218 21.4761 12.5158L17.3081 14.9333L17.1966 14.9963Z" fill="#EA4335"/>
                        <path d="M17.3083 14.934L13.6598 11.25L1.22375 23.728C1.63925 24.1745 2.32275 24.229 3.13525 23.7825L17.3083 14.934Z" fill="#34A853"/>
                        <path d="M17.3083 7.56644L3.13525 -1.28206C2.32275 -1.73156 1.63925 -1.67406 1.22375 -1.22756L13.6598 11.2499L17.3083 7.56644Z" fill="#FABC04"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 md:pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs md:text-sm text-[#475467] text-center md:text-left">
              {t('footerSection.copyright')}
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-5 mt-4 md:mt-0">
              {/* YouTube */}
              <a 
                href="#" 
                className="text-gray-400 hover:text-red-600 transition-colors duration-300"
                aria-label="YouTube"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
              
              {/* Telegram */}
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                aria-label="Telegram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a 
                href="#" 
                className="text-gray-400 hover:text-pink-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              {/* Facebook */}
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
