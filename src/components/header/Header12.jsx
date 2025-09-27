import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaTruck, FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const isUzbek = i18n.language === "uz";
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add overflow hidden to body when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handlePricingClick = (e) => {
    e.preventDefault();

    // If we're on the home page, just scroll to the pricing section
    if (location.pathname === "/") {
      const pricingSection = document.getElementById("pricing");
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If we're on another page, navigate to home and then scroll
      navigate("/", { state: { scrollToPricing: true } });
    }

    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  // Effect to handle scrolling after navigation
  useEffect(() => {
    if (location.state?.scrollToPricing && location.pathname === "/") {
      setTimeout(() => {
        const pricingSection = document.getElementById("pricing");
        if (pricingSection) {
          pricingSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); // Small delay to ensure the component has mounted
    }
  }, [location]);

  const navItems = [
    { path: "/", label: t("header.home") },
    { path: "/store", label: t("header.store") },
    { path: "/downloads", label: t("header.downloads") },
    {
      path: "#pricing",
      label: t("header.pricing"),
      onClick: handlePricingClick,
    },
    { path: "/contact", label: t("header.contactUs") },
  ];

  return (
    <>
      {/* Add overflow-x-hidden to prevent horizontal scrolling */}
      <div className="overflow-x-hidden w-full">
        <header
          className={`fixed top-0 left-0 right-0 w-full bg-white shadow-lg transition-all duration-300 z-50`}
        >
          <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Reduced height from h-14/h-16 to h-12/h-14 */}
            <div className="h-12 sm:h-14 flex items-center justify-between">
              {/* Logo - Enhanced design */}
              <Link to="/" className="flex items-center group flex-shrink-0">
                <div className="relative">
                  <div className="bg-blue-900 p-1 rounded-lg shadow-md">
                    <FaTruck className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover:text-yellow-500 transform group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
                <div className="ml-2 sm:ml-2.5">
                  <span
                    className={`text-sm sm:text-base font-bold tracking-tight text-blue-900`}
                  >
                    Elbrus
                  </span>
                  <span
                    className={`text-sm sm:text-base font-bold tracking-tight text-yellow-500`}
                  >
                    Elogs
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation - Enhanced with better spacing and hover effects */}
              <div className="hidden lg:flex items-center justify-center flex-1 mx-3 xl:mx-4">
                <div className="flex justify-center gap-3 xl:gap-4 w-full max-w-4xl mx-auto">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={item.onClick}
                      className={`text-center text-xs xl:text-sm font-medium px-1 py-1 rounded-md transition-all duration-300 text-blue-900 hover:text-yellow-500 hover:bg-blue-50`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Auth Buttons - Enhanced design without language switcher */}
              <div className="hidden lg:flex items-center space-x-1.5 xl:space-x-2 flex-shrink-0">
                <Link
                  to="/login"
                  className={`whitespace-nowrap text-xs font-medium px-2.5 py-1 rounded-lg transition-all duration-300 text-blue-900 hover:text-yellow-600 hover:bg-blue-50`}
                >
                  {t("header.login")}
                </Link>
                <Link
                  to="/signup"
                  className="whitespace-nowrap text-xs bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-3 py-1 rounded-lg font-semibold hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-400/30"
                >
                  {t("header.signup")}
                </Link>
              </div>

              {/* Mobile Menu Button - Enhanced design without language switcher */}
              <div className="flex items-center lg:hidden">
                <button
                  className={`p-1 rounded-lg transition-colors text-blue-900 hover:bg-blue-100`}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
                </button>
              </div>
            </div>

            {/* Mobile Menu - Enhanced fullscreen overlay with better styling */}
            {isMenuOpen && (
              <div className="fixed inset-0 top-12 sm:top-14 bg-white lg:hidden z-40 animate-fadeIn">
                <div className="px-3 py-4 max-h-[calc(100vh-3rem)] sm:max-h-[calc(100vh-3.5rem)] overflow-y-auto">
                  <div className="flex flex-col space-y-1 mb-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={(e) => {
                          if (item.onClick) {
                            item.onClick(e);
                          } else {
                            setIsMenuOpen(false);
                          }
                        }}
                        className="block text-blue-900 hover:text-yellow-500 transition-colors font-medium text-base py-2 px-3 rounded-lg hover:bg-blue-50"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  <div className="pt-2 flex flex-col space-y-2">
                    <Link
                      to="/login"
                      className="block w-full text-center text-blue-900 hover:text-yellow-500 transition-all duration-300 font-medium py-2 rounded-lg border border-blue-200 hover:border-yellow-300 hover:bg-blue-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t("header.login")}
                    </Link>
                    <Link
                      to="/signup"
                      className="block w-full text-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 py-2 rounded-lg font-semibold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-400/50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t("header.signup")}
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </nav>
        </header>
      </div>

      {/* Add extra div with animation to prevent content jumping when menu opens */}
      {isMenuOpen && <div className="h-screen w-full" />}
    </>
  );
}

export default Header;
