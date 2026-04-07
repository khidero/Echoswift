
import React from 'react';

export function PricingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-10">
      <h1 className="text-4xl font-bold mb-6">Pricing</h1>

      <p className="text-lg text-gray-600 mb-10">
        Transparent pricing based on volume, weight, and access.
      </p>

      <div className="space-y-6">
        <div className="p-6 border rounded-xl shadow">
          <h2 className="text-xl font-semibold">Minimum Load</h2>
          <p>$115 – small pickups</p>
        </div>

        <div className="p-6 border rounded-xl shadow">
          <h2 className="text-xl font-semibold">Half Load</h2>
          <p>$150 – $200</p>
        </div>

        <div className="p-6 border rounded-xl shadow">
          <h2 className="text-xl font-semibold">Full Load</h2>
          <p>$200 – $245+</p>
        </div>
      </div>
    </div>
  );
}
