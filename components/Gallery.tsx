import React from 'react';
import { Star } from 'lucide-react';

const galleryImages = [
  {
    url: '/images/commercial-cleanout.jpg',
    alt: 'Commercial cleanout service for offices and businesses',
    label: 'Commercial Cleanout',
  },
  {
    url: '/images/office-cleanout.jpg',
    alt: 'Office cleanout and furniture removal service',
    label: 'Office Cleanout',
  },
  {
    url: '/images/furniture-removal.jpg',
    alt: 'Residential furniture removal service',
    label: 'Furniture Removal',
  },
  {
    url: '/images/cardboard-recycling.jpg',
    alt: 'Cardboard removal and recycling service',
    label: 'Cardboard Recycling',
  },
  
  {
    url: '/images/electronics-appliance-removal.jpg',
    alt: 'Electronics and appliance removal service',
    label: 'Electronics & Appliance Removal',
  },
  {
    url: '/images/dumpster-area-cleanup.jpg',
   alt: 'Dumpster area cleanup service removing trash and furniture around dumpsters for apartments and businesses',
label: 'Dumpster Area Cleanup',
  },
];

const testimonials = [
  {
    name: 'Sarah Mitchell',
    location: 'Denver, CO',
    rating: 5,
    text: 'Echo Swift helped us donate our furniture during our move. They were professional and made sure everything went to good use. Highly recommend!'
  },
  {
    name: 'James Rodriguez',
    location: 'Aurora, CO',
    rating: 5,
    text: 'Great donation service. They picked up our office furniture and handled everything responsibly. Glad to know it was reused instead of thrown away.'
  },
  {
    name: 'Emily Chen',
    location: 'Lakewood, CO',
    rating: 5,
    text: 'Excellent waste management service. They prioritized donation and recycling for our estate clean-out. Very satisfied with their approach.'
  }
];

export const Gallery: React.FC = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Image Gallery */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 block">
              Our Work
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              See What We Do
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[3/2] overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

<div className="absolute bottom-0 left-0 right-0 p-4 text-white">
  <span className="text-sm md:text-base font-semibold">
    {image.label}
  </span>
</div> 
</div>
              
       
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h3 className="text-3xl font-black text-gray-900 text-center mb-12">What our customers say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-100 hover:border-gray-900 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-emerald-500 text-emerald-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t-2 border-gray-200 pt-4">
                  <p className="font-black text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
