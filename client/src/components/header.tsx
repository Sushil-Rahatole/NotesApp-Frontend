import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/", icon: <FaHome /> },
    { name: "About Us", href: "/about", icon: <FaInfoCircle /> },
    { name: "Contact Us", href: "/contact", icon: <FaEnvelope /> },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="relative z-50">
      <div className="bg-gradient-to-r from-blue-900 via-pink-900 to-orange-900 border-b border-white/20 shadow-xl rounded-b-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand Removed */}
          <div />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-xl font-semibold transition-all duration-200
                  hover:scale-105 hover:shadow-lg hover:bg-white/10
                  ${isActive ? "bg-gradient-to-r from-pink-400 to-blue-400 text-white shadow-lg scale-105" : "text-white"}
                  `
                }
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-pink-400 rounded"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Slide in from right */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-br from-pink-500 via-orange-400 to-blue-500 text-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ borderTopLeftRadius: "2rem", borderBottomLeftRadius: "2rem" }}
      >
        <div className="flex justify-end p-4">
          <button
            className="p-2 focus:outline-none focus:ring-2 focus:ring-white rounded"
            onClick={toggleMobileMenu}
            aria-label="Close mobile menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col space-y-6 px-6 py-8">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all duration-200
                hover:bg-white/20 hover:scale-105
                ${isActive ? "bg-white/30 text-white shadow-lg scale-105" : "text-white"}
                `
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>
      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={toggleMobileMenu}
        />
      )}
    </header>
  );
}
