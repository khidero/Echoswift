import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { ServiceCities } from './components/ServiceCities';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { ServicePage } from './pages/ServicePage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <section className="bg-white py-6 border-b">
  <div className="max-w-6xl mx-auto px-4">
    
    <div className="flex flex-wrap justify-center gap-8 md:gap-10 text-base md:text-lg font-semibold text-gray-800">
      
      <span className="bg-gray-100 px-4 py-2 rounded-full">✔ Licensed & Insured</span>
<span className="bg-green-50 text-green-700 px-4 py-2 rounded-full">🌱 Eco-Friendly Disposal</span>
<span className="bg-gray-100 px-4 py-2 rounded-full">⚡ Same-Day Service</span>
<span className="bg-gray-100 px-4 py-2 rounded-full">📍 Serving Denver Metro</span>
<span className="bg-gray-100 px-4 py-2 rounded-full">🏗️ Sustainability Program in Progress</span>
    
    </div>

  </div>
</section>

      
      <section className="py-16 bg-gray-50">  
  <div className="max-w-6xl mx-auto px-4 text-center">  <h2 className="text-3xl md:text-4xl font-bold mb-4"> 
  Community Impact & Responsible Waste  
</h2>  

<p className="text-gray-600 mb-8">  
  We reduce waste through reuse, recycling, and responsible disposal.  
  Items in good condition are redirected to support local families and community needs.  
</p>  

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">  

  <div className="bg-white p-6 rounded-xl shadow">  
    <h3 className="text-xl font-bold">1,500+ lbs</h3>  
    <p className="text-gray-500">Recycled in 2025</p>  
  </div>  

  <div className="bg-white p-6 rounded-xl shadow">  
    <h3 className="text-xl font-bold">150+ Items</h3>  
    <p className="text-gray-500">Donated to community</p>  
  </div>  

  <div className="bg-white p-6 rounded-xl shadow">  
    <h3 className="text-xl font-bold">14,600+ lbs</h3>  
    <p className="text-gray-500">Properly disposed</p>  
  </div>  

</div>

  </div>  
</section>
      <Services />
      {/* Corporate Clients Section */}
<section className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-2xl font-bold mb-4">
      Corporate Clients
    </h2>

    <p className="text-gray-600 mb-8">
      Serving corporate clients, property managers, and organizations across the Denver Metro area.
    </p>
    {/* update */}
    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700">
      <span>Greystar</span>
      <span>Property Management</span>
      <span>Apartment Communities</span>
      <span>Retail & Offices</span>
      <span>Nonprofit Organizations</span>
    </div>
  </div>
</section>
      <Process />
      <ServiceCities />
      <Gallery />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 selection:bg-emerald-600 selection:text-white">
        <ScrollToTop />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/:serviceSlug" element={<ServicePage />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
