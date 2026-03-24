import React from 'react';
import { ArrowRight, ChevronDown, CheckCircle2, Truck, Clock, Shield } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden pt-32 pb-20 md:pb-32">
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7">
            <div className="mb-4 animate-fade-in">
              <span className="text-sm font-semibold text-gray-600">
                Denver Metro Waste Management
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 tracking-tight mb-6 leading-tight animate-slide-up" style={{animationDelay: '0.1s'}}>
              Fast & Reliable Junk Removal in Denver Metro
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-xl leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
              Same-day junk removal, furniture pickup, cleanouts, and hauling services across Denver Metro. Fast, affordable, and reliable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-slide-up" style={{animationDelay: '0.3s'}}>
              <button 
                onClick={scrollToContact}
                className="px-8 py-4 text-base font-bold bg-gray-900 text-white hover:bg-gray-800 transition-colors rounded-lg"
              >
                Get Free Quote
              </button>
              <button 
                onClick={scrollToServices}
                className="px-8 py-4 text-base font-bold border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors rounded-lg"
              >
                View Services
              </button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-600 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-gray-700" />
                <span>Same-Day Service</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-gray-700" />
                <span>Homes & Businesses</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-gray-700" />
                <span>Cleanouts &amp; Furniture Removal</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 animate-fade-in" style={{animationDelay: '0.5s'}}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-lg">
              <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=1000&fit=crop&q=80" alt="Junk removal and cleanout service in Denver" className="w-full h-full object-cover" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-black mb-2">Alnouman FADS</h3>
               <p className="text-sm text-gray-300">Junk Removal &amp; Cleanout Services</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-12 md:bottom-40 left-1/2 transform -translate-x-1/2 text-emerald-300 lg:hidden">
        <ChevronDown size={32} className="animate-bounce" />
      </div>
    </section>
  );
};
