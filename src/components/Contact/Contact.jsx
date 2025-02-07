import React from 'react'

function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header */}
      <div className="mb-8 sm:mb-12">
        <p className="text-blue-600 font-medium text-sm sm:text-base">Contact us</p>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2">Chat to our friendly team</h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">We'd love to hear from you. Please fill out this form or shoot us an email.</p>
      </div>

      {/* Contact Info Grid */}
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
        {/* Left Column - Contact Details */}
        <div className="space-y-4 sm:space-y-6">
          <div>
            <h3 className="font-medium mb-2 text-base sm:text-lg">Email</h3>
            <p className="text-xs sm:text-sm text-gray-600">Our friendly team is here to help</p>
            <a href="mailto:support@bluestaraide.com" className="text-blue-600 text-sm sm:text-base hover:underline">info@usfasteld.com</a>
          </div>

          <div>
            <h3 className="font-medium mb-2 text-base sm:text-lg">Phone</h3>
            <p className="text-xs sm:text-sm text-gray-600">Mon-Sat from 8am to 5pm EST</p>
            <a href="tel:+12675514401" className="text-blue-600 text-sm sm:text-base hover:underline">+13322238689</a>
          </div>

          <div>
            <h3 className="font-medium mb-2 text-base sm:text-lg">Office</h3>
            <p className="text-xs sm:text-sm text-gray-600">Visit our office</p>
            <p className="text-blue-600 text-sm sm:text-base">340 Webster Ave Brooklyn NY 11230</p>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <form className="space-y-4 sm:space-y-5">
          <div>
            <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Name</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 sm:py-2.5 border border-gray-300 rounded-md text-sm"
              required 
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Company Name</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 sm:py-2.5 border border-gray-300 rounded-md text-sm"
              required 
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Email</label>
            <input 
              type="email" 
              className="w-full px-3 py-2 sm:py-2.5 border border-gray-300 rounded-md text-sm"
              required 
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Phone Number</label>
            <input 
              type="tel" 
              className="w-full px-3 py-2 sm:py-2.5 border border-gray-300 rounded-md text-sm"
              required 
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Amount of Trucks</label>
            <input 
              type="number" 
              className="w-full px-3 py-2 sm:py-2.5 border border-gray-300 rounded-md text-sm"
              required 
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Message</label>
            <textarea 
              rows="4" 
              className="w-full px-3 py-2 sm:py-2.5 border border-gray-300 rounded-md text-sm"
              required
            ></textarea>
          </div>

          <div className="text-xs sm:text-sm text-gray-600">
            <label className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" required />
              <span>By checking this box you agree to receive text from Blue Star ELD Inc. Message and data rates may apply. STOP to opt out at any time. Reply HELP to 1267-551-4401 for help. View our privacy policy for more information. Messages and data rates may apply. Message frequency will vary.</span>
            </label>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2.5 sm:py-3 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base font-medium"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact