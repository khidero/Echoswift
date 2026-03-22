import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Building2, Recycle, Trash, HardHat, Package } from 'lucide-react';

const serviceItems = [
  {
    title: "Donation Services",
    slug: "donation-services",
    icon: Home,
    description: "We accept and manage donated items with a focus on reuse and community benefit. Scheduled pickup available.",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=250&fit=crop&q=80"
  },
  {
    title: "Furniture Donation",
    slug: "furniture-donation",
    icon: Package,
    description: "Household and office furniture in good condition. Items prioritized for donation and reuse.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=250&fit=crop&q=80"
  },
  {
    title: "Appliance Management",
    slug: "appliance-management",
    icon: Recycle,
    description: "Approved appliances and electronics. Responsible recycling and donation when possible.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop&q=80"
  },
  {
    title: "Clean-Out Services",
    slug: "clean-out-services",
    icon: Trash,
    description: "Property clean-outs with donation priority. Estate clearing and move-out services available.",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=400&h=250&fit=crop&q=80"
  },
  {
    title: "Waste Management",
    slug: "waste-management",
    icon: HardHat,
    description: "Professional waste management focused on reducing landfill impact through recycling and reuse.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=250&fit=crop&q=80"
  },
  {
    title: "Commercial Services",
    slug: "commercial-services",
    icon: Building2,
    description: "Office furniture and equipment donation. Minimal disruption to your business operations.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop&q=80"
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
                Donation & Waste Management
              </h2>
            </div>
            <div>
              <p className="text-gray-600 text-lg">
                Professional services focused on donation, reuse, and responsible waste management across Denver Metro.
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
