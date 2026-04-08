import { useState } from 'react';

export function PricingPage() {
 const items = [
  { name: "Mattress" },
  { name: "Box Spring" },
  { name: "Couch / Loveseat" },
  { name: "Recliner" },
  { name: "Dresser" },
  { name: "Desk" },
  { name: "Sectional" },
  { name: "Bag of Junk" }
];
 const [selectedCategory, setSelectedCategory] = useState(null);
  const [cart, setCart] = useState([]);
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Junk Removal Pricing
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Fast, upfront homeowner pricing based on item type, volume, and access.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">
  Most Popular Items
</h2>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  {[
    "Mattress",
    "Box Spring",
    "Couch / Loveseat",
    "Recliner",
    "Dresser",
    "Wahser/Dryer",
    "Sectional",
    "Refrigerator"
 {items.map((item) => (
    <button
     key={item.name}
      onClick={() => setSelectedCategory(item)}
      className="border p-4 rounded-lg hover:bg-gray-100"
    >
     {item.name}
    </button>
  ))}
</div>

          <div className="mt-4 space-y-2">
            <p className="text-emerald-700 font-semibold">
              Same-Day Junk Removal Available • Call or Text for Immediate Service
            </p>
            <p className="text-gray-700">
              ✅ All prices include labor, transportation, and disposal fees
            </p>
            <p className="text-gray-700">
              ✅ No hidden charges — ever
            </p>
          </div>

          <div className="mt-6">
            <a
              href="tel:3036672706"
              className="inline-block px-8 py-4 rounded-xl bg-black text-white font-bold text-lg hover:bg-gray-800 transition-colors"
            >
              📞 Call Now: 303-667-2706
            </a>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl sm:text-3xl font-bold">Homeowner Pricing</h2>
            <span className="hidden sm:inline-block text-sm font-semibold px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              Residential Pricing
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <div className="p-6 border rounded-2xl shadow-sm bg-white">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold">Single Item Pickup</h3>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                  Popular
                </span>
              </div>
              <p className="text-3xl font-bold mb-2">Starting at $65</p>
              <p className="text-gray-600">
                Perfect for one item such as a couch, appliance, dresser, or similar pickup.
              </p>
            </div>

            <div className="p-6 border rounded-2xl shadow-sm bg-white">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold">Small Pickup</h3>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700">
                  1–5 Items
                </span>
              </div>
              <p className="text-3xl font-bold mb-2">$75</p>
              <p className="text-gray-600">
                Great for small household cleanups and light furniture removal.
              </p>
            </div>

            <div className="p-6 border rounded-2xl shadow-sm bg-white">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold">Special Items</h3>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                  Set Pricing
                </span>
              </div>
              <div className="space-y-2 text-lg">
                <p>
                  <span className="font-medium">Mattress</span> — $108
                </p>
                <p>
                  <span className="font-medium">Box Spring</span> — $59
                </p>
              </div>
              <p className="text-gray-600 mt-3">
                Clear pricing for common bulky items.
              </p>
            </div>

            <div className="p-6 border rounded-2xl shadow-sm bg-white">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold">Large Loads</h3>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-50 text-amber-700">
                  Custom
                </span>
              </div>
              <p className="text-lg font-semibold mb-2">Custom pricing based on volume</p>
              <p className="text-gray-600">
                Best for larger household jobs, bulky mixed loads, and heavier cleanouts.
              </p>
            </div>

            <div className="p-6 border rounded-2xl shadow-sm bg-white">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold">Truck Pricing</h3>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                  Upfront
                </span>
              </div>
              <div className="space-y-2 text-lg">
                <p>
                  <span className="font-medium">Half Load</span> — $375
                </p>
                <p>
                  <span className="font-medium">Full Load</span> — $750
                </p>
              </div>
              <p className="text-gray-600 mt-3">
                Ideal for full cleanouts, garage loads, and bulk removal.
              </p>
            </div>

            <div className="p-6 border rounded-2xl shadow-sm bg-gray-50 border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold">Truck Capacity</h3>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700">
                  33 Cubic Yards
                </span>
              </div>
              <p className="text-gray-700">
                Our box trucks hold up to 33 cubic yards, making them ideal for bulk junk, furniture, and larger cleanout jobs.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 border rounded-2xl shadow-sm bg-gray-50">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Business, Property & Commercial Services
            </h2>
            <p className="text-gray-700 text-lg">
              Custom pricing available for offices, retail stores, property managers, apartment turnovers, recurring pickups, and larger cleanout projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-5 rounded-xl border">
              <h3 className="text-lg font-semibold mb-3">Pricing Factors</h3>
              <div className="space-y-2 text-gray-700">
                <p>• Volume / cubic yards</p>
                <p>• Placement and accessibility</p>
                <p>• Labor hours and loading conditions</p>
                <p>• Material and item type</p>
                <p>• Scheduled or recurring pickups</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border">
              <h3 className="text-lg font-semibold mb-3">Common Commercial Jobs</h3>
              <div className="space-y-2 text-gray-700">
                <p>• Office cleanouts</p>
                <p>• Retail backroom pickups</p>
                <p>• Property management turnovers</p>
                <p>• Bulk cardboard and packing material removal</p>
                <p>• Same-day business pickups</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-xl border">
            <h3 className="text-xl font-semibold mb-3">Get a Business Quote</h3>
            <p className="text-gray-700 mb-4">
              Need fast pricing? Send pictures for an instant quote or call us directly.
            </p>

            <div className="space-y-3 text-gray-800">
              <div>
                📧{' '}
                <a
                  href="mailto:sales@alnoumanfads.com"
                  className="text-emerald-600 underline font-medium"
                >
                  sales@alnoumanfads.com
                </a>
              </div>

              <div>
                📞{' '}
                <a
                  href="tel:3036672706"
                  className="text-emerald-600 underline font-medium"
                >
                  303-667-2706
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-3">Need Exact Pricing?</h3>
          <p className="text-gray-600 mb-5">
            Get a fast, accurate quote in minutes.
          </p>

          <a
            href="https://l-105607.square.site"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-xl bg-emerald-600 text-white font-semibold text-lg hover:bg-emerald-700 transition-colors"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </div>
  );
}
