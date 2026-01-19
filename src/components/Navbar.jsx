import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ activeSection, scrollToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    scrollToSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('home')}>
            <img 
              src="/logo.png" 
              alt="Anantegrity Exports Logo" 
              className="h-10 w-auto"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="hidden h-10 w-10 bg-gradient-to-br from-emerald-700 to-orange-500 rounded items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <h1 className="text-2xl font-bold text-emerald-700">Anantegrity Exports</h1>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['home', 'products', 'about', 'blog', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`capitalize ${activeSection === section ? 'text-emerald-700 font-semibold' : 'text-gray-700 hover:text-emerald-600'} transition-colors`}
              >
                {section}
              </button>
            ))}
          </div>

          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['home', 'products', 'about', 'blog', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`block w-full text-left px-3 py-2 capitalize ${activeSection === section ? 'bg-emerald-50 text-emerald-700 font-semibold' : 'text-gray-700'}`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
