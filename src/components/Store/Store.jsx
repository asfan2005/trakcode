import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Header from '../header/Header'

// Product images - using real images that match the design
const productImages = {
  eldHardware: 'https://uspowereld.com/img/products/Y2HaHDePmpE2KvNfZyIZVmx4Z8Ndec1M7EAM1bok.png',
  iorixDevice: 'https://uspowereld.com/img/products/lgut5DLw6DodlK65Aleby4MuHGEk8Gq4M1e63qDF.webp',
  j1939Cable: 'https://uspowereld.com/img/products/1r1FdUl55Mev6w80gPpKOW9PF4CSF1dXoZyO6yzG.png',
  j1708Cable: 'https://uspowereld.com/img/products/ptrkNIeoHdimZiEV82lCzxznjQycu4b6yRIsVnIx.png',
  pinCableVolvo: 'https://uspowereld.com/img/products/e7MdIDDANSbxlkuIHziC0gYtTIRUeAYmt77SsloD.jpg',
  pinCableRP1226: 'https://uspowereld.com/img/products/bqiZbVMO8Ia91OfpqNO95APAn31dkHPSNYmgq1dx.jpg',
  obd2Cable: 'https://uspowereld.com/img/products/OOJeop2vC2B2ZJX1V5hXLjBcoNHNs8CA0LgahXix.png',
}

function Store() {
  const { t, i18n } = useTranslation()
  const currentLanguage = i18n.language

  // Product data with translations
  const devices = [
    {
      id: 1,
      image: productImages.eldHardware,
      title: t('storePage.products.eldHardware.title'),
      price: 200,
      currency: 'USD',
    },
    {
      id: 2,
      image: productImages.iorixDevice,
      title: t('storePage.products.iorixDevice.title'),
      price: 200,
      currency: 'USD',
    },
  ]

  const cables = [
    {
      id: 3,
      image: productImages.j1939Cable,
      title: t('storePage.products.j1939Cable.title'),
      price: 25,
      currency: 'USD',
    },
    {
      id: 4,
      image: productImages.j1708Cable,
      title: t('storePage.products.j1708Cable.title'),
      price: 25,
      currency: 'USD',
    },
    {
      id: 5,
      image: productImages.pinCableVolvo,
      title: t('storePage.products.pinCableVolvo.title'),
      price: 30,
      currency: 'USD',
    },
    {
      id: 6,
      image: productImages.pinCableRP1226,
      title: t('storePage.products.pinCableRP1226.title'),
      price: 25,
      currency: 'USD',
    },
    {
      id: 7,
      image: productImages.obd2Cable,
      title: t('storePage.products.obd2Cable.title'),
      price: 25,
      currency: 'USD',
    },
  ]

  // Get button classes based on language
  const getReadMoreButtonClass = () => {
    const baseClass = "text-white py-3 px-5 rounded-md transition-all duration-200 border text-sm font-medium whitespace-nowrap bg-gray-800"
    
    // Add more width for Uzbek language to accommodate longer text
    if (currentLanguage === 'uz') {
      return `${baseClass} min-w-[95px]`
    }
    
    return `${baseClass}`
  }

  // Get cart button class
  const getCartButtonClass = () => {
    return "text-white py-3 px-4 rounded-md flex items-center justify-center transition-all duration-200 border bg-red-600"
  }

  // Product card component
  const ProductCard = ({ product }) => (
    <div className="border rounded-lg p-8 transition-all duration-300 flex flex-col items-center w-full">
      {/* Product Image */}
      <div className="mb-6 h-[240px] w-full flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.title} 
          className="max-h-[220px] max-w-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      {/* Product Title */}
      <h3 className="text-center text-lg font-medium mb-3 h-[48px] w-full flex items-center justify-center">
        {product.title}
      </h3>
      
      {/* Price */}
      <p className="text-center text-red-600 text-xl font-semibold mb-6">
        ${product.price} USD
      </p>
      
      {/* Buttons */}
      <div className="flex items-center gap-4 justify-center w-full mt-auto">
        {/* Cart Button */}
        <button className={getCartButtonClass()}>
          <FaShoppingCart size={18} className="m-auto" />
        </button>
        
        {/* Read More Button */}
        <Link 
          to={`/product/${product.id}`}
          className={getReadMoreButtonClass()}
        >
          {t('storePage.readMore')}
        </Link>
      </div>
    </div>
  )

  return (
    <>
      <Header />
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-6 md:px-8 max-w-7xl">
          <h1 className="text-4xl font-bold text-center mb-16">{t('storePage.title')}</h1>
          
          {/* Devices Section */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-10 pb-3 border-b border-gray-200">{t('storePage.sections.devices')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {devices.map(device => (
                <ProductCard key={device.id} product={device} />
              ))}
            </div>
          </div>
          
          {/* Cables Section */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-10 pb-3 border-b border-gray-200">{t('storePage.sections.cables')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {cables.map(cable => (
                <ProductCard key={cable.id} product={cable} />
              ))}
            </div>
          </div>
          
          {/* Shipping Note */}
          <div className="border p-5 text-sm text-center font-medium my-12 rounded-md ml-0 mr-auto w-full">
            {t('storePage.shippingNote')}
          </div>
        </div>
      </div>
    </>
  )
}

export default Store 