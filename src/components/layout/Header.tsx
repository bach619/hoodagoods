import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import SearchBar from '../ui/SearchBar';
import MainNavigation from '../navigation/MainNavigation';
import { CATEGORIES } from '../../data/categories';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchVisible(false);
  }, [location]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo - Using Oswald font for firm character */}
          <Link to="/" className="group">
            <span className="font-oswald text-4xl font-bold text-primary-600 tracking-tight hover:text-primary-700 transition-colors duration-300 transform hover:scale-105 uppercase">
              Hoodagoods
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <MainNavigation />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchVisible(!isSearchVisible)}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 hover:scale-110 group"
              aria-label="Search"
            >
              <Search className="h-5 w-5 text-gray-700 transition-colors duration-300" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 hover:scale-110 md:hidden group"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-gray-700 transition-transform duration-300" />
              ) : (
                <Menu className="h-5 w-5 text-gray-700 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchVisible && (
          <div className="mt-6 animate-fade-in">
            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-lg">
              <SearchBar onClose={() => setIsSearchVisible(false)} />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="mt-6 py-6 bg-white rounded-xl border border-gray-200 shadow-lg animate-fade-in md:hidden">
            <div className="px-6">
              <div className="flex flex-col space-y-4">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                >
                  Home
                </Link>
                
                <div className="space-y-3">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Categories
                  </p>
                  <div className="pl-4 space-y-3">
                    {CATEGORIES.map((category) => (
                      <Link
                        key={category.slug}
                        to={`/category/${category.slug}`}
                        className="text-gray-700 hover:text-primary-600 block transition-colors"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <Link
                  to="/compare"
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                >
                  Compare
                </Link>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;