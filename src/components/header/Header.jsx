import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronRight,
  Shield,
  MapPin,
  TrendingUp,
  Users,
  Clock,
  Phone,
  Mail,
  Navigation,
} from "lucide-react";
import { FaTruck } from "react-icons/fa";
import logo2 from "../../img/logo2.png";
import { useNavigate } from "react-router-dom";

const EvoEldLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { path: "/", label: "Home" },
    { path: "/store", label: "Store" },
    { path: "/downloads", label: "Download" },
    { path: "#pricing", label: "Pricing" },
    { path: "/contact", label: "Contact Us" },
  ];

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignIn = () => {
    navigate("/signup");
  };

  return (
    <div className="min-h-screen relative z-[1000]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${logo2})`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header
          className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
            scrollY > 50
              ? "bg-white/90 backdrop-blur-sm shadow-lg"
              : "bg-transparent"
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <a
                href="/"
                className="flex items-center space-x-2 sm:space-x-3 cursor-pointer hover:opacity-80 transition-opacity duration-200"
              >
                <div>
                  <FaTruck
                    className={`h-4 w-4 sm:h-5 sm:w-5 transition-all duration-300 ${
                      scrollY > 50
                        ? "text-gray-900 group-hover:text-yellow-500"
                        : "text-white group-hover:text-yellow-500"
                    } transform group-hover:scale-110`}
                  />
                </div>
                <span
                  className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${
                    scrollY > 50 ? "text-gray-900" : "text-white drop-shadow-lg"
                  }`}
                >
                  Elbrus Elogs
                </span>
              </a>

              {/* Desktop Navigation */}
              <nav className="hidden z-[100000] lg:flex items-center space-x-6 xl:space-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.path}
                    className={`transition-colors duration-200 font-medium text-sm xl:text-base ${
                      scrollY > 50
                        ? "text-gray-700 hover:text-cyan-600"
                        : "text-white hover:text-cyan-200"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Login and Sign In Buttons */}
              <div className="hidden lg:flex items-center space-x-3">
                <button
                  onClick={handleLogin}
                  className={`px-4 xl:px-6 py-2 rounded-lg font-semibold transition-all duration-300 text-sm xl:text-base transform hover:scale-105 shadow-lg ${
                    scrollY > 50
                      ? "bg-cyan-500 hover:bg-cyan-600 text-white hover:shadow-cyan-500/30"
                      : "bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:shadow-white/20"
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={handleSignIn}
                  className={`px-4 xl:px-6 py-2 rounded-lg font-semibold transition-all duration-300 text-sm xl:text-base transform hover:scale-105 ${
                    scrollY > 50
                      ? "bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300 hover:border-cyan-400"
                      : "bg-transparent hover:bg-white/20 text-white border border-white/30 hover:border-white/50"
                  }`}
                >
                  Sign In
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-2 ${
                  scrollY > 50 ? "text-gray-800" : "text-white"
                }`}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="lg:hidden bg-white/90 backdrop-blur-sm border-t border-gray-200">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.label}
                      href={item.path}
                      className="block px-3 py-2 text-gray-700 hover:text-cyan-600 transition-colors duration-200 text-base"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="flex flex-col space-y-3 px-3 py-3">
                    <button
                      onClick={() => {
                        handleLogin();
                        setIsMenuOpen(false);
                      }}
                      className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => {
                        handleSignIn();
                        setIsMenuOpen(false);
                      }}
                      className="bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300 hover:border-cyan-400 px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </header>
      </div>
    </div>
  );
};

export default EvoEldLanding;
