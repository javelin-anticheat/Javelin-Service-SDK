import React from 'react';
import { Shield, Mail, Phone, MapPin, Twitter, Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-red-900/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-red-400 mr-3" />
              <span className="text-2xl font-bold text-white">EA Javelin</span>
            </div>
            <p className="text-gray-400 mb-6">
              Leading the future of fair play with cutting-edge anticheat technology. 
              Protecting millions of players worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-red-400 hover:bg-red-900/20 transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-red-400 hover:bg-red-900/20 transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-red-400 hover:bg-red-900/20 transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">Real-Time Protection</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">AI Detection</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">Behavioral Analysis</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">Cloud Infrastructure</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">Partners</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-3 text-red-400" />
                contact@javelin.ea.com
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-3 text-red-400" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-3 text-red-400" />
                San Francisco, CA
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-red-900/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2024 EA Javelin Anticheat. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;