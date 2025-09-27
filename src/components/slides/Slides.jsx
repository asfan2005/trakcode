import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Slides = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const integrationCards = [
    {
      id: 1,
      key: "macroPoint",
      logo: "https://framerusercontent.com/images/sBbzqK4UjGIuIvdFz25LFcR0riA.png",
      logoOne:
        "https://framerusercontent.com/images/sBbzqK4UjGIuIvdFz25LFcR0riA.png",
    },
    {
      id: 2,
      key: "fourKites",
      logo: "https://www.usfasteld.com/wp-content/uploads/2023/08/2.png",
      logoOne: "https://www.usfasteld.com/wp-content/uploads/2023/08/2.png",
    },
    {
      id: 3,
      key: "project44",
      logo: "https://www.usfasteld.com/wp-content/uploads/2023/08/3.webp",
      logoOne: "https://www.usfasteld.com/wp-content/uploads/2023/08/3.webp",
    },
    {
      id: 4,
      key: "truckerTools",
      logo: "https://www.usfasteld.com/wp-content/uploads/2023/08/4.webp",
      logoOne: "https://www.usfasteld.com/wp-content/uploads/2023/08/4.webp",
    },
    {
      id: 5,
      key: "goHighway",
      logo: "https://www.usfasteld.com/wp-content/uploads/2023/08/5.webp",
      logoOne: "https://www.usfasteld.com/wp-content/uploads/2023/08/5.webp",
    },
    {
      id: 6,
      key: "amousTMS",
      logo: "https://www.usfasteld.com/wp-content/uploads/2023/08/6.webp",
      logoOne: "https://www.usfasteld.com/wp-content/uploads/2023/08/6.webp",
      comingSoon: true,
    },
    {
      id: 7,
      key: "truckerCloud",
      logo: "https://www.usfasteld.com/wp-content/uploads/2023/08/7.webp",
      logoOne: "https://www.usfasteld.com/wp-content/uploads/2023/08/7.webp",
      comingSoon: true,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === integrationCards.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? integrationCards.length - 1 : prev - 1
    );
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
                  ? "opacity-100 scale-100 translate-x-0"
                  : "opacity-0 scale-95 translate-x-full absolute"
              }`}
            >
              <div className="flex flex-col md:flex-row items-center gap-12">
                {/* Logo Section */}
                <div className="w-full md:w-1/2">
                  <div className="rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300">
                    <img
                      src={card.logo}
                      alt={t(`slides.cards.${card.key}.title`)}
                      className="w-full h-[200px] object-contain"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-3">
                    <img
                      src={card.logoOne}
                      alt={t(`slides.cards.${card.key}.name`)}
                      className="w-[50px] h-[50px] rounded-full object-cover border-2 border-gray-200"
                    />
                    <span className="text-sm font-semibold text-blue-600 tracking-wider">
                      {t(`slides.cards.${card.key}.name`)}
                    </span>
                  </div>
                  <h3 className="text-4xl font-bold mb-4 mt-4 text-gray-900">
                    {t(`slides.cards.${card.key}.title`)}
                  </h3>
                  <p className="text-xl leading-relaxed text-gray-600">
                    {t(`slides.cards.${card.key}.description`)}
                  </p>
                  {card.comingSoon && (
                    <span className="inline-block mt-4 px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                      {t("slides.comingSoon")}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slides;
