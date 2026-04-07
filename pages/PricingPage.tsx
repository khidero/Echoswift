import React from 'react';

export function PricingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-center">Homeowner Pricing</h1>

        <p className="text-xl text-gray-600 mb-10 text-center">
          Upfront residential pricing based on item type, volume, and access. These prices apply to homeowner and small household pickups.
        </p>

        <div className="space-y-6">
          <div className="p-6 border rounded-xl shadow">
            <h2 className="text-2xl font-semibold">Single Item Pickup</h2>
            <p className="text-lg mt-2">Starting at $65</p>
            <p className="text-gray-600 mt-2">Best for one item only.</p>
          </div>

          <div className="p-6 border rounded-xl shadow">
            <h2 className="text-2xl font-semibold">Small Pickup</h2>
            <p className="text-lg mt-2">1–5 items — $75</p>
            <p className="text-gray-600 mt-2">Good for small household pickups.</p>
          </div>

          <div className="p-6 border rounded-xl shadow">
            <h2 className="text-2xl font-semibold">Special Item Pickup</h2>
            <p className="text-lg mt-2">Mattress — $108</p>
            <p className="text-lg">Box Spring — $59</p>
          </div>

          <div className="p-6 border rounded-xl shadow">
            <h2 className="text-2xl font-semibold">Large Loads</h2>
            <p className="text-lg mt-2">Free On-Site Estimate</p>
            <p className="text-gray-600 mt-2">Best for heavy, bulky, or large-volume residential jobs.</p>
          </div>

          <div className="p-6 border rounded-xl shadow">
            <h2 className="text-2xl font-semibold">Truck Load Pricing</h2>
            <p className="text-lg mt-2">Half Load — $375</p>
            <p className="text-lg">Full Load — $750</p>
          </div>

          <div className="p-6 border rounded-xl shadow bg-gray-50">
            <h2 className="text-2xl font-semibold">Truck Capacity</h2>
            <p className="text-lg mt-2">Our box trucks hold up to 33 cubic yards.</p>
          </div>
        </div>

        <div className="mt-14 p-8 border rounded-xl shadow bg-gray-50">
          <h2 className="text-3xl font-bold mb-4">Business, Property & Retail Pricing</h2>
          <p className="text-lg text-gray-700 mb-4">
            Commercial pricing is quoted separately based on cubic yards, placement, labor time, access, and material type.
          </p>
          <p className="text-gray-600 mb-4">
            This applies to offices, retail stores, property managers, apartment turnovers, recurring pickups, and larger cleanout projects.
          </p>

          <div className="grid md:grid-cols-2 gap-3 text-gray-700">
            <div>• Volume / cubic yards</div>
            <div>• Placement and accessibility</div>
            <div>• Labor hours and loading conditions</div>
            <div>• Material and item type</div>
            <div>• Scheduled or recurring pickups</div>
            <div>• Office, retail, and property cleanouts</div>
          </div>

          <p className="text-gray-700 mt-6">
            For business, retail, office, and property-manager pricing, please request a custom quote.
          </p>
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">
            For more details and exact pricing, click Get a Quote.
          </p>

          <a
            href="https://l-105607.square.site"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </div>
  );
}
