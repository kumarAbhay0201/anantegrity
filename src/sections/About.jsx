import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-emerald-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center text-emerald-800">
              <p className="text-6xl mb-4">👔</p>
              <p className="text-xl font-semibold">Apurv Kumar Mishra</p>
              <p className="text-sm">Co-Founder & Director</p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Anantegrity Exports</h2>
            <p className="text-lg text-gray-700 mb-4">
              Founded with a vision to bring sustainable, handcrafted jute products from India to global markets, Anantegrity Exports specializes in eco-friendly home décor and accessories.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Under the leadership of Co-Founder and Director <strong>Apurv Kumar Mishra</strong>, we handle client deals and source premium quality products exclusively from India. Our commitment to sustainability and traditional craftsmanship sets us apart in the global market.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              In FY 2025, we successfully closed 2 international deals, and we're targeting 10 deals in 2026 as we expand our global footprint.
            </p>
            <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-700">
              <p className="text-emerald-900 font-semibold mb-2">Our Mission</p>
              <p className="text-gray-700">
                To promote sustainable living through beautiful, handcrafted jute products while supporting Indian artisans and traditional craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
