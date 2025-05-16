import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const Main = () => {
  const { t } = useTranslation()
  const [screenSize, setScreenSize] = useState({
    isMobile: window.innerWidth < 768,
    isMedium: window.innerWidth >= 768 && window.innerWidth < 1030,
    isWideScreen: window.innerWidth >= 1030
  })

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        isMobile: window.innerWidth < 768,
        isMedium: window.innerWidth >= 768 && window.innerWidth < 1030,
        isWideScreen: window.innerWidth >= 1030
      })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const float = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  }

  const pulse = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  }

  return (
    <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-8">
      {/* Mobile layout - Image first, then text */}
      {screenSize.isMobile && (
        <div className="flex flex-col gap-8">
          {/* Top Image for Mobile */}
          <motion.div 
            className="relative h-[250px] sm:h-[300px] rounded-xl overflow-hidden shadow-lg mt-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ 
              opacity: 1, 
              scale: 1,
              transition: { duration: 0.8, ease: "easeOut" }
            }}
            animate="animate"
            variants={float}
            viewport={{ once: true, margin: "-100px" }}
          >
            <img
              src="https://www.usfasteld.com/wp-content/uploads/2023/08/banner-mobile.png"
              alt={t('main.imgAlt')}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <motion.div 
              className="absolute bottom-4 left-4 right-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-lg font-bold leading-tight">
                {t('main.title')}
              </div>
            </motion.div>
          </motion.div>

          {/* Content below image for Mobile */}
          <motion.div 
            className="space-y-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.p 
              className="text-base leading-relaxed text-gray-600"
              variants={fadeIn}
            >
              {t('main.subtitle')}
            </motion.p>
            <motion.div 
              className="grid grid-cols-2 gap-3"
              variants={staggerContainer}
            >
              <motion.div 
                className="bg-blue-50 rounded-lg p-3 shadow-sm"
                variants={fadeIn}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-800">{t('main.features.eld')}</span>
                </div>
                <div className="text-xs text-gray-600">FMCSA Certified</div>
              </motion.div>
              <motion.div 
                className="bg-blue-50 rounded-lg p-3 shadow-sm"
                variants={fadeIn}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-800">{t('main.features.gps')}</span>
                </div>
                <div className="text-xs text-gray-600">Real-time location</div>
              </motion.div>
              <motion.div 
                className="bg-blue-50 rounded-lg p-3 shadow-sm"
                variants={fadeIn}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-800">{t('main.features.dispatch')}</span>
                </div>
                <div className="text-xs text-gray-600">Online management</div>
              </motion.div>
              <motion.div 
                className="bg-blue-50 rounded-lg p-3 shadow-sm"
                variants={fadeIn}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-800">{t('main.features.camera')}</span>
                </div>
                <div className="text-xs text-gray-600">AI powered</div>
              </motion.div>
            </motion.div>
            <motion.div 
              className="pt-6 space-y-3"
              variants={fadeIn}
            >
              {/* iOS App Store Button - White Background with Official Logo */}
              <motion.a 
                href="https://apps.apple.com/gb/app/usfast-eld/id6499588161"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full bg-white text-black px-4 py-3 rounded-xl shadow-md border border-gray-200 transition-all duration-300 overflow-hidden relative group"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center z-10">
                  <img 
                    src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" 
                    alt="Download on the App Store" 
                    className="h-8"
                  />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center z-10 transition-all duration-300 group-hover:bg-black group-hover:text-white">
                  <svg className="w-6 h-6" viewBox="0 0 384 512" fill="currentColor">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100/0 via-blue-100/0 to-blue-100/0 group-hover:from-blue-100/50 group-hover:via-blue-200/50 group-hover:to-blue-100/50 transition-all duration-700 ease-in-out transform translate-x-full group-hover:translate-x-0"></div>
              </motion.a>
              
              {/* Google Play Button - White Background with Official Logo */}
              <motion.a
                href="https://play.google.com/store/apps/details?id=app.usfast.eld"
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center justify-between w-full bg-white text-black px-4 py-3 rounded-xl shadow-md border border-gray-200 transition-all duration-300 overflow-hidden relative group"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center z-10">
                  <img 
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                    alt="Get it on Google Play" 
                    className="h-8"
                  />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center z-10 transition-all duration-300 group-hover:bg-black group-hover:text-white">
                  <svg className="w-6 h-6" viewBox="0 0 512 512" fill="currentColor">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-100/0 via-green-100/0 to-green-100/0 group-hover:from-green-100/50 group-hover:via-green-200/50 group-hover:to-green-100/50 transition-all duration-700 ease-in-out transform translate-x-full group-hover:translate-x-0"></div>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      )}

      {/* Medium and Desktop layout - Side by side */}
      {!screenSize.isMobile && (
        <div className={`grid grid-cols-1 ${screenSize.isMedium ? 'md:grid-cols-5 md:gap-6' : 'md:grid-cols-2 md:gap-12'} items-center`}>
          {/* Left side - Text content */}
          <motion.div 
            className={`space-y-5 sm:space-y-6 ${screenSize.isMedium ? 'md:col-span-3' : ''}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h1 
              className={`text-3xl ${screenSize.isMedium ? 'md:text-3xl' : 'sm:text-4xl lg:text-5xl'} font-bold text-gray-900 leading-tight`}
              variants={fadeIn}
            >
              {t('main.title')}
            </motion.h1>
            <motion.p 
              className={`text-base ${screenSize.isMedium ? 'md:text-base' : 'sm:text-lg lg:text-xl'} text-gray-600 leading-relaxed`}
              variants={fadeIn}
            >
              {t('main.subtitle')}
            </motion.p>
            <motion.div 
              className={`grid grid-cols-1 ${screenSize.isMedium ? 'md:grid-cols-2 md:gap-3' : `${screenSize.isWideScreen ? 'grid-cols-2' : 'sm:grid-cols-2'} gap-4`}`}
              variants={staggerContainer}
            >
              {/* Feature boxes - optimized for medium screens */}
              <motion.div 
                className={`bg-white bg-opacity-80 backdrop-blur-sm rounded-xl ${screenSize.isMedium ? 'p-3' : 'p-4'} shadow-md border border-blue-100 hover:border-blue-300 transition-all`}
                variants={fadeIn}
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)" }}
              >
                <div className={`flex items-center ${screenSize.isMedium ? 'space-x-2' : 'space-x-3'} mb-2`}>
                  <div className={`flex-shrink-0 ${screenSize.isMedium ? 'w-8 h-8' : 'w-10 h-10'} bg-blue-100 rounded-full flex items-center justify-center`}>
                    <svg className={`${screenSize.isMedium ? 'w-5 h-5' : 'w-6 h-6'} text-blue-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className={`${screenSize.isMedium ? 'text-base' : 'text-lg'} font-medium text-gray-800`}>{t('main.features.eld')}</span>
                </div>
                <p className={`text-sm text-gray-600 ${screenSize.isMedium ? 'ml-10' : 'ml-12'}`}>FMCSA Certified and compliant with all regulations</p>
              </motion.div>

              <motion.div 
                className={`bg-white bg-opacity-80 backdrop-blur-sm rounded-xl ${screenSize.isMedium ? 'p-3' : 'p-4'} shadow-md border border-blue-100 hover:border-blue-300 transition-all`}
                variants={fadeIn}
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)" }}
              >
                <div className={`flex items-center ${screenSize.isMedium ? 'space-x-2' : 'space-x-3'} mb-2`}>
                  <div className={`flex-shrink-0 ${screenSize.isMedium ? 'w-8 h-8' : 'w-10 h-10'} bg-blue-100 rounded-full flex items-center justify-center`}>
                    <svg className={`${screenSize.isMedium ? 'w-5 h-5' : 'w-6 h-6'} text-blue-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className={`${screenSize.isMedium ? 'text-base' : 'text-lg'} font-medium text-gray-800`}>{t('main.features.gps')}</span>
                </div>
                <p className={`text-sm text-gray-600 ${screenSize.isMedium ? 'ml-10' : 'ml-12'}`}>Real-time GPS tracking with advanced location features</p>
              </motion.div>

              <motion.div 
                className={`bg-white bg-opacity-80 backdrop-blur-sm rounded-xl ${screenSize.isMedium ? 'p-3' : 'p-4'} shadow-md border border-blue-100 hover:border-blue-300 transition-all`}
                variants={fadeIn}
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)" }}
              >
                <div className={`flex items-center ${screenSize.isMedium ? 'space-x-2' : 'space-x-3'} mb-2`}>
                  <div className={`flex-shrink-0 ${screenSize.isMedium ? 'w-8 h-8' : 'w-10 h-10'} bg-blue-100 rounded-full flex items-center justify-center`}>
                    <svg className={`${screenSize.isMedium ? 'w-5 h-5' : 'w-6 h-6'} text-blue-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <span className={`${screenSize.isMedium ? 'text-base' : 'text-lg'} font-medium text-gray-800`}>{t('main.features.dispatch')}</span>
                </div>
                <p className={`text-sm text-gray-600 ${screenSize.isMedium ? 'ml-10' : 'ml-12'}`}>Efficient dispatch management and communication tools</p>
              </motion.div>

              <motion.div 
                className={`bg-white bg-opacity-80 backdrop-blur-sm rounded-xl ${screenSize.isMedium ? 'p-3' : 'p-4'} shadow-md border border-blue-100 hover:border-blue-300 transition-all`}
                variants={fadeIn}
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)" }}
              >
                <div className={`flex items-center ${screenSize.isMedium ? 'space-x-2' : 'space-x-3'} mb-2`}>
                  <div className={`flex-shrink-0 ${screenSize.isMedium ? 'w-8 h-8' : 'w-10 h-10'} bg-blue-100 rounded-full flex items-center justify-center`}>
                    <svg className={`${screenSize.isMedium ? 'w-5 h-5' : 'w-6 h-6'} text-blue-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className={`${screenSize.isMedium ? 'text-base' : 'text-lg'} font-medium text-gray-800`}>{t('main.features.camera')}</span>
                </div>
                <p className={`text-sm text-gray-600 ${screenSize.isMedium ? 'ml-10' : 'ml-12'}`}>AI-powered dash camera for enhanced safety and monitoring</p>
              </motion.div>
            </motion.div>
            
            {/* Download buttons section - Optimized for medium screens */}
            <motion.div 
              className={`flex ${screenSize.isMedium ? 'flex-row space-x-3 justify-center' : screenSize.isWideScreen ? 'flex-row justify-start space-x-4' : 'flex-col sm:flex-row'} gap-4 pt-6`}
              variants={fadeIn}
            >
              {/* iOS App Store Button - White Background with Official Logo */}
              <motion.a 
                href="https://apps.apple.com/gb/app/usfast-eld/id6499588161"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between bg-white text-black px-6 py-4 rounded-xl shadow-md border border-gray-200 transition-all duration-300 ${screenSize.isMedium ? 'w-[220px]' : screenSize.isWideScreen ? 'w-[260px]' : 'w-full sm:w-[240px]'} overflow-hidden relative group`}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  y: -5
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex-1 z-10">
                  <img 
                    src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" 
                    alt="Download on the App Store" 
                    className={`${screenSize.isMedium ? 'h-9' : screenSize.isWideScreen ? 'h-12' : 'h-10'}`}
                  />
                </div>
                <div className={`${screenSize.isMedium ? 'w-11 h-11' : screenSize.isWideScreen ? 'w-14 h-14' : 'w-12 h-12'} rounded-full bg-gray-100 flex items-center justify-center ml-2 z-10 transition-all duration-300 group-hover:bg-black group-hover:text-white`}>
                  <svg className={`${screenSize.isMedium ? 'w-6 h-6' : screenSize.isWideScreen ? 'w-8 h-8' : 'w-7 h-7'}`} viewBox="0 0 384 512" fill="currentColor">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100/0 via-blue-100/0 to-blue-100/0 group-hover:from-blue-100/50 group-hover:via-blue-200/50 group-hover:to-blue-100/50 transition-all duration-700 ease-in-out transform translate-x-full group-hover:translate-x-0 rounded-xl"></div>
              </motion.a>
              
              {/* Google Play Button - White Background with Official Logo */}
              <motion.a
                href="https://play.google.com/store/apps/details?id=app.usfast.eld"
                target="_blank"
                rel="noopener noreferrer" 
                className={`flex items-center justify-between bg-white text-black px-6 py-4 rounded-xl shadow-md border border-gray-200 transition-all duration-300 ${screenSize.isMedium ? 'w-[220px]' : screenSize.isWideScreen ? 'w-[260px]' : 'w-full sm:w-[240px]'} overflow-hidden relative group`}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  y: -5
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex-1 z-10">
                  <img 
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                    alt="Get it on Google Play" 
                    className={`${screenSize.isMedium ? 'h-9' : screenSize.isWideScreen ? 'h-12' : 'h-10'}`}
                  />
                </div>
                <div className={`${screenSize.isMedium ? 'w-11 h-11' : screenSize.isWideScreen ? 'w-14 h-14' : 'w-12 h-12'} rounded-full bg-gray-100 flex items-center justify-center ml-2 z-10 transition-all duration-300 group-hover:bg-black group-hover:text-white`}>
                  <svg className={`${screenSize.isMedium ? 'w-6 h-6' : screenSize.isWideScreen ? 'w-8 h-8' : 'w-7 h-7'}`} viewBox="0 0 512 512" fill="currentColor">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-100/0 via-green-100/0 to-green-100/0 group-hover:from-green-100/50 group-hover:via-green-200/50 group-hover:to-green-100/50 transition-all duration-700 ease-in-out transform translate-x-full group-hover:translate-x-0 rounded-xl"></div>
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Right side - Image - Optimized for medium screens */}
          <motion.div 
            className={`relative ${screenSize.isMedium ? 'md:col-span-2 h-[320px] md:h-[380px]' : screenSize.isWideScreen ? 'h-[500px]' : 'h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px]'} rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ 
              opacity: 1, 
              scale: 1,
              transition: { duration: 0.8, ease: "easeOut" }
            }}
            variants={pulse}
            animate="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Decorative elements - Sized for medium screens */}
            <div className={`absolute -top-6 -right-6 ${screenSize.isMedium ? 'w-16 h-16' : screenSize.isWideScreen ? 'w-28 h-28' : 'w-20 h-20'} bg-yellow-400 opacity-50 rounded-full blur-xl z-0`}></div>
            <div className={`absolute -bottom-8 -left-8 ${screenSize.isMedium ? 'w-20 h-20' : screenSize.isWideScreen ? 'w-32 h-32' : 'w-24 h-24'} bg-blue-400 opacity-30 rounded-full blur-xl z-0`}></div>
            
            <img
              src="https://www.usfasteld.com/wp-content/uploads/2023/08/banner-mobile.png"
              alt={t('main.imgAlt')}
              className="w-full h-full object-cover relative z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-20"></div>
            
            {/* Image overlay - text elements removed */}
          </motion.div>
        </div>
      )}
      
      {/* Decorative background elements - Sized appropriately for medium screens */}
      <div className={`absolute top-1/4 right-0 ${screenSize.isMedium ? 'w-60 h-60' : screenSize.isWideScreen ? 'w-80 h-80' : 'w-64 h-64'} bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob`}></div>
      <div className={`absolute top-1/3 left-0 ${screenSize.isMedium ? 'w-64 h-64' : screenSize.isWideScreen ? 'w-96 h-96' : 'w-72 h-72'} bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000`}></div>
      {screenSize.isWideScreen && (
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      )}
      {screenSize.isMedium && (
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-3000"></div>
      )}
    </main>
  )
}

export default Main
