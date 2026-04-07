import React from 'react';

export function PricingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6">
  <div className="max-w-5xl mx-auto">

    <h1 className="text-4xl font-bold mb-4 text-center">
      Homeowner Pricing
    </h1>

    <p className="text-base text-emerald-700 font-semibold text-center mb-4">
      Same-Day Junk Removal Available • Call or Text for Immediate Service
    </p>

    <div className="text-center mb-6">
      <a
        href="tel:3036672706"
        className="inline-block px-6 py-3 rounded-xl bg-black text-white font-bold text-base"
      >
        📞 Call Now
      </a>
    </div>

    <p className="text-lg text-gray-600 mb-2 text-center">
      Upfront residential pricing based on item type, volume, and access.
    </p>

    <p className="text-sm text-gray-700 mb-6 text-center">
      All prices include labor, transportation, and disposal fees. No hidden charges.
    </p>

    <div className="space-y-4">

      <div className="p-4 border rounded-xl shadow">
        <h2 className="text-lg font-semibold">Single Item Pickup</h2>
        <p className="mt-1">Starting at $65</p>
      </div>

      <div className="p-4 border rounded-xl shadow">
        <h2 className="text-lg font-semibold">Small Pickup</h2>
        <p className="mt-1">1–5 items — $75</p>
      </div>

      <div className="p-4 border rounded-xl shadow">
        <h2 className="text-lg font-semibold">Special Items</h2>
        <p>Mattress — $108</p>
        <p>Box Spring — $59</p>
      </div>

      <div className="p-4 border rounded-xl shadow">
        <h2 className="text-lg font-semibold">Large Loads</h2>
        <p>Free On-Site Estimate</p>
      </div>

      <div className="p-4 border rounded-xl shadow">
        <h2 className="text-lg font-semibold">Truck Pricing</h2>
        <p>Half Load — $375</p>
        <p>Full Load — $750</p>
      </div>

    </div>

    <div className="mt-10 p-5 border rounded-xl bg-gray-50">
      <h2 className="text-xl font-bold mb-3">Business & Commercial</h2>

      <p className="text-sm mb-3">
        Pricing depends on volume, labor, access, and material.
      </p>

      <p className="text-sm mb-4">
        Send pictures for fast quotes:
      </p>

      <div className="space-y-2 text-sm">
        <a href="mailto:sales@alnoumanfads.com" className="block text-emerald-600">
          📧 sales@alnoumanfads.com
        </a>

        <a href="tel:3036672706" className="block text-emerald-600">
          📞 303-667-2706
        </a>
      </div>
    </div>

  </div>
</div>
    );
}
