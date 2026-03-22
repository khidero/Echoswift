import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, MapPin } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showServicesMega, setShowServicesMega] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Services', path: '/#services', hasMega: true },
    { name: 'About', path: '/#about' },
    { name: 'Contact', path: '/#contact' },
  ];

  const serviceItems = [
    { name: 'Residential Junk Removal', desc: 'Home cleanouts and decluttering', path: '/services/residential' },
    { name: 'Commercial Services', desc: 'Office and retail space clearing', path: '/services/commercial' },
    { name: 'Construction Debris', desc: 'Post-construction cleanup', path: '/services/construction' },
    { name: 'E-Waste & Appliance Recycling', desc: 'Responsible electronics disposal', path: '/services/e-waste' },
  ];

  const handleLinkClick = (path: string) => {
    setIsMenuOpen(false);
    if (path.startsWith('/#')) {
      const hash = path.substring(2);
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
    }
  };

  const handleLogoClick = () => {
    setIsMenuOpen(false);
    navigate('/');
  };

  return (
    <>
      <div className="hidden md:block fixed top-0 left-0 right-0 z-[61] bg-gray-100 py-1.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <div className="flex items-center gap-1.5 text-gray-700">
            <MapPin size={12} className="text-gray-600" />
            <span className="text-[11px] font-bold uppercase tracking-wider">
              Serving Denver & Surrounding Areas
            </span>
          </div>
        </div>
      </div>

      <nav 
        className="fixed top-0 md:top-[28px] left-0 right-0 z-[60] py-4 bg-white shadow-md px-6"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <div 
            className="flex items-center gap-3 cursor-pointer group z-[70]" 
            onClick={handleLogoClick}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-11 h-11 bg-gray-900 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-black text-xl tracking-tighter">ES</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-gray-900 leading-none tracking-tight">Echo Swift</span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="h-px w-3 bg-gray-900"></div>
                  <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-gray-500">Junk Removal</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasMega ? (
                  <div 
                    onMouseEnter={() => setShowServicesMega(true)}
                    onMouseLeave={() => setShowServicesMega(false)}
                  >
                    <button 
                      onClick={() => handleLinkClick(link.path)}
                      className="text-xs font-black uppercase tracking-[0.2em] transition-colors duration-300 bg-transparent border-none cursor-pointer relative group text-gray-900 hover:text-emerald-600 flex items-center gap-1"
                    >
                      {link.name}
                      <ChevronDown size={14} className={`transition-transform duration-300 ${showServicesMega ? 'rotate-180' : ''}`} />
                      <span className="absolute -bottom-2 left-0 w-0 h-1 transition-all duration-300 group-hover:w-full bg-emerald-600"></span>
                    </button>
                    
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[500px] bg-white shadow-2xl border border-gray-200 rounded-xl transition-all duration-300 ${showServicesMega ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
                      <div className="p-6">
                        <div className="grid grid-cols-2 gap-4">
                          {serviceItems.map((item) => (
                            <button
                              key={item.name}
                              onClick={() => {
                                setShowServicesMega(false);
                                handleLinkClick(item.path);
                              }}
                              className="text-left p-4 rounded-lg hover:bg-emerald-50 transition-colors group"
                            >
                              <div className="font-bold text-sm text-gray-900 group-hover:text-emerald-600 mb-1">{item.name}</div>
                              <div className="text-xs text-gray-500">{item.desc}</div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button 
                    onClick={() => handleLinkClick(link.path)}
                    className="text-xs font-black uppercase tracking-[0.2em] transition-colors duration-300 bg-transparent border-none cursor-pointer relative group text-gray-900 hover:text-gray-700"
                  >
                    {link.name}
                    <span className="absolute -bottom-2 left-0 w-0 h-1 transition-all duration-300 group-hover:w-full bg-gray-900"></span>
                  </button>
                )}
              </div>
            ))}
            
            <button 
              onClick={() => handleLinkClick('/#contact')}
              className="px-8 py-3.5 font-bold text-xs uppercase tracking-wider bg-gray-900 text-white hover:bg-gray-800 transition-colors rounded-lg"
            >
              Get A Quote
            </button>
          </div>

          <button 
            className="md:hidden relative z-[70] p-2 focus:outline-none transition-colors duration-300 text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      <div 
        className={`fixed top-[72px] left-0 right-0 bg-white shadow-lg z-[50] transition-all duration-300 ease-out md:hidden ${
          isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        <nav className="px-6 py-6">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.hasMega ? (
                  <div>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full text-center py-3 text-sm font-bold uppercase tracking-wider text-gray-900 hover:text-emerald-600 transition-colors flex items-center justify-center gap-2"
                    >
                      <span>{link.name}</span>
                      <ChevronDown size={14} className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="py-2 space-y-1">
                        {serviceItems.map((item) => (
                          <button
                            key={item.name}
                            onClick={() => {
                              setMobileServicesOpen(false);
                              handleLinkClick(item.path);
                            }}
                            className="w-full text-center py-2 text-xs text-gray-600 hover:text-emerald-600 transition-colors"
                          >
                            {item.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => handleLinkClick(link.path)}
                    className="w-full text-center py-3 text-sm font-bold uppercase tracking-wider text-gray-900 hover:text-emerald-600 transition-colors"
                  >
                    {link.name}
                  </button>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                handleLinkClick('/#contact');
              }}
              className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-bold uppercase tracking-wider hover:from-emerald-600 hover:to-teal-700 transition-colors rounded-lg"
            >
              Get A Quote
            </button>
          </div>
        </nav>
      </div>

      <div 
        className={`fixed inset-0 bg-black/20 z-[45] transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />
    </>
  );
};
