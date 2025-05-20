import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

function DownloadAndPricePage() {
    const { t } = useTranslation();

    // Download funksiyalarini qo'shamiz
    const handleDownload = (url) => {
        // URL mavjud bo'lsa, yangi oynada ochish
        if (url) {
            window.open(url, '_blank');
        } else {
            alert(t('downloadPage.alertMessage'));
        }
    };

    return (
        <div className="min-h-screen bg-white py-20">
            {/* Asosiy konteyner */}
            <div className="container mx-auto px-4">
                {/* Sarlavha qismi */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-blue-600 text-4xl font-bold mb-2">
                        {t('downloadPage.joinOthers')}
                    </h2>
                    <h1 className="text-gray-800 text-6xl font-extrabold">
                        {t('downloadPage.title')}
                    </h1>
                </motion.div>

                {/* Downloads grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {/* Android App Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="aspect-w-16 aspect-h-9 mb-6">
                            <img
                                src="https://www.usfasteld.com/wp-content/uploads/2023/08/users-stacked.png"
                                alt={t('downloadPage.androidApp.alt')}
                                className="rounded-xl object-cover w-full h-48"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                            {t('downloadPage.androidApp.title')}
                        </h3>
                        <div className="flex items-center gap-2 mb-4 text-gray-600">
                            <div className="flex -space-x-2">
                                <img src="https://www.usfasteld.com/wp-content/uploads/2023/08/users-stacked.png" alt="" />
                            </div>
                            <div className="flex items-center">
                                <span className="font-semibold text-gray-700">1000</span>
                                <span className="ml-1 text-gray-500">{t('downloadPage.downloads')}</span>
                            </div>
                        </div>
                        <button 
                            onClick={() => handleDownload('https://play.google.com/store/apps/details?id=app.usfast.eld')}
                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition duration-300 flex items-center justify-center"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            {t('downloadPage.downloadNow')}
                        </button>
                    </motion.div>

                    {/* iOS App Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="aspect-w-16 aspect-h-9 mb-6">
                            <img
                                src="https://www.usfasteld.com/wp-content/uploads/2023/08/users-stacked.png"
                                alt={t('downloadPage.iosApp.alt')}
                                className="rounded-xl object-cover w-full h-48"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                            {t('downloadPage.iosApp.title')}
                        </h3>
                        <div className="flex items-center gap-2 mb-4 text-gray-600">
                            <div className="flex -space-x-2">
                                <img src="https://www.usfasteld.com/wp-content/uploads/2023/08/users-stacked.png" alt="" />
                            </div>
                            <div className="flex items-center">
                                <span className="font-semibold text-gray-700">987</span>
                                <span className="ml-1 text-gray-500">{t('downloadPage.downloads')}</span>
                            </div>
                        </div>
                        <button 
                            onClick={() => handleDownload('https://apps.apple.com/gb/app/usfast-eld/id6499588161')}
                            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-purple-700 hover:to-pink-700 transition duration-300 flex items-center justify-center"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            {t('downloadPage.downloadNow')}
                        </button>
                    </motion.div>

                    {/* Truck Sticker Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="aspect-w-16 aspect-h-9 mb-6">
                            <img
                                src="https://www.usfasteld.com/wp-content/uploads/2023/08/users-stacked.png"
                                alt={t('downloadPage.truckSticker.alt')}
                                className="rounded-xl object-cover w-full h-48"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                            {t('downloadPage.truckSticker.title')}
                        </h3>
                        <div className="flex items-center gap-2 mb-4 text-gray-600">
                            <div className="flex -space-x-2">
                                <img src="https://www.usfasteld.com/wp-content/uploads/2023/08/users-stacked.png" alt="" />
                            </div>
                            <div className="flex items-center">
                                <span className="font-semibold text-gray-700">756</span>
                                <span className="ml-1 text-gray-500">{t('downloadPage.downloads')}</span>
                            </div>
                        </div>
                        <button 
                            onClick={() => handleDownload('https://www.usfasteld.com/sticker.pdf')}
                            className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-pink-700 hover:to-rose-700 transition duration-300 flex items-center justify-center"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            {t('downloadPage.downloadNow')}
                        </button>
                    </motion.div>

                    {/* Certificate Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="aspect-w-16 aspect-h-9 mb-6">
                            <img
                                src="https://www.usfasteld.com/wp-content/uploads/2023/08/users-stacked.png"
                                alt={t('downloadPage.certificate.alt')}
                                className="rounded-xl object-cover w-full h-48"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                            {t('downloadPage.certificate.title')}
                        </h3>
                        <div className="flex items-center gap-2 mb-4 text-gray-600">
                            <div className="flex -space-x-2">
                                <img src="https://www.usfasteld.com/wp-content/uploads/2023/08/users-stacked.png" alt="" />
                            </div>
                            <div className="flex items-center">
                                <span className="font-semibold text-gray-700">543</span>
                                <span className="ml-1 text-gray-500">{t('downloadPage.downloads')}</span>
                            </div>
                        </div>
                        <button 
                            onClick={() => handleDownload('https://www.usfasteld.com/Certificate.pdf')}
                            className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-orange-600 hover:to-amber-600 transition duration-300 flex items-center justify-center"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            {t('downloadPage.downloadNow')}
                        </button>
                    </motion.div>

                    {/* DOT Instruction Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="aspect-w-16 aspect-h-9 mb-6">
                            <img
                                src="https://www.usfasteld.com/wp-content/uploads/2023/08/users-stacked.png"
                                alt={t('downloadPage.dotInstruction.alt')}
                                className="rounded-xl object-cover w-full h-48"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                            {t('downloadPage.dotInstruction.title')}
                        </h3>
                        <div className="flex items-center gap-2 mb-4 text-gray-600">
                            <div className="flex -space-x-2">
                                <img src="https://www.usfasteld.com/wp-content/uploads/2023/08/users-stacked.png" alt="" />
                            </div>
                            <div className="flex items-center">
                                <span className="font-semibold text-gray-700">432</span>
                                <span className="ml-1 text-gray-500">{t('downloadPage.downloads')}</span>
                            </div>
                        </div>
                        <button 
                            onClick={() => handleDownload('https://www.usfasteld.com/dot.pdf')}
                            className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-green-600 hover:to-emerald-600 transition duration-300 flex items-center justify-center"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            {t('downloadPage.downloadNow')}
                        </button>
                    </motion.div>

                    {/* User Manual Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="aspect-w-16 aspect-h-9 mb-6">
                            <img
                                src="https://www.usfasteld.com/wp-content/uploads/2023/08/users-stacked.png"
                                alt={t('downloadPage.userManual.alt')}
                                className="rounded-xl object-cover w-full h-48"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                            {t('downloadPage.userManual.title')}
                        </h3>
                        <div className="flex items-center gap-2 mb-4 text-gray-600">
                            <div className="flex -space-x-2">
                                <img src="https://www.usfasteld.com/wp-content/uploads/2023/08/users-stacked.png" alt="" />
                            </div>
                            <div className="flex items-center">
                                <span className="font-semibold text-gray-700">321</span>
                                <span className="ml-1 text-gray-500">{t('downloadPage.downloads')}</span>
                            </div>
                        </div>
                        <button 
                            onClick={() => handleDownload('https://www.usfasteld.com/usfastelduser.pdf')}
                            className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-teal-600 hover:to-cyan-600 transition duration-300 flex items-center justify-center"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            {t('downloadPage.downloadNow')}
                        </button>
                    </motion.div>
                </div>

                {/* Pricing Section */}
                <div id="pricing" className="mt-32">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-blue-600 text-4xl font-bold mb-2">
                            {t('pricingSection.heading')}
                        </h2>
                        <h1 className="text-gray-800 text-6xl font-extrabold">
                            {t('pricingSection.title')}
                        </h1>
                        <p className="text-gray-600 mt-4 text-xl">
                            {t('pricingSection.subtitle')}
                        </p>
                    </motion.div>

                    {/* Pricing Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8"
                    >
                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">{t('pricingSection.standardPlan')}</h3>
                            <div className="text-5xl font-bold text-gray-900 mb-6">
                                $80<span className="text-2xl font-normal text-gray-600">{t('pricingSection.perMonth')}</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {[
                                'pricingSection.features.dashboard',
                                'pricingSection.features.logbook',
                                'pricingSection.features.dvr',
                                'pricingSection.features.gpsTracking',
                                'pricingSection.features.trackingHistory',
                                'pricingSection.features.fuelLocations',
                                'pricingSection.features.weather',
                                'pricingSection.features.locationSharing',
                                'pricingSection.features.iftaReporting',
                                'pricingSection.features.driverAlarm',
                                'pricingSection.features.billing',
                                'pricingSection.features.userInterface'
                            ].map((feature, index) => (
                                <motion.div 
                                    key={index} 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className="flex items-center"
                                >
                                    <motion.svg 
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: 0.2, delay: index * 0.1 + 0.1 }}
                                        className="w-5 h-5 text-blue-500 mr-3" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </motion.svg>
                                    <span className="text-gray-600">{t(feature)}</span>
                                </motion.div>
                            ))}
                        </div>

                        <button className="w-full mt-8 bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-blue-700 transition duration-300">
                            {t('pricingSection.getStarted')}
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default DownloadAndPricePage 