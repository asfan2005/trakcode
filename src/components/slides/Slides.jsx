import React, { useState, useEffect } from 'react';

const Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const integrationCards = [
    {
      id: 1,
      title: "Descartes MacroPoint",
      logo: "https://framerusercontent.com/images/sBbzqK4UjGIuIvdFz25LFcR0riA.png",
      description: "Descartes MacroPoint is purpose-built to provide end-to-end visibility through every stage of the transportation journey, all from a single provider",
      logoOne:"https://framerusercontent.com/images/sBbzqK4UjGIuIvdFz25LFcR0riA.png",
      name:"Descartes MacroPoint",
    },
    {
      id: 2,
      title: "FourKites",
      logo: "https://www.usfasteld.com/wp-content/uploads/2023/08/2.png",
      description: "Real-time transportation visibility allows you to have the exact location of your vehicles and shipments in real time",
      name: "FourKites",
      logoOne: "https://www.usfasteld.com/wp-content/uploads/2023/08/2.png",
    },
    {
      id: 3,
      title: "Project44",
      logo: "https://www.usfasteld.com/wp-content/uploads/2023/08/3.webp",
      description: "Helps manage the supply chain with precision and efficiency by making vehicles visible at all times",
      name: "Project44",
      logoOne: "https://www.usfasteld.com/wp-content/uploads/2023/08/3.webp",
    },
    {
      id: 4,
      title: "TruckerTools",
      logo: "https://www.usfasteld.com/wp-content/uploads/2023/08/4.webp",
      description: "Load tracking and digital freight matching solution that helps cut your costs",
      name: "TruckerTools",
      logoOne: "https://www.usfasteld.com/wp-content/uploads/2023/08/4.webp",
    },
    {
      id: 5,
      title: "Go Highway",
      logo: "https://www.usfasteld.com/wp-content/uploads/2023/08/5.webp",
      description: "UHelps brokers identifying carriers",
      name: "Go Highway",
      logoOne: "https://www.usfasteld.com/wp-content/uploads/2023/08/5.webp",
    },
    {
      id: 6,
      title: "Amous TMS",
      logo: "https://www.usfasteld.com/wp-content/uploads/2023/08/6.webp",
      description: "TMS with a unique architectural approach that enables users to benefit from several micro-services",
      comingSoon: true,
      name: "Amous TMS",
      logoOne: "https://www.usfasteld.com/wp-content/uploads/2023/08/6.webp",
    },
    {
      id: 7,
      title: "Trucker Cloud",
      logo: "https://www.usfasteld.com/wp-content/uploads/2023/08/7.webp",
      description: "Allows tech companies to quickly connect with the industry's leading ELD's, so you can gather data and gain insight, faster.",
      comingSoon: true,
      name: "Trucker Cloud",
      logoOne: "https://www.usfasteld.com/wp-content/uploads/2023/08/7.webp",
    }
  ];
  

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === integrationCards.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? integrationCards.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="relative w-full overflow-hidden min-h-[500px]">
          {integrationCards.map((card, index) => (
            <div
              key={card.id}
              className={`transform transition-all duration-700 ease-in-out ${
                index === currentSlide 
                  ? 'opacity-100 scale-100 translate-x-0' 
                  : 'opacity-0 scale-95 translate-x-full absolute'
              }`}
            >
              <div className="flex flex-col md:flex-row items-center gap-12">
                {/* Logo Section */}
                <div className="w-full md:w-1/2">
                  <div className="rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300">
                    <img
                      src={card.logo}
                      alt={card.title}
                      className="w-full h-[200px] object-contain"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-3">
                    <img  
                      src={card.logoOne} 
                      alt={card.name}
                      className="w-[50px] h-[50px]  rounded-full object-cover border-2 border-gray-200"
                    />
                    <span className="text-sm font-semibold text-blue-600 tracking-wider">
                      {card.name}
                    </span>
                  </div>
                  <h3 className="text-4xl font-bold mb-4 mt-4 text-gray-900">{card.title}</h3>
                  <p className="text-xl leading-relaxed text-gray-600">{card.description}</p>
                  {card.comingSoon && (
                    <span className="inline-block mt-4 px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}

         

          {/* Dots Navigation */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 mb-8">
            {integrationCards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 w-2 hover:bg-blue-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slides;
