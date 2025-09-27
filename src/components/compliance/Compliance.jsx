import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import rasm1 from "../../img/rasm1.jpg";
function Compliance() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "uz" : "en";
    i18n.changeLanguage(newLang);
    setLanguage(newLang);
  };

  const features = [
    {
      id: 1,
      titleKey: "compliance.features.compliance.title",
      descriptionKey: "compliance.features.compliance.description",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      ),
    },
    {
      id: 2,
      titleKey: "compliance.features.records.title",
      descriptionKey: "compliance.features.records.description",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      ),
    },
    {
      id: 3,
      titleKey: "compliance.features.messaging.title",
      descriptionKey: "compliance.features.messaging.description",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      ),
      comingSoon: false,
    },
    {
      id: 4,
      titleKey: "compliance.features.nightMode.title",
      descriptionKey: "compliance.features.nightMode.description",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      ),
    },
    {
      id: 5,
      titleKey: "compliance.features.easyAccess.title",
      descriptionKey: "compliance.features.easyAccess.description",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
        />
      ),
    },
    {
      id: 6,
      titleKey: "compliance.features.scanner.title",
      descriptionKey: "compliance.features.scanner.description",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      ),
      comingSoon: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Language toggle button */}

        {/* Header section with animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block text-blue-600 font-medium mb-2 bg-blue-50 px-4 py-1 rounded-full"
          >
            {t("compliance.badge")}
          </motion.span>
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800"
          >
            {t("compliance.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            {t("compliance.subtitle")}
          </motion.p>
        </motion.div>

        {/* Main content with 3 columns layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {/* Left column features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {features.slice(0, 3).map((feature) => (
              <FeatureCard key={feature.id} feature={feature} t={t} />
            ))}
          </motion.div>

          {/* Center column - Phone Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex justify-center items-center px-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-3xl blur-2xl opacity-20 animate-pulse" />
              <img
                src={rasm1}
                alt="ELD App Interface"
                className="relative w-full max-w-[320px] h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Right column features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {features.slice(3).map((feature) => (
              <FeatureCard key={feature.id} feature={feature} t={t} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ feature, t }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.05 }}
      className="text-center group"
    >
      <motion.div
        className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto
                   group-hover:bg-blue-600 transition-colors duration-300"
      >
        <svg
          className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {feature.icon}
        </svg>
      </motion.div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">
        {t(feature.titleKey)}
      </h3>
      <p className="text-gray-600 text-sm max-w-xs mx-auto">
        {t(feature.descriptionKey)}
      </p>
      {feature.comingSoon && (
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs px-4 py-1 rounded-full mt-3 shadow-lg"
        >
          {t("compliance.comingSoon")}
        </motion.span>
      )}
    </motion.div>
  );
}

export default Compliance;
