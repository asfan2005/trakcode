import React from 'react'
import { motion } from 'framer-motion'

function Featurs() {
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
      title: "Dispatcher Panel",
      description: "Optimize daily operations, save time, and focus on high-revenue loads with our comprehensive dispatch solution",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
    },
    {
      title: "ELD Compliance Solution",
      description: "Our FMCSA-certified ELD compliance solution offers comprehensive features for complete fleet management",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      title: "Asset Tracker",
      description: "The most effective solution to secure your assets through advanced GPS tracking. Perfect for those who prioritize driver and truck safety",
      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    },
    {
      title: "Dash Camera System",
      description: "Protect your business with our advanced dash camera system. Reduce liability and insurance costs while improving driver safety",
      icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
    }
  ];

  return (
    <div className="w-full py-32 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-[1240px] mx-auto">
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
            OUR PRODUCTS
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
          >
            All the tools you need to manage your fleet in one place
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-700 text-xl max-w-[800px] mx-auto leading-relaxed"
          >
            Easy coordination with ELD, Real-time GPS tracking, Dispatch, and Dash cameras
          </motion.p>
        </motion.div>

        {/* Services grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24"
        >
          {services.map((service, index) => (
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
              className="flex flex-col items-center text-center group"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-8 group-hover:bg-blue-200 transition-colors duration-300 shadow-lg"
              >
                <svg 
                  className="w-12 h-12 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" 
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
                className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300"
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Featurs