import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Car, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-dark-bg border-b border-dark-border relative z-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-red-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-orange-primary/20 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Car className="h-8 w-8 text-orange-primary" />
              <span className="ml-2 text-xl font-bold text-white">AutoMaňo</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white">Domov</Link>
            <Link to="/services" className="text-gray-300 hover:text-white">Služby</Link>
            <Link to="/gallery" className="text-gray-300 hover:text-white">Galéria</Link>
            <Link to="/faq" className="text-gray-300 hover:text-white">FAQ</Link>
            <a href="tel:+421908598198" className="btn-primary flex items-center">
              <Phone className="h-5 w-5 mr-1" />
              <span>Kontakt</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-dark-card rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Domov
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-dark-card rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Služby
              </Link>
              <Link
                to="/gallery"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-dark-card rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Galéria
              </Link>
              <Link
                to="/faq"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-dark-card rounded-md"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <a
                href="tel:+421908598198"
                className="block px-3 py-2 text-orange-primary hover:text-orange-hover"
                onClick={() => setIsOpen(false)}
              >
                Kontakt
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;