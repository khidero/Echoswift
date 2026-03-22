import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export const ServiceArea: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=1200&h=800&fit=crop&q=80"
              alt="Eco-friendly recycling and waste management"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-900/90"></div>
          </div>

          <div className="relative z-10 py-20 px-8 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4 block">
                  Get Started
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  Ready to Make an Impact?
                </h2>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Schedule your donation pickup today and help us reduce landfill waste while supporting the Denver community.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-gray-900" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white mb-1">Service Area</div>
                      <div className="text-sm text-gray-400">Denver Metro</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white flex items-center justify-center flex-shrink-0">
                      <Clock size={20} className="text-gray-900" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white mb-1">Availability</div>
                      <div className="text-sm text-gray-400">Same-Day Pickup</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <a 
                  href="tel:+17205551234"
                  className="group flex items-center gap-4 bg-white hover:bg-gray-900 p-6 transition-all duration-300 border-2 border-transparent hover:border-white"
                >
                  <div className="w-12 h-12 bg-gray-900 group-hover:bg-white flex items-center justify-center flex-shrink-0 transition-colors">
                    <Phone size={24} className="text-white group-hover:text-gray-900 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-gray-500 group-hover:text-gray-400 mb-1 transition-colors">Call Us Now</div>
                    <div className="text-xl font-black text-gray-900 group-hover:text-white transition-colors">(720) 555-1234</div>
                  </div>
                </a>

                <a 
                  href="mailto:info@echoswift.com"
                  className="group flex items-center gap-4 bg-white hover:bg-gray-900 p-6 transition-all duration-300 border-2 border-transparent hover:border-white"
                >
                  <div className="w-12 h-12 bg-gray-900 group-hover:bg-white flex items-center justify-center flex-shrink-0 transition-colors">
                    <Mail size={24} className="text-white group-hover:text-gray-900 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-gray-500 group-hover:text-gray-400 mb-1 transition-colors">Email Us</div>
                    <div className="text-xl font-black text-gray-900 group-hover:text-white transition-colors">info@echoswift.com</div>
                  </div>
                </a>

                <div className="pt-4">
                  <p className="text-sm text-gray-400">
                    Monday-Saturday: 8am-6pm • Sunday: Closed
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
