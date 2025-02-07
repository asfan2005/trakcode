import React from 'react';

const integrationCards = [
  {
    id: 1,
    title: "Descartes MacroPoint",
    logo: "https://framerusercontent.com/images/sBbzqK4UjGIuIvdFz25LFcR0riA.png",
    description: "Descartes MacroPoint is purpose-built to provide end-to-end visibility through every stage of the transportation journey, all from a single provide",
  },
  {
    id: 2,
    title: "FourKites",
    logo: "https://www.usfasteld.com/wp-content/uploads/2023/08/2.png",
    description: "Real-time transportation visibility allows you to have the exact location of your vehicles and shipments in real time",
  },
  {
    id: 3,
    title: "Project44",
    logo: "https://www.usfasteld.com/wp-content/uploads/2023/08/3.webp",
    description: "Helps manage the supply chain with precision and efficiency by making vehicles visible at all times",
  },
  {
    id: 4,
    title: "TruckerTools",
    logo: "https://www.usfasteld.com/wp-content/uploads/2023/08/4.webp",
    description: "Load tracking and digital freight matching solution that helps cut your costs",
  },
  {
    id: 5,
    title: "Go Highway",
    logo: "https://www.usfasteld.com/wp-content/uploads/2023/08/5.webp",
    description: "UHelps brokers identifying carriers",
  },
  {
    id: 6,
    title: "Amous TMS",
    logo: "https://www.usfasteld.com/wp-content/uploads/2023/08/6.webp",
    description: "TMS with a unique architectural approach that enables users to benefit from several micro-services",
    comingSoon: true
  },
  {
    id: 7,
    title: "Trucker Cloud",
    logo: "https://www.usfasteld.com/wp-content/uploads/2023/08/7.webp",
    description: "Allows tech companies to quickly connect with the industry's leading ELD's, so you can gather data and gain insight, faster.",
    comingSoon: true
  }
];

function Integrations() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Integrations</h1>
        <p className="text-lg max-w-3xl mx-auto">
        Connect your essential third-party apps to benefit from real-time data, improve efficiencies, and reduce operational costs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrationCards.map((card) => (
          <div key={card.id} className="border rounded-lg p-6 shadow-sm">
            <div className="relative flex items-center justify-center h-40 mb-4">
              <div className="h-full" style={{ position: 'relative', borderRadius: 'inherit' }}>
                <img 
                  src={card.logo} 
                  alt={card.title} 
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    borderRadius: 'inherit',
                    objectPosition: 'center',
                    objectFit: 'contain',
                    boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                  }}
                  decoding="async"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">
              {card.title}
            </h3>
            <p className="text-center mb-4">
              {card.description}
            </p>
            {card.comingSoon && (
              <div className="text-center mt-4">
                <span className="inline-block px-6 py-2 bg-blue-100 text-blue-600 border-2 border-blue-200 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300">
                  Coming Soon
                  <span className="ml-2 animate-pulse">🔔</span>
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Integrations;