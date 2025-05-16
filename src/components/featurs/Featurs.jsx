import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

function Featurs() {
  const { t, i18n } = useTranslation();
  const [hovered, setHovered] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const services = [
    {
      id: "dispatch",
      title: t('features.dispatch.title'),
      description: t('features.dispatch.description'),
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
      color: "blue"
    },
    {
      id: "eld",
      title: t('features.eld.title'),
      description: t('features.eld.description'),
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      color: "green"
    },
    {
      id: "gps",
      title: t('features.gps.title'),
      description: t('features.gps.description'),
      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
      color: "indigo"
    },
    {
      id: "camera",
      title: t('features.camera.title'),
      description: t('features.camera.description'),
      icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
      color: "purple"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-100",
        hover: "group-hover:bg-blue-200",
        text: "text-blue-600",
        hoverText: "group-hover:text-blue-700"
      },
      green: {
        bg: "bg-green-100",
        hover: "group-hover:bg-green-200",
        text: "text-green-600",
        hoverText: "group-hover:text-green-700"
      },
      indigo: {
        bg: "bg-indigo-100",
        hover: "group-hover:bg-indigo-200",
        text: "text-indigo-600",
        hoverText: "group-hover:text-indigo-700"
      },
      purple: {
        bg: "bg-purple-100",
        hover: "group-hover:bg-purple-200",
        text: "text-purple-600",
        hoverText: "group-hover:text-purple-700"
      }
    };
    
    return colorMap[color] || colorMap.blue;
  };

  // Language toggle handler
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'uz' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="w-full py-32 px-4 bg-gradient-to-b from-white to-blue-50 relative">
      {/* Decorative background elements */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-[1240px] mx-auto relative z-10">
       
        
        {/* Header section */}
        <motion.div 
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-32"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-blue-600 uppercase tracking-wider font-semibold mb-4"
          >
            {t('features.heading')}
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
          >
            {t('features.title')}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-700 text-xl max-w-[800px] mx-auto leading-relaxed"
          >
            {t('features.subtitle')}
          </motion.p>
        </motion.div>

        {/* Services grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24"
        >
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.1
                  }
                }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="flex flex-col items-center text-center group"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className={`w-24 h-24 ${colorClasses.bg} rounded-full flex items-center justify-center mb-8 ${colorClasses.hover} transition-colors duration-300 shadow-lg`}
                >
                  <svg 
                    className={`w-12 h-12 ${colorClasses.text} ${colorClasses.hoverText} transition-colors duration-300`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="1.5" 
                      d={service.icon}
                    />
                  </svg>
                </motion.div>

                <motion.h3 
                  whileHover={{ scale: 1.05 }}
                  className={`text-2xl font-bold mb-4 text-gray-800 group-hover:${colorClasses.text.replace('text-', '')} transition-colors duration-300`}
                >
                  {service.title}
                </motion.h3>

                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-600 leading-relaxed text-lg"
                >
                  {service.description}
                </motion.p>
                
                {/* Learn more link */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6"
                >
                  <a href="#" className={`flex items-center ${colorClasses.text} hover:underline font-medium`}>
                    {t('features.learnMore')}
                    <svg className="ml-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  )
}

export default Featurs