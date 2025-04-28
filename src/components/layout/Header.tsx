import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../common/Logo';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white bg-opacity-90 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center z-10">
          <Logo />
          <span className={`ml-2 font-display font-bold text-xl ${scrolled ? 'text-primary-700' : 'text-white'}`}>
            Konkfinity
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-medium transition-colors ${
                location.pathname === item.path
                  ? scrolled ? 'text-primary-600' : 'text-white font-semibold'
                  : scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white/80 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-full font-medium transition-all transform hover:scale-105"
          >
            Get in Touch
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-10 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={24} className={scrolled ? 'text-gray-800' : 'text-white'} />
          ) : (
            <Menu size={24} className={scrolled ? 'text-gray-800' : 'text-white'} />
          )}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-primary-900 bg-opacity-95 backdrop-blur-md md:hidden flex flex-col justify-center items-center z-0"
          >
            <nav className="flex flex-col items-center space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-xl font-medium ${
                    location.pathname === item.path
                      ? 'text-white font-semibold'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="mt-4 bg-white text-primary-700 px-6 py-3 rounded-full font-medium text-lg transition-all transform hover:scale-105"
              >
                Get in Touch
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;