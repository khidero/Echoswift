import React from 'react';

const cities = [
  "Arvada","Aurora","Bennett","Bow Mar","Brighton","Broomfield","Castle Pines","Castle Rock",
  "Centennial","Cherry Hills Village","Colorado Springs","Columbine","Columbine Valley",
  "Commerce City","Dacono","Denver","Eastlake","Edgewater","Englewood","Erie",
  "Federal Heights","Firestone","Fort Lupton","Frederick","Glendale","Golden",
  "Greenwood Village","Henderson","Highlands Ranch","Hudson","Ken Caryl","Lafayette",
  "Lakeside","Lakewood","Larkspur","Littleton","Lone Tree","Longmont","Louisville",
  "Louviers","Monument","Morrison","Mountain View","Niwot","Northglenn","Palmer Lake",
  "Parker","Roxborough Park","Sedalia","Sheridan","Superior","Thornton","Watkins",
  "Westminster","Wheat Ridge"
];

const counties = [
  "Adams County","Arapahoe County","Boulder County","Denver County",
  "Douglas County","El Paso County","Jefferson County","Weld County"
];

export function ServiceAreasPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 pt-32 md:pt-28">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-6 text-center">
          Service Areas
        </h1>

        <p className="text-lg text-gray-600 text-center mb-10">
          We provide same-day junk removal and hauling services across Denver Metro and surrounding areas.
        </p>

        {/* Cities */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Cities We Serve</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {cities.map((city, index) => (
              <div key={index} className="p-3 border rounded-lg text-sm">
                {city}
              </div>
            ))}
          </div>
        </div>

        {/* Counties */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Counties We Cover</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {counties.map((county, index) => (
              <div key={index} className="p-3 border rounded-lg text-sm">
                {county}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10 p-6 border rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-3">
            Not sure if we cover your area?
          </h3>

          <p className="text-gray-600 mb-4">
            Contact us for quick confirmation and same-day availability.
          </p>

          <div className="flex flex-col md:flex-row gap-3 justify-center">
            <a
              href="tel:3036672706"
              className="bg-black text-white px-6 py-3 rounded-lg"
            >
              Call 303-667-2706
            </a>

            <a
              href="mailto:sales@alnoumanfads.com"
              className="border px-6 py-3 rounded-lg"
            >
              Email Us
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
