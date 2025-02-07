import React from 'react'

function Footer() {
  return (
    <footer className="bg-white text-gray-600 py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section with Logo and Tagline */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-10 mb-8 md:mb-12">
          <div className="w-full md:w-1/4">
            <img 
              src="https://www.usfasteld.com/wp-content/themes/sanbi/images/color-logo.png" 
              alt="Blue Star ELD" 
              className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] mb-4"
            />
            <p className="text-[#475467] text-sm md:text-base ml-0 md:ml-2">
              Delivering convenience and excellence to all fleet sizes
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 w-full md:w-3/4">
            {/* Company */}
            <div className="ml-0 md:ml-4">
              <h3 className="text-[#1D2939] font-medium text-lg mb-3 md:mb-4">Company</h3>
              <ul className="space-y-2 md:space-y-3">
                <li><a href="/" className="text-sm md:text-base text-[#475467] hover:text-blue-600">Home</a></li>
                <li><a href="/features" className="text-sm md:text-base text-[#475467] hover:text-blue-600">Features</a></li>
                <li><a href="/store" className="text-sm md:text-base text-[#475467] hover:text-blue-600">Store</a></li>
                <li><a href="/partnership" className="text-sm md:text-base text-[#475467] hover:text-blue-600">Partnership</a></li>
                <li><a href="/contact" className="text-sm md:text-base text-[#475467] hover:text-blue-600">Contact</a></li>
              </ul>
            </div>

            {/* Resource */}
            <div className="ml-0 md:ml-4">
              <h3 className="text-[#1D2939] font-medium text-lg mb-3 md:mb-4">Resource</h3>
              <ul className="space-y-2 md:space-y-3">
                <li><a href="/download" className="text-sm md:text-base text-[#475467] hover:text-blue-600">Download</a></li>
                <li><a href="/manuals" className="text-sm md:text-base text-[#475467] hover:text-blue-600">Manuals</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="ml-0 md:ml-4">
              <h3 className="text-[#1D2939] font-medium text-lg mb-3 md:mb-4">Legal</h3>
              <ul className="space-y-2 md:space-y-3">
                <li><a href="/terms" className="text-sm md:text-base text-[#475467] hover:text-blue-600">Terms</a></li>
                <li><a href="/privacy" className="text-sm md:text-base text-[#475467] hover:text-blue-600">Privacy</a></li>
                <li><a href="/returns" className="text-sm md:text-base text-[#475467] hover:text-blue-600">Returns & Refunds</a></li>
                <li><a href="/warranty" className="text-sm md:text-base text-[#475467] hover:text-blue-600">Product Warranty</a></li>
              </ul>
            </div>

            {/* Get the app */}
            <div className="ml-0 md:ml-4">
              <h3 className="text-[#1D2939] font-medium text-lg mb-3 md:mb-4">Get the app</h3>
              <div className="flex flex-col space-y-2 md:space-y-3">
                <a 
                  href="https://play.google.com/store/apps/details?id=app.usfast.eld" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[140px] md:w-[160px]"
                >
                  <img 
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                    alt="Get it on Google Play"
                    className="w-full h-[40px] md:h-[48px] object-contain" 
                  />
                </a>
                <a 
                  href="https://apps.apple.com/gb/app/usfast-eld/id6499588161" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[140px] md:w-[160px]"
                >
                  <img 
                    src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" 
                    alt="Download on App Store"
                    className="w-full h-[40px] md:h-[48px] object-contain" 
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 md:pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs md:text-sm text-[#475467] text-center md:text-left">
              © Blue Star ELD™. All rights reserved.
            </p>
            <div className="flex space-x-4 md:space-x-6 mt-4 md:mt-0">
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-600"
                aria-label="YouTube"
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-600"
                aria-label="Telegram"
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.334-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.204 1.006.121.832.939z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-600"
                aria-label="Instagram"
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-600"
                aria-label="Facebook"
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
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
