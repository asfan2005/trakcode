import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaArrowLeft, FaShoppingCart, FaCheckCircle, FaInfoCircle } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import Header from '../header/Header'

// Product images
const productImages = {
  eldHardware: 'https://uspowereld.com/img/products/Y2HaHDePmpE2KvNfZyIZVmx4Z8Ndec1M7EAM1bok.png',
  iorixDevice: 'https://uspowereld.com/img/products/lgut5DLw6DodlK65Aleby4MuHGEk8Gq4M1e63qDF.webp',
  j1939Cable: 'https://uspowereld.com/img/products/1r1FdUl55Mev6w80gPpKOW9PF4CSF1dXoZyO6yzG.png',
  j1708Cable: 'https://uspowereld.com/img/products/ptrkNIeoHdimZiEV82lCzxznjQycu4b6yRIsVnIx.png',
  pinCableVolvo: 'https://uspowereld.com/img/products/e7MdIDDANSbxlkuIHziC0gYtTIRUeAYmt77SsloD.jpg',
  pinCableRP1226: 'https://uspowereld.com/img/products/bqiZbVMO8Ia91OfpqNO95APAn31dkHPSNYmgq1dx.jpg',
  obd2Cable: 'https://uspowereld.com/img/products/OOJeop2vC2B2ZJX1V5hXLjBcoNHNs8CA0LgahXix.png',
}

function ProductDetail() {
  const { productId } = useParams()
  const { t, i18n } = useTranslation()
  const currentLanguage = i18n.language
  
  // Use translations for product data instead of hardcoded values
  const products = {
    1: {
      id: 1,
      image: productImages.eldHardware,
      title: t('storePage.products.eldHardware.title'),
      price: 200,
      currency: 'USD',
      description: t('storePage.products.eldHardware.description', 
        "The ELD Hardware PT30 is a state-of-the-art electronic logging device designed to help commercial drivers comply with hours of service regulations. This compact and durable hardware connects directly to your vehicle's diagnostic port to accurately record driving time, engine hours, vehicle movement, and miles driven.")
    },
    2: {
      id: 2,
      image: productImages.iorixDevice,
      title: t('storePage.products.iorixDevice.title'),
      price: 200,
      currency: 'USD',
      description: t('storePage.products.iorixDevice.description', 
        "The IORIX ELD Device is an advanced electronic logging solution that offers reliable performance for fleet management. This device automatically tracks driver hours, simplifies DVIR, and provides real-time GPS tracking to keep your fleet compliant and efficient. Its user-friendly interface makes it easy for drivers to manage their logs and for fleet managers to monitor operations.")
    },
    3: {
      id: 3,
      image: productImages.j1939Cable,
      title: t('storePage.products.j1939Cable.title'),
      price: 25,
      currency: 'USD',
      description: t('storePage.products.j1939Cable.description', 
        "J1939 has become the accepted industry standard and the vehicle network technology of choice for heavy-duty machines. This cable enables serial data communication of microprocessor systems (also called Electronic Control Units-ECU) in any kind of heavy-duty vehicles. The exchanged data includes vehicle road speed, torque control message from the transmission to the engine, oil temperature, and many more.")
    },
    4: {
      id: 4,
      image: productImages.j1708Cable,
      title: t('storePage.products.j1708Cable.title'),
      price: 25,
      currency: 'USD',
      description: t('storePage.products.j1708Cable.description', 
        "The J1708 Cable for 6-Pin is designed for older model trucks that use the J1708 protocol. This reliable connection cable ensures consistent data transfer between your ELD device and the vehicle's ECM. Made with high-quality materials, this cable is built to withstand the demanding conditions of heavy-duty trucking operations.")
    },
    5: {
      id: 5,
      image: productImages.pinCableVolvo,
      title: t('storePage.products.pinCableVolvo.title'),
      price: 30,
      currency: 'USD',
      description: t('storePage.products.pinCableVolvo.description', 
        "This specialized 16-Pin cable is specifically designed for Volvo and Mack trucks, ensuring perfect compatibility with these vehicles' unique diagnostic systems. The cable facilitates seamless connection between your ELD device and the truck's diagnostic port, allowing for accurate data collection and Hours of Service logging.")
    },
    6: {
      id: 6,
      image: productImages.pinCableRP1226,
      title: t('storePage.products.pinCableRP1226.title'),
      price: 25,
      currency: 'USD',
      description: t('storePage.products.pinCableRP1226.description', 
        "The 14-Pin RP1226 Cable is a specialized connector designed for heavy-duty vehicles that utilize the RP1226 standard diagnostic port. This high-quality cable ensures reliable data transmission between your ELD device and the vehicle's engine control module.")
    },
    7: {
      id: 7,
      image: productImages.obd2Cable,
      title: t('storePage.products.obd2Cable.title'),
      price: 25,
      currency: 'USD',
      description: t('storePage.products.obd2Cable.description', 
        "The 16-Pin OBD2 cable is specifically designed for light and medium-duty vehicles equipped with standard OBD-II diagnostic ports. This universal connector provides reliable data communication between your ELD device and the vehicle's onboard computer system.")
    }
  }
  
  const product = products[productId]
  
  if (!product) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-6 pt-28 pb-16 max-w-7xl">
          <div className="text-center py-20 shadow-xl rounded-lg border-none">
            <h1 className="text-4xl font-bold mb-6">{t('storePage.productDetails.notFound', 'Product Not Found')}</h1>
            <Link to="/store" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center justify-center gap-2 w-fit mx-auto text-xl transition-colors mt-6">
              <FaArrowLeft /> {t('storePage.backToStore')}
            </Link>
          </div>
        </div>
      </>
    )
  }

  // Add cart button class based on language to ensure consistent styling
  const getAddCartButtonClass = () => {
    const baseClass = "text-white py-4 px-6 rounded-md flex items-center gap-3 transition-all duration-200 border justify-center whitespace-nowrap bg-red-600"
    
    if (currentLanguage === 'uz') {
      return `${baseClass} w-full md:min-w-[260px]` // Wider button for Uzbek
    }
    
    return `${baseClass} w-full md:min-w-[240px]` // Default size for English
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-6 pt-28 pb-16 max-w-7xl">
        <div className="mb-8">
          <Link to="/store" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-3 w-fit text-lg transition-colors">
            <FaArrowLeft size={16} /> {t('storePage.backToStore')}
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="p-12 rounded-lg border flex items-center justify-center transition-all duration-300">
            <img 
              src={product.image} 
              alt={product.title} 
              className="max-h-[450px] max-w-full object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
          
          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <div className="flex items-center mb-2">
              <span className="text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center border border-green-200">
                <FaCheckCircle className="mr-1" size={12} /> {t('storePage.productDetails.inStock', 'In Stock')}
              </span>
            </div>
            <p className="text-red-600 text-2xl font-semibold mb-8">
              ${product.price} {product.currency}
            </p>
            <div className="p-6 rounded-lg mb-8 text-gray-700 leading-relaxed border">
              {product.description}
            </div>
            <button className={getAddCartButtonClass()}>
              <FaShoppingCart size={20} />
              <span className="font-medium text-lg">{t('storePage.addToCart')}</span>
            </button>
          </div>
        </div>
        
        {/* Additional Information Section */}
        <div className="p-8 rounded-lg border mb-16">
          <h2 className="text-2xl font-bold mb-8 pb-3 border-b border-gray-200 flex items-center">
            <FaInfoCircle className="mr-2 text-gray-700" />
            {t('storePage.productDetails.specifications')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg border transition-colors duration-300 hover:bg-gray-50">
              <p className="font-semibold text-lg mb-3 text-gray-800">{t('storePage.productDetails.compatibility')}</p>
              <p className="text-gray-700">{t('storePage.productDetails.compatibilityText', 'Compatible with all TheBestELD devices')}</p>
            </div>
            <div className="p-6 rounded-lg border transition-colors duration-300 hover:bg-gray-50">
              <p className="font-semibold text-lg mb-3 text-gray-800">{t('storePage.productDetails.warranty')}</p>
              <p className="text-gray-700">{t('storePage.productDetails.warrantyText', '1 year limited warranty')}</p>
            </div>
            <div className="p-6 rounded-lg border transition-colors duration-300 hover:bg-gray-50">
              <p className="font-semibold text-lg mb-3 text-gray-800">{t('storePage.productDetails.shipping')}</p>
              <p className="text-gray-700">{t('storePage.productDetails.shippingText', 'Ships within 1-2 business days')}</p>
            </div>
            <div className="p-6 rounded-lg border transition-colors duration-300 hover:bg-gray-50">
              <p className="font-semibold text-lg mb-3 text-gray-800">{t('storePage.productDetails.inBox')}</p>
              <p className="text-gray-700">
                {t('storePage.productDetails.inBoxText', '1 x {{productTitle}}, Installation Guide', { productTitle: product.title })}
              </p>
            </div>
          </div>
        </div>
        
        {/* Shipping Note */}
        <div className="border p-5 text-sm text-center font-medium my-12 rounded-md ml-0 mr-auto w-full">
          {t('storePage.shippingNote')}
        </div>
      </div>
    </>
  )
}

export default ProductDetail 