import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  ArrowRight 
} from 'lucide-react';
import { CATEGORIES } from '../../data/categories';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <span className="font-oswald text-3xl font-bold text-primary-600 tracking-tight hover:text-primary-700 transition-colors duration-300 transform hover:scale-105 uppercase">
              Hoodagoods
            </span>
            </div>
            <p className="text-gray-400 mb-4">
              Honest product reviews to help you make informed purchasing decisions. We research, test, and recommend the best products.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {CATEGORIES.map((category) => (
                <li key={category.slug}>
                  <Link to={`/category/${category.slug}`} className="text-gray-400 hover:text-primary-400 transition-colors">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/about#methodology" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Our Review Methodology
                </Link>
              </li>
              <li>
                <Link to="/contact#disclosure" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <Link to="/contact#privacy" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/contact#terms" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest product reviews and exclusive deals.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none text-gray-800"
                required
              />
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 px-4 rounded-r-lg transition-colors"
              >
                <ArrowRight size={20} />
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <div className="mb-3">
            <Link to="/contact#disclosure" className="text-gray-500 hover:text-primary-400 transition-colors">
              Affiliate Disclosure
            </Link>
            <span className="mx-2">•</span>
            <Link to="/contact#privacy" className="text-gray-500 hover:text-primary-400 transition-colors">
              Privacy Policy
            </Link>
            <span className="mx-2">•</span>
            <Link to="/contact#terms" className="text-gray-500 hover:text-primary-400 transition-colors">
              Terms
            </Link>
          </div>
          <p>
            © {currentYear} Hoodagoods. All rights reserved. Created by BobyMihing
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;