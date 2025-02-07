import React from 'react'
import { motion } from 'framer-motion'

function Featurs() {
  return (
    <div className="w-full py-32 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-[1240px] mx-auto">
        {/* Header section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <p className="text-blue-600 uppercase tracking-wider font-semibold mb-4">
            BIZNING MAHSULOTLAR
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Avtoparkingizni boshqarish uchun barcha kerakli vositalar bir joyda
          </h2>
          <p className="text-gray-700 text-xl max-w-[800px] mx-auto leading-relaxed">
            ELD, Real vaqtdagi GPS kuzatuv, Dispetcherlik va Dash kameralar bilan oson muvofiqlashtirish
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
          {/* Card components - ularning har biri uchun yangi dizayn */}
          {[
            {
              title: "Dispetcher Paneli",
              description: "Kundalik operatsiyalarni optimallashtirib, vaqtingizni tejang va yuqori daromadli yuklarga e'tibor qarating",
              icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            },
            {
              title: "ELD Muvofiqlik Yechimi",
              description: "FMCSA tomonidan sertifikatlangan ELD muvofiqlik yechimimiz keng qamrovli xususiyatlarni taqdim etadi",
              icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            },
            {
              title: "Asset Tracker",
              description: "US FAST ELD Asset Tracker is the most effective to secure your asset through bottom line. It is for who care about the safety of their drivers and trucks.",
              icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            },
            {
              title: "Dash Camera System",
              description: "According to FMCSA research that accident rose over $1.2 million; with US FAST ELD camera business will secure both its finance and fleet.",
              icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-8 group-hover:bg-blue-200 transition-colors duration-300 shadow-lg">
                <svg className="w-12 h-12 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" 
                     fill="none" 
                     stroke="currentColor" 
                     viewBox="0 0 24 24">
                  <path strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="1.5" 
                        d={service.icon} />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Featurs