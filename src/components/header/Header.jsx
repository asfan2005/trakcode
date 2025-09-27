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
    <div className="min-h-screen relative z-[1000] font-sans">
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
          className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
            scrollY > 50
              ? "bg-white/95 backdrop-blur-sm shadow-md"
              : "bg-transparent"
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <a
                href="/"
                className="flex items-center space-x-2 sm:space-x-3 cursor-pointer hover:opacity-80 transition"
              >
                <FaTruck
                  className={`h-5 w-5 sm:h-6 sm:w-6 transition-all duration-300 ${
                    scrollY > 50
                      ? "text-cyan-600"
                      : "text-white drop-shadow-md"
                  }`}
                />
                <span
                  className={`text-xl sm:text-2xl font-bold tracking-wide transition-colors ${
                    scrollY > 50 ? "text-gray-900" : "text-white drop-shadow-lg"
                  }`}
                >
                  Elbrus Elogs
                </span>
              </a>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.path}
                    className={`relative transition-colors duration-200 font-medium text-base group ${
                      scrollY > 50
                        ? "text-gray-700 hover:text-cyan-600"
                        : "text-white hover:text-cyan-200"
                    }`}
                  >
                    {item.label}
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-cyan-500 transition-all group-hover:w-full"></span>
                  </a>
                ))}
              </nav>

              {/* Desktop Buttons */}
              <div className="hidden lg:flex items-center space-x-4">
                <button
                  onClick={handleLogin}
                  className="px-5 py-2 rounded-lg font-semibold bg-cyan-500 hover:bg-cyan-600 text-white shadow-md transition-transform transform hover:scale-105"
                >
                  Login
                </button>
                <button
                  onClick={handleSignIn}
                  className="px-5 py-2 rounded-lg font-semibold border border-gray-300 hover:border-cyan-400 bg-white text-gray-800 hover:bg-gray-100 transition-transform transform hover:scale-105"
                >
                  Sign In
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-2 rounded-md transition-colors ${
                  scrollY > 50 ? "text-gray-800" : "text-white"
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
            <div className="lg:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-md animate-slideDown">
              <div className="px-4 py-4 space-y-3">
                {navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-gray-700 hover:text-cyan-600 hover:bg-gray-100 transition text-base font-medium"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex flex-col space-y-3">
                  <button
                    onClick={() => {
                      handleLogin();
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      handleSignIn();
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-white border border-gray-300 hover:border-cyan-400 hover:bg-gray-100 text-gray-800 px-6 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          )}
        </header>

        {/* ================= HERO SECTION ================= */}
<section className="relative min-h-screen flex items-center justify-center text-center px-4">
  <div className="max-w-3xl">
    {/* H1 text */}
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
      Advanced Fleet Management Solution
    </h1>

    {/* P text */}
    <p className="mt-6 text-lg sm:text-xl text-gray-100 leading-relaxed drop-shadow-md">
      Everything you need to manage your fleet. All in one place. Driver Safety, GPS Tracking, 
      and ELD Compliance. The most easy-to-use ELD device and application.
    </p>

    {/* CTA Buttons */}
    <div onClick={() => navigate("/login")} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
      <button className="px-6 py-3 rounded-lg font-semibold bg-cyan-500 hover:bg-cyan-600 text-white shadow-md transition-transform transform hover:scale-105">
        Get Started
      </button>
      <button onClick={() => navigate("/login")} className="px-6 py-3 rounded-lg font-semibold border border-gray-300 hover:border-cyan-400 bg-white text-gray-800 hover:bg-gray-100 transition-transform transform hover:scale-105">
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
