import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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

  const handleLogin = () => navigate("/login");
  const handleSignIn = () => navigate("/signup");

  return (
    <div className="min-h-screen relative font-sans">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${logo2})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrollY > 50
              ? "bg-white/96 backdrop-blur-md shadow-lg"
              : "bg-transparent"
          }`}
        >
          <div className="w-full max-w-none px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center space-x-2 flex-shrink-0">
                <FaTruck
                  className={`h-6 w-6 transition-colors duration-300 ${
                    scrollY > 50 ? "text-cyan-600" : "text-white"
                  }`}
                />
                <span
                  className={`text-xl font-bold tracking-wide transition-colors duration-300 ${
                    scrollY > 50 ? "text-gray-900" : "text-white"
                  }`}
                >
                  Elbrus Elogs
                </span>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.path}
                    className={`relative font-medium text-base transition-colors duration-200 group ${
                      scrollY > 50
                        ? "text-gray-700 hover:text-cyan-600"
                        : "text-white hover:text-cyan-200"
                    }`}
                  >
                    {item.label}
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </nav>

              {/* Desktop Buttons */}
              <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
                <button
                  onClick={handleLogin}
                  className="px-4 py-2 rounded-lg text-base font-semibold bg-cyan-500 hover:bg-cyan-600 text-white shadow-md transition-all duration-200 hover:shadow-lg"
                >
                  Login
                </button>
                <button
                  onClick={handleSignIn}
                  className="px-4 py-2 rounded-lg text-base font-semibold border border-gray-300 hover:border-cyan-400 bg-white text-gray-800 hover:bg-gray-50 transition-all duration-200"
                >
                  Sign In
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-2 rounded-md transition-colors duration-200 ${
                  scrollY > 50 ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/10"
                }`}
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white/98 backdrop-blur-md border-t border-gray-200 shadow-lg">
              <div className="px-4 py-4 space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 transition-all duration-200 text-base font-medium"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-3 space-y-3">
                  <button
                    onClick={() => {
                      handleLogin();
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-200 text-base"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      handleSignIn();
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-white border border-gray-300 hover:border-cyan-400 hover:bg-gray-50 text-gray-800 px-4 py-3 rounded-lg font-semibold transition-colors duration-200 text-base"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          )}
        </header>

        {/* ================= HERO SECTION ================= */}
        <section className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-4xl mx-auto w-full">
            {/* H1 text */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg leading-tight mb-6">
              Advanced Fleet Management Solution
            </h1>

            {/* P text */}
            <p className="text-lg sm:text-xl text-gray-100 leading-relaxed drop-shadow-md max-w-3xl mx-auto mb-8">
              Everything you need to manage your fleet. All in one place. Driver Safety, GPS Tracking, 
              and ELD Compliance. The most easy-to-use ELD device and application.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => navigate("/login")}
                className="w-full sm:w-auto px-8 py-3 rounded-lg font-semibold bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg transition-all duration-200 hover:shadow-xl text-base"
              >
                Get Started
              </button>
              <button 
                onClick={() => navigate("/login")} 
                className="w-full sm:w-auto px-8 py-3 rounded-lg font-semibold border-2 border-white hover:border-cyan-400 bg-white text-gray-800 hover:bg-gray-50 transition-all duration-200 text-base"
              >
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EvoEldLanding;
