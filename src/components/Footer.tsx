
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-indian-saffron to-indian-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IN</span>
              </div>
              <span className="text-xl font-bold">InNeedIndeed</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Connecting local service providers with consumers across India. 
              Find trusted professionals for all your needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-indian-saffron transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-indian-saffron transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-300 hover:text-indian-saffron transition-colors">
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/gigs" className="text-gray-300 hover:text-indian-saffron transition-colors">
                  Find Services
                </Link>
              </li>
              <li>
                <Link to="/post-job" className="text-gray-300 hover:text-indian-saffron transition-colors">
                  Post Job
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-gray-300 hover:text-indian-saffron transition-colors">
                  Join as Provider
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-indian-saffron transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-gray-300 hover:text-indian-saffron transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-indian-saffron transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-indian-saffron transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-indian-saffron transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 InNeedIndeed. All rights reserved. Made with ❤️ in India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
