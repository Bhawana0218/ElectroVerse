import React from 'react';
import logo from '/src/assets/logo.png';
import { ArrowRight, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black backdrop-blur-md py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        {/* Logo + Title Centered */}
        <div className="text-center mb-12">
          <div className="flex flex-col items-center justify-center space-y-4">
            <img src={logo} alt="ElectroVerse Logo" className="h-14 w-24" />
            <h3 className="text-4xl font-bold bg-linear-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
              ElectroVerse
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              Your trusted partner for all your electronic needs. Quality products, unbeatable prices, and excellent service.
            </p>
          </div>
        </div>

        {/* Footer Grid (3 Columns) */}
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex justify-center md:justify-start items-center">
                  <ArrowRight className="mr-2 h-4 w-4" /> Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex justify-center md:justify-start items-center">
                  <ArrowRight className="mr-2 h-4 w-4" /> Products
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex justify-center md:justify-start items-center">
                  <ArrowRight className="mr-2 h-4 w-4" /> Deals
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex justify-center md:justify-start items-center">
                  <ArrowRight className="mr-2 h-4 w-4" /> About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Customer Service</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex justify-center md:justify-start items-center">
                  <ArrowRight className="mr-2 h-4 w-4" /> Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex justify-center md:justify-start items-center">
                  <ArrowRight className="mr-2 h-4 w-4" /> FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex justify-center md:justify-start items-center">
                  <ArrowRight className="mr-2 h-4 w-4" /> Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex justify-center md:justify-start items-center">
                  <ArrowRight className="mr-2 h-4 w-4" /> Returns & Refunds
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex justify-center md:justify-start items-start">
                <Globe className="mr-2 h-5 w-5 mt-0.5 text-blue-400" />
                <span>123 Tech Street, Haldwani, Uttarakhand</span>
              </li>
              <li className="flex justify-center md:justify-start items-center">
                <span className="mr-2 text-blue-400">📧</span>
                info@electroverse.com
              </li>
              <li className="flex justify-center md:justify-start items-center">
                <span className="mr-2 text-blue-400">📞</span>
                (555) 555-5555
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>&#169; 2025 ElectroVerse. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
