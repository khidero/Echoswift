import React from 'react';
import { Phone, Calendar, CheckCircle2 } from 'lucide-react';

const steps= [
  {
    icon: Phone,
    title: "View Available Items",
    description: "Available items can be viewed on our Facebook page before submitting a request through our website."
  },
  {
    icon: Calendar,
    title: "Book Online",
    description: "All free items must be claimed by submitting an online booking request through our website."
  },
  {
    icon: CheckCircle2,
    title: "Arrival Instructions",
    description: "Upon arrival, follow the warehouse check-in instructions. Staff will guide you to the correct pickup and loading area."
  }
];

export const Process: React.FC = () => {
  return (
 <section className="py-10 md:py-14 lg:py-16 mt-2 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4 tracking-tight">
            How It Works
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-200"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  {/* Icon circle */}
                  <div className="relative z-10 w-24 h-24 bg-white border-4 border-gray-500 rounded-full flex items-center justify-center mb-6">
                    <step.icon size={36} className="text-gray-500" strokeWidth={2.5} />
                  </div>
                  
                  {/* Step number */}
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-2 w-8 h-8 bg-gray-500 text-white rounded-full flex items-center justify-center font-black text-sm z-20">
                    {index + 1}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-black text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
