import React from 'react';
import { MapPin } from 'lucide-react';

const cities = [
  'Denver', 'Aurora', 'Lakewood', 'Arvada', 'Westminster',
  'Thornton', 'Centennial', 'Highlands Ranch', 'Littleton', 'Englewood',
  'Commerce City', 'Parker', 'Broomfield', 'Castle Rock', 'Lone Tree',
  'Wheat Ridge', 'Northglenn', 'Golden', 'Louisville', 'Superior',
  'Brighton', 'Greenwood Village', 'Sheridan', 'Edgewater', 'Morrison',
  'Erie', 'Lafayette', 'Frederick', 'Firestone', 'Dacono'
];

export const ServiceCities: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1619856699906-09e1f58c98b1?w=800&h=600&fit=crop&q=80"
                alt="Denver Metro Service Area"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={24} className="text-white" />
                  <span className="text-2xl font-black">50-Mile Radius</span>
                </div>
                <p className="text-sm text-gray-200">Covering the entire Denver metro area</p>
              </div>
            </div>
          </div>

          {/* Right side - Cities list */}
          <div className="order-1 lg:order-2">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Denver & Surrounding Areas We Serve
              </h2>
              <p className="text-lg text-gray-600">
                Professional junk removal services across Denver and 30+ surrounding cities. Fast, reliable, same-day service available.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {cities.map((city, index) => (
                <div 
                  key={index}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-900 hover:text-white text-gray-700 rounded-lg text-sm font-medium transition-all cursor-default"
                >
                  {city}
                </div>
              ))}
            </div>

            <div className="p-4 bg-gray-100 rounded-lg border-l-4 border-gray-900">
              <p className="text-sm text-gray-700">
                <span className="font-bold text-gray-900">Don't see your city?</span> We may still serve your area. 
                <a href="#contact" className="text-gray-900 font-semibold hover:underline ml-1">
                  Contact us to confirm
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
