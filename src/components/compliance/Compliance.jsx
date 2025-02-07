import React from 'react';

function Compliance() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header section */}
      <div className="text-center mb-16">
        <p className="text-blue-600 font-medium mb-2">ELD Compliance</p>
        <h1 className="text-3xl font-bold mb-4">Everything you need, all in one place</h1>
        <p className="text-gray-600">
          We built and tested the ELD with truckers in mind, which is why our extensive features offer a simplified experience.
        </p>
      </div>

      {/* Main content with 3 columns layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
        {/* Left column features */}
        <div className="space-y-16">
          {/* Compliance Feature */}
          <div className="text-center">
            <div className="w-12 h-12 bg-[#EEF4FF] rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-[#246BFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Compliance</h3>
            <p className="text-gray-600 text-sm max-w-xs mx-auto">
              Fully FMCSA compliant to pass your roadside inspections
            </p>
          </div>

          {/* Maintain Records Feature */}
          <div className="text-center">
            <div className="w-12 h-12 bg-[#EEF4FF] rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-[#246BFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Maintain and audit records</h3>
            <p className="text-gray-600 text-sm max-w-xs mx-auto">
              Monitor and maintain your records and exercise e-log flexibility
            </p>
          </div>

          {/* Driver Messaging Feature */}
          <div className="text-center">
            <div className="w-12 h-12 bg-[#EEF4FF] rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-[#246BFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Driver Messaging</h3>
            <p className="text-gray-600 text-sm max-w-xs mx-auto">
              Send messages, images or files directly through the app
            </p>
            <span className="inline-block bg-[#EEF4FF] text-[#246BFD] text-xs px-4 py-1 rounded-full mt-3">
              Coming Soon
            </span>
          </div>
        </div>

        {/* Center column - Phone Image */}
        <div className="flex justify-center items-center px-8">
          <img 
            src="https://www.usfasteld.com/wp-content/uploads/2023/08/feature-mobile-01.png"
            alt="ELD App Interface"
            className="w-full max-w-[320px] h-auto"
          />
        </div>

        {/* Right column features */}
        <div className="space-y-16">
          {/* Night Mode Feature */}
          <div className="text-center">
            <div className="w-12 h-12 bg-[#EEF4FF] rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-[#246BFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Night Mode</h3>
            <p className="text-gray-600 text-sm max-w-xs mx-auto">
              Darkened design to ease strain on your eyes. Power saving for your device
            </p>
          </div>

          {/* Easy Access Feature */}
          <div className="text-center">
            <div className="w-12 h-12 bg-[#EEF4FF] rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-[#246BFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Easy Access</h3>
            <p className="text-gray-600 text-sm max-w-xs mx-auto">
              Easily access most used pages and using certify, bulk certify all your past uncertified records
            </p>
          </div>

          {/* Document Scanner Feature */}
          <div className="text-center">
            <div className="w-12 h-12 bg-[#EEF4FF] rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-[#246BFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Document Scanner</h3>
            <p className="text-gray-600 text-sm max-w-xs mx-auto">
              Easily scan documents like a professional
            </p>
            <span className="inline-block bg-[#EEF4FF] text-[#246BFD] text-xs px-4 py-1 rounded-full mt-3">
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Compliance;