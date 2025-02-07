import React from 'react';
import { motion } from 'framer-motion';

function SmartDashboard() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-blue-700 px-4 py-2 font-medium">
            GPS Tracking
          </span>
          <h1 className="text-5xl font-bold mt-6 mb-8 text-gray-900">
            Smart Dashboard
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          Work smarter, not harder. We present our dashboard where you can access all vehicles and drivers information. Plan ahead of time for fuel, scale, weigh stations or upcoming weather.
          </p>
        </motion.div>

        {/* Monitor Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8"
        >
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Monitor every vehicle
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
            All important vehicle information is in one place: vehicle and driver duty status, current location, current fuel level and speed. In addition, view drivers remaining HOS time and be on top of driver who are currently in HOS Violation.
            </p>
          </div>

          {/* Vehicle Image Container */}
          <div className="rounded-xl overflow-hidden">
            <img 
              src="https://www.usfasteld.com/wp-content/uploads/2023/08/features-01.png" 
              alt="Vehicle Monitoring Dashboard" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Map and Info Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 p-4 md:p-6 lg:p-8 bg-gray-50"
        >
          {/* Map Container */}
          <div className="w-full lg:w-1/2 relative">
            {/* Background Map */}
            <div 
              className="w-full md:w-[500px] lg:w-[600px] h-[300px] md:h-[350px] lg:h-[400px] mx-auto rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              style={{
                backgroundImage: `url('https://framerusercontent.com/images/MINMUL3PR964MNLrdlBEzYGffA.png?scale-down-to=512')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                border: "5px solid #E5E7EB",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
              }}
            >
              {/* Hover Overlay */}
              <div className="h-full w-full bg-black/5 hover:bg-black/0 transition-all duration-300" />
            </div>

            {/* Left Panel Overlay */}
            <div className="absolute top-4 md:top-6 lg:top-8 left-2 md:left-3 lg:left-4 w-[150px] md:w-[175px] lg:w-[200px] z-20 p-2 md:p-3 lg:p-4">
              <img
                src="https://framerusercontent.com/images/wZtxU8LoV3Rid78O7CwOFBM424s.png"
                alt="Map Controls"
                className="w-full h-auto"
                style={{
                  filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1))"
                }}
              />
            </div>
          </div>

          {/* Right side - Text Content */}
          <div className="w-full lg:w-1/2 space-y-4 md:space-y-5 lg:space-y-6 flex flex-col justify-center mt-6 lg:mt-0">
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-gray-900 text-center lg:text-left mt-5 sm:mt-6 md:mt-8 lg:mt-0">
              Customizable Map
            </h2>
            
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4 md:mb-5 lg:mb-6 text-center lg:text-left px-4 lg:px-0">
              With customizable dashboard map you can choose the style you like the most. Use filters to view traffic, group vehicles, and find nearest Weigh Station, CAT Scales and wide variety of truck stops.
            </p>

            <div className="space-y-3 md:space-y-3.5 lg:space-y-4 px-4 lg:px-0">
              <div className="flex items-start gap-2 md:gap-2.5 lg:gap-3">
                <div className="p-1.5 md:p-1.5 lg:p-2 bg-blue-100 rounded-lg">
                  <svg className="w-5 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-base md:text-lg lg:text-lg text-gray-900">Custom Map Styles</h3>
                  <p className="text-gray-600 text-sm md:text-base">Choose from multiple map styles to match your preferences</p>
                </div>
              </div>

              <div className="flex items-start gap-2 md:gap-2.5 lg:gap-3">
                <div className="p-1.5 md:p-1.5 lg:p-2 bg-green-100 rounded-lg">
                  <svg className="w-5 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-base md:text-lg lg:text-lg text-gray-900">Advanced Filtering</h3>
                  <p className="text-gray-600 text-sm md:text-base">Filter traffic data and group vehicles efficiently</p>
                </div>
              </div>

              <div className="flex items-start gap-2 md:gap-2.5 lg:gap-3">
                <div className="p-1.5 md:p-1.5 lg:p-2 bg-purple-100 rounded-lg">
                  <svg className="w-5 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-base md:text-lg lg:text-lg text-gray-900">Nearby Facilities</h3>
                  <p className="text-gray-600 text-sm md:text-base">Locate nearest weigh stations, CAT scales, and truck stops</p>
                </div>
              </div>
            </div>

            <button className="mt-4 md:mt-5 lg:mt-6 bg-blue-600 text-white px-4 md:px-5 lg:px-6 py-2.5 md:py-2.5 lg:py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 w-fit mx-auto lg:mx-0">
              Explore Features
            </button>
          </div>
        </motion.div>

        {/* Weather Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 mt-12"
        >
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Weather Map
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Plan ahead of time using weather filters. Stay informed about upcoming rain, snow, and storm conditions. Monitor temperature, humidity, and weather patterns across your routes.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-sky-100 rounded-lg">
                  <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Real-time Weather Updates</h3>
                  <p className="text-gray-600">Access current weather conditions and forecasts</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Storm Alerts</h3>
                  <p className="text-gray-600">Get notified about severe weather conditions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Weather Map Image Container */}
          <div className="rounded-xl overflow-hidden  hover:shadow-2xl transition-all duration-300">
            <img 
              src="https://www.usfasteld.com/wp-content/uploads/2023/08/features-03.png" 
              alt="Weather Map Interface" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Live Location Share Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 mt-12 bg-gray-50 rounded-xl"
        >
          {/* Left side - Map Preview */}
          <div className="relative">
            <img src="https://www.usfasteld.com/wp-content/uploads/2023/08/features-04.png" alt="" />
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Live Location Share
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Satisfy your Brokers and Shippers by sharing your vehicle's live location. 
              Remove the stress and concerns about the driver's location and arrival times.
            </p>

            <div className="space-y-4">
              {/* Share Features */}
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Easy Sharing</h3>
                  <p className="text-gray-600">Share location links with expiration dates</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Secure Access</h3>
                  <p className="text-gray-600">Control who can view driver information</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default SmartDashboard;
