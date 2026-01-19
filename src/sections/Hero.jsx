import React from 'react';

const Hero = ({ scrollToSection }) => {
  return (
    <section 
      id="home" 
      className="pt-16 min-h-screen flex items-center relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/hero-bg.jpg)',
        backgroundColor: '#1a3a2e'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-emerald-900/40 to-black/60"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="text-6xl md:text-7xl font-bold text-white mb-6">
          Open the door to
          <br />
          <span className="italic font-light">endless possibilities</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Dive into sustainable jute products. Get inspired by craftsmanship that sparks your creativity.
          <br />
          Connect with us to start your journey as a global partner, wherever you are.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
            onClick={() => scrollToSection('products')}
            className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/30 transition-all font-semibold text-lg"
          >
            Explore Our Catalog
          </button>
        </div>
        <p className="text-white/80 italic text-lg">
          "Quality is not an act, it is a habit" – Aristotle
        </p>
      </div>

      <div className="bg-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">20+</p>
              <p className="text-emerald-100">Product Varieties</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">2</p>
              <p className="text-emerald-100">Deals Closed (FY 2025)</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">10</p>
              <p className="text-emerald-100">Target Deals (2026)</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">100%</p>
              <p className="text-emerald-100">Made in India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
