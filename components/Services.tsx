import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Building2, Recycle, Trash, HardHat, Package } from 'lucide-react';

const serviceItems = [
  {
    title: "Junk Removal",
    slug: "junk-removal",
    icon: Trash,
    description: "Fast junk removal for homes and businesses across Denver Metro.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=250&fit=crop&q=80"
  },
  {
    title: "Cleanout Services",
    slug: "cleanout-services",
    icon: HardHat,
    description: "Garage, storage, office, and move-out cleanouts.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=250&fit=crop&q=80"
  },
  {
    title: "Furniture Removal",
    slug: "furniture-removal",
    icon: Package,
    description: "Couches, mattresses, desks, and bulk furniture pickup.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=250&fit=crop&q=80"
  },
  {
    title: "Commercial Junk Removal",
    slug: "commercial-junk-removal",
    icon: Building2,
    description: "Retail, office, and property cleanout services.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop&q=80"
  },
  {
    title: "Property & Unit Cleanouts",
    slug: "property-cleanouts",
    icon: Home,
    description: "In-unit trash-outs and turnover cleanups.",
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=400&h=250&fit=crop&q=80"
  },
  {
    title: "Donation Pickup",
    slug: "donation-pickup",
    icon: Package,
    description: "Reusable furniture and item pickup when eligible.",
    image: "https://images.unsplash.com/photo-1593113598332-cd59a93c6132?w=400&h=250&fit=crop&q=80"
  }
];

export const Services: React.FC = () => {

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <span className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 block">
            Our Services
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
                Junk Removal & Cleanout Services
              </h2>
            </div>
            <div>
              <p className="text-gray-600 text-lg">
               Professional junk removal services for homes, apartments, offices, retail stores, and commercial properties across Denver Metro. Fast, reliable, and hassle-free cleanouts.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceItems.map((item, index) => (
            <Link
              key={index}
              to={`/services/${item.slug}`}
              className="group relative bg-gray-50 hover:bg-gray-900 transition-all duration-300 block overflow-hidden rounded-lg"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-900 group-hover:bg-white flex items-center justify-center flex-shrink-0 transition-colors rounded-lg">
                    <item.icon size={22} className="text-white group-hover:text-gray-900 transition-colors" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-black text-gray-900 group-hover:text-white mb-2 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed text-sm transition-colors">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
