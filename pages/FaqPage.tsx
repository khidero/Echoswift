import React from 'react';

export function FaqPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 pt-32 md:pt-28">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h1>

        <p className="text-lg text-gray-600 text-center mb-10">
          Quick answers about junk removal, scheduling, pricing, and service areas.
        </p>

        <div className="space-y-6">

          <div className="p-6 border rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">What items do you take?</h2>
            <p className="text-gray-700">
              We remove furniture, mattresses, appliances, cardboard, household junk, office items,
              retail fixtures, and general non-hazardous unwanted items. If you have specialty items,
              send pictures first for confirmation.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">How does scheduling work?</h2>
            <p className="text-gray-700">
              You can schedule by phone, text, email, or online quote request. Same-day and next-day
              appointments may be available depending on location, load size, and schedule availability.
              Sending pictures helps us quote and schedule faster.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">Do you offer same-day pickup?</h2>
            <p className="text-gray-700">
              Yes, same-day service is available in many cases. Contact us directly for current availability.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">How does pricing work?</h2>
            <p className="text-gray-700">
              Pricing is based on item type, volume, access, labor time, and disposal requirements.
              All prices include labor, transportation, and disposal fees unless otherwise noted.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">
              Do you work with businesses, retail stores, and property managers?
            </h2>
            <p className="text-gray-700">
              Yes. We provide junk removal and cleanout services for offices, retail locations,
              apartment turnovers, property managers, and other commercial clients.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">What areas do you serve?</h2>
            <p className="text-gray-700">
              We serve Denver and surrounding areas across the metro. If you are unsure whether your
              location is covered, contact us and we will confirm.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">Do you donate or recycle usable items?</h2>
            <p className="text-gray-700">
              Yes, whenever possible. We sort items for donation, recycling, or proper disposal based
              on condition, usability, and local guidelines.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
