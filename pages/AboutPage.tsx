import React from 'react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 pt-32 md:pt-28">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-6 text-center">
          About ALNOUMAN FADS
        </h1>

        <p className="text-lg text-gray-600 text-center mb-10">
          Reliable same-day junk removal, cleanout, and hauling services across Denver Metro and surrounding areas.
        </p>
        <p className="text-lg text-gray-600 text-center mb-4">
  Since 2021, ALNOUMAN FADS has been delivering fast, reliable junk removal and cleanout services across the Denver Metro area.
</p>

<p className="text-gray-600 text-center mb-10">
  Serving homeowners, businesses, and property managers with same-day availability and dependable service.
</p>

        <div className="space-y-8">

          <div className="p-6 border rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-3">Who We Are</h2>
            <p className="text-gray-700">
              ALNOUMAN FADS is a locally operated junk removal and hauling company serving homeowners,
              businesses, retail stores, and property managers across the Denver Metro area.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-3">What We Do</h2>
            <p className="text-gray-700">
              We remove furniture, mattresses, appliances, cardboard, household junk, office items,
              retail fixtures, and general non-hazardous unwanted items. We provide same-day pickups,
              scheduled cleanouts, and custom solutions for larger jobs.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-3">Who We Serve</h2>
            <p className="text-gray-700">
              Our services are designed for homeowners, apartment turnovers, offices, retail stores,
              contractors, and property managers looking for fast, dependable junk removal with clear communication.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-3">Our Approach</h2>
            <p className="text-gray-700">
              We focus on fast response times, fair upfront pricing, and responsible handling of every load.
              Whenever possible, items are sorted for donation, recycling, or proper disposal.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-3">Why Customers Choose Us</h2>
            <div className="space-y-2 text-gray-700">
              <p>• Same-day service available</p>
              <p>• Clear and upfront pricing</p>
              <p>• Residential and commercial service</p>
              <p>• Responsible disposal and donation whenever possible</p>
              <p>• Local, reliable, and easy to reach</p>
            </div>
          </div>

        </div>

        <div className="text-center mt-12 p-6 border rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-3">
            Need a fast quote?
          </h3>

          <p className="text-gray-600 mb-4">
            Call, text, or email us for same-day availability and pricing.
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
              sales@alnoumanfads.com
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
