import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Founder Image Section */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/founder.jpg" 
                alt="Apurv Kumar Mishra - Co-Founder & Director" 
                className="w-full h-[500px] object-cover object-top"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/400x500?text=Apurv+Kumar+Mishra";
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <p className="text-xl font-bold">Apurv Kumar Mishra</p>
                <p className="text-emerald-400 text-sm">Co-Founder & Director</p>
              </div>
            </div>
          </div>

          {/* Text Content Section */}
          <div>
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-emerald-900 uppercase rounded-full bg-emerald-100">
              Our Story
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              About <span className="text-emerald-700">Anantegrity Exports</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Founded with a vision to bring sustainable, handcrafted jute products from India to global markets, Anantegrity Exports specializes in eco-friendly home décor and accessories.
            </p>
            
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Under the leadership of Co-Founder and Director <strong>Apurv Kumar Mishra</strong>, we handle client deals and source premium quality products exclusively from India. Our commitment to sustainability and traditional craftsmanship sets us apart in the global market.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              In FY 2025, we successfully closed 2 international deals, and we're targeting 10 deals in 2026 as we expand our global footprint.
            </p>
            
            <div className="bg-emerald-50 p-6 rounded-xl border-l-4 border-emerald-700 shadow-sm">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">🌿</span>
                <p className="text-emerald-900 font-bold uppercase tracking-wide text-sm">Our Mission</p>
              </div>
              <p className="text-gray-700 italic">
                "To promote sustainable living through beautiful, handcrafted jute products while supporting Indian artisans and traditional craftsmanship."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;