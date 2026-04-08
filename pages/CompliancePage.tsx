import React from 'react';

export function CompliancePage() {
  return (
 <div className="min-h-screen bg-white text-gray-900 p-6 pt-32 md:pt-24">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-6 text-center">
          Compliance & Standards
        </h1>

        <p className="text-lg text-gray-600 text-center mb-10">
          ALNOUMAN FADS operates with full compliance, safety standards, and responsible disposal practices across all residential and commercial services.
        </p>

        <div className="space-y-8">

          <div className="p-6 border rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">Licensed & Insured</h2>
            <p className="text-gray-700">
              We maintain active general liability coverage and operate as a registered business in the State of Colorado.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">Responsible Disposal</h2>
            <p className="text-gray-700">
              Items are sorted for proper disposal, recycling, or donation whenever possible. We aim to reduce landfill waste and follow local disposal regulations.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">Mattress Handling</h2>
            <p className="text-gray-700">
             Usable mattresses in clean condition are donated whenever possible. All donated mattresses are inspected and sanitized in accordance with Colorado state guidelines. 
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">Commercial & Property Compliance</h2>
            <p className="text-gray-700">
              We work with property managers, retail stores, and commercial clients under structured service agreements, maintaining consistent service standards and documentation when required.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">Safety & Operations</h2>
            <p className="text-gray-700">
              Our team follows safe lifting, loading, and transport procedures to ensure efficient and damage-free service at every location.
            </p>
          </div>

        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">
            Need documentation or have compliance questions?
          </p>

          <div className="space-y-2">
            <p>📧 operations@alnoumanfads.com</p>
            <p>📞 303-667-2706</p>
          </div>
        </div>

      </div>
    </div>
  );
}
