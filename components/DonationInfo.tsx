import React from 'react';
import { CheckCircle2, AlertCircle, Heart, Sofa, Home, Tv, Smartphone } from 'lucide-react';

export const DonationInfo: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Left - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
              <Heart size={18} className="text-gray-700" />
              <span className="text-sm font-bold text-gray-700">Community Impact</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Donation Information
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We accept and manage donated items with a focus on reuse and community benefit
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-black text-gray-900 mb-1">Quality Standards</h3>
                  <p className="text-gray-600 text-sm">Items evaluated for condition to ensure maximum reuse potential</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-black text-gray-900 mb-1">Scheduled Pickup</h3>
                  <p className="text-gray-600 text-sm">Convenient pickup based on item condition and your location</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-black text-gray-900 mb-1">Responsible Management</h3>
                  <p className="text-gray-600 text-sm">Items prioritized for donation, reuse, recycling, or proper disposal</p>
                </div>
              </div>
            </div>

            <a 
              href="#contact"
              className="inline-block px-8 py-4 text-base font-bold bg-gray-900 text-white hover:bg-gray-800 transition-colors rounded-lg"
            >
              Schedule a Donation Pickup
            </a>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=600&fit=crop&q=80" 
                alt="Donation boxes being prepared for community distribution" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Heart size={24} className="text-white" />
                  <span className="text-2xl font-black">Community First</span>
                </div>
                <p className="text-sm text-gray-200">Making a positive impact through responsible donation</p>
              </div>
            </div>
          </div>

        </div>

        {/* Acceptable Items Grid */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-black text-gray-900 mb-6 text-center">What We Accept</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-3 shadow-sm">
                <Sofa size={28} className="text-gray-700" />
              </div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Furniture</h4>
              <p className="text-xs text-gray-600">Household & office</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-3 shadow-sm">
                <Home size={28} className="text-gray-700" />
              </div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Household Goods</h4>
              <p className="text-xs text-gray-600">Various items</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-3 shadow-sm">
                <Tv size={28} className="text-gray-700" />
              </div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Appliances</h4>
              <p className="text-xs text-gray-600">Working condition</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-3 shadow-sm">
                <Smartphone size={28} className="text-gray-700" />
              </div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Electronics</h4>
              <p className="text-xs text-gray-600">Approved items</p>
            </div>
          </div>

          {/* Terms Notice */}
          <div className="mt-8 p-4 bg-white rounded-lg border-l-4 border-gray-900">
            <div className="flex items-start gap-3">
              <AlertCircle size={20} className="text-gray-700 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-gray-700">
                  <span className="font-bold text-gray-900">Important:</span> Once accepted and collected, items become the property of Echo Swift and will be prioritized for donation, reuse, recycling, or disposal.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
