import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Maurice from "../assets/maurice.svg";
import { RiMenu2Fill, RiCloseLine } from "react-icons/ri";
import { FiArrowUpRight } from "react-icons/fi";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Journals", path: "/journal" },
    { name: "Institutes", path: "/institute" },
    { name: "Geni-Nexus", path: "/archive" },
    { name: "Academy", path: "/academy" },
    { name: "Seminar", path: "/seminar" },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsNavOpen(false);
  }, [location]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-lg" 
        : "bg-white"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={Maurice}
              alt="Logo"
              className="h-24 w-20 md:h-28 md:w-24 lg:h-32 lg:w-28 transition-all duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-[15px] font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/publish">
              <button className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2">
                Publish
                <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-label="Toggle menu"
          >
            {isNavOpen ? (
              <RiCloseLine className="h-6 w-6" />
            ) : (
              <RiMenu2Fill className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ${
          isNavOpen 
            ? "max-h-96 opacity-100 py-4" 
            : "max-h-0 opacity-0 overflow-hidden"
        }`}>
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                }`}
                onClick={() => setIsNavOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="pt-4 space-y-3 border-t border-gray-100">
              <Link to="/publish">
                <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md">
                  Publish Your Work
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;