import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center">
                <span className="text-gray-900 font-black text-xl tracking-tighter">ES</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black leading-none tracking-tight">Echo Swift</span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="h-px w-3 bg-gray-500"></div>
                  <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-gray-500">Junk Removal</span>
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Professional waste management and donation services focused on reducing landfill impact.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Donation Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Furniture Donation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Waste Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Clean-Out Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Commercial Services</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Service Areas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-gray-500 mt-1 flex-shrink-0" />
                <span>Denver, CO & Surrounding Areas</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-gray-500 mt-1 flex-shrink-0" />
                <span>(303) 667-2706</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-gray-500 mt-1 flex-shrink-0" />
                <span>Sales@alnoumanfads.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {currentYear} Echo Swift Junk Removal. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
