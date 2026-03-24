import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { ServiceCities } from './components/ServiceCities';
import { Gallery } from './components/Gallery';
import { ServiceArea } from './components/ServiceArea';
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
      <ServiceArea />
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
