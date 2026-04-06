import React, { useEffect, useState } from 'react';
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
  const [animatedStats, setAnimatedStats] = useState({
    recycled: 0,
    donated: 0,
    disposed: 0
  });

  useEffect(() => {
    const duration = 1800;
    const steps = 60;
    const intervalTime = duration / steps;

    const targets = {
      recycled: 25,
      donated: 715,
      disposed: 238
    };

    let step = 0;

    const interval = setInterval(() => {
      step++;

      setAnimatedStats({
        recycled: Math.min(Math.round((targets.recycled / steps) * step), targets.recycled),
        donated: Math.min(Math.round((targets.donated / steps) * step), targets.donated),
        disposed: Math.min(Math.round((targets.disposed / steps) * step), targets.disposed)
      });

      if (step >= steps) clearInterval(interval);
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

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

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Community Impact & Responsible Waste
          </h2>

          <p className="text-gray-600 mb-8">
            We reduce waste through reuse, recycling, and responsible disposal.
            Items in good condition are redirected to support local families and community needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold">{animatedStats.recycled}K+ lbs</h3>
              <p className="text-gray-500">Recycled & diverted from landfill</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold">{animatedStats.donated}+ items</h3>
              <p className="text-gray-500">Donated to local communities</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold">{animatedStats.disposed}K+ lbs</h3>
              <p className="text-gray-500">Waste properly disposed</p>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <Process />
      <ServiceCities />
      <Gallery />
      <section className="py-20 text-center bg-gray-50">
  <div className="max-w-3xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-gray-900 mb-4">
      Need Junk Removed Today?
    </h2>
    <p className="text-lg text-gray-600 mb-8">
      Same-day junk removal across Denver Metro. Fast response, professional service, and flexible scheduling.
    </p>
    
     <a
  href="https://l-105607.square.site"
  className="inline-block px-8 py-4 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors"
>
  Get a Quote
</a>
  </div>
</section>

    
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
