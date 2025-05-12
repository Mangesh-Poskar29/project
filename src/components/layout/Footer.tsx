import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import Logo from '../common/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-primary-900 to-secondary-900 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Logo className="w-10 h-10" />
              <span className="ml-2 font-display font-bold text-xl">Konkfinity</span>
            </div>
            <p className="text-gray-300 mt-4 max-w-xs">
              Innovative software solutions rooted in the natural beauty of Konkan, delivering cutting-edge technology with a local touch.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-secondary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary-400 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Custom Software Development</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Mobile App Development</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Digital Transformation</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0 text-secondary-400" />
                <span className="text-gray-300">Konkfinity Tech Hub, Guhagar, Ratnagiri, Maharashtra, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 flex-shrink-0 text-secondary-400" />
                <span className="text-gray-300">+91 7774966707 <br/>+91 9673414080</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 flex-shrink-0 text-secondary-400" />
                <span className="text-gray-300">konkfinity@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Konkfinity. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;