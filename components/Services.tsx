import React from 'react';


export const Services: React.FC = () => {

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
  

  <div>
    <span className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 block">
      What We Do
    </span>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="border rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-2">Junk Removal</h3>
        <p className="text-gray-600">Fast removal for homes and businesses.</p>
      </div>

      <div className="border rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-2">Cleanouts</h3>
        <p className="text-gray-600">Move-out and property cleanouts.</p>
      </div>

      <div className="border rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-2">Furniture & Applainces Removal</h3>
        <p className="text-gray-600">
  Couches, mattresses, refrigerators, treadmills, and other bulky household items.
</p>
      </div>
      <div className="border rounded-2xl p-6">
  <h3 className="text-xl font-semibold mb-2">Cardboard Recycling</h3>
  <p className="text-gray-600">
    Bulk cardboard removal and eco-friendly recycling for homes and businesses.
  </p>
</div>
    </div>
  </div>
          <div>
    <span className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 block">
      Corporate Clients
    </span>
    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
      Trusted Support for Commercial Properties
    </h2>
    <p className="text-gray-600 text-lg max-w-3xl">
      We support property managers, apartments, offices, and businesses with reliable junk removal and cleanout services.
    </p>
        <div className="flex flex-wrap gap-4 mt-6 text-sm text-gray-500">
  <span>Greystar</span>
  <span>Property Management</span>
  <span>Apartment Communities</span>
  <span>Retail & Offices</span>
  <span>Nonprofit Organizations</span>
</div>    
  </div>

  <div>
    <span className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 block">
      Community Support Program
    </span>

   <p className="text-gray-700 text-lg max-w-4xl">
  We reduce landfill waste through reuse, recycling, and responsible handling of materials.
  <br /><br />
  Through our community support program, we provide sanitized mattresses weekly and offer access to free, usable furniture for individuals and nonprofit organizations.
</p>
  </div>
</div>
        </div>
</section>
    );
};
       
    

       
