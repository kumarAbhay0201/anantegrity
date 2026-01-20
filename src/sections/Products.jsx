import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const Products = ({ scrollToSection }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Organized data based on your uploaded file structure
  const productData = {
    bags: [
      { id: 'BG-01', name: 'Alpona Tote Bag', category: 'Bags', image: '/products/AlponaToteBag.png', description: 'Traditional alpona art-inspired spacious jute tote.' },
      { id: 'BG-02', name: 'Honey Bee Bag', category: 'Bags', image: '/products/HoneyBeeBag.png', description: 'Eco-friendly bag with a charming bee-themed design.' },
      { id: 'BG-03', name: 'Juco Laptop Bag', category: 'Bags', image: '/products/JucoLaptopBag.png', description: 'Premium Juco fabric blend for safe laptop transport.' },
      { id: 'BG-04', name: 'Net Shopping Bag', category: 'Bags', image: '/products/NetShoppingBag.png', description: 'Breathable and sturdy mesh-style jute shopper.' },
      { id: 'BG-05', name: 'Kalamkari Bag', category: 'Bags', image: '/products/KalamkariBag.png', description: 'Artistic Kalamkari print on natural jute fibers.' },
    ],
    pouches: [
      { id: 'PC-01', name: 'Butterfly Pouch', category: 'Pouches', image: '/products/ButterflyPouch.png', description: 'Delicate butterfly motif everyday utility pouch.' },
      { id: 'PC-02', name: 'Ladybird Pouch', category: 'Pouches', image: '/products/LadybirdPouch.png', description: 'Vibrant red ladybird themed zippered pouch.' },
      { id: 'PC-03', name: 'Saheli Jute Pouch', category: 'Pouches', image: '/products/SaheliJutePouch.png', description: 'Handcrafted pouch supporting local woman artisans.' },
      { id: 'PC-04', name: 'Half Half Pouch', category: 'Pouches', image: '/products/HalfHalfPouch.png', description: 'Stylish dual-tone minimalist storage solution.' },
      { id: 'PC-05', name: 'Pompom Pouch Big', category: 'Pouches', image: '/products/PompomPouchBig.png', description: 'Playful large pouch with colorful pompom accents.' },
    ],
    rugs: [
      { id: 'RG-01', name: 'Amber Hive', category: 'Rugs', image: '/products/AmberHive.png', description: 'Geometric honeycomb pattern in warm amber tones.' },
      { id: 'RG-02', name: 'Golden Hour', category: 'Rugs', image: '/products/GoldenHour.png', description: 'Radiant natural jute rug that brightens any room.' },
      { id: 'RG-03', name: 'Ocean Whirl', category: 'Rugs', image: '/products/OceanWhirl.png', description: 'Swirling blue-tinted jute fibers inspired by the sea.' },
      { id: 'RG-04', name: 'Spindle Whisper', category: 'Rugs', image: '/products/SpindleWhisper.png', description: 'Fine-spun intricate weave for a luxury feel.' },
      { id: 'RG-05', name: 'Braided Halo', category: 'Rugs', image: '/products/BraidedHalo.png', description: 'Circular braided rug with a minimalist border.' },
    ]
  };

  const allProducts = [...productData.rugs, ...productData.bags, ...productData.pouches];
  
  const filteredProducts = selectedCategory === 'all' 
    ? allProducts 
    : allProducts.filter(p => p.category.toLowerCase().includes(selectedCategory));

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Catalog</h2>
          <p className="text-xl text-gray-600">Handcrafted sustainable jute products for every need</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'rugs', 'bags', 'pouches'].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === cat 
                  ? 'bg-emerald-700 text-white shadow-md transform scale-105' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat === 'all' ? 'All Products' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="group border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white">
              <div className="relative h-72 flex items-center justify-center overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://via.placeholder.com/400x400?text=Image+Coming+Soon";
                  }}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                  <p className="text-xs font-bold text-gray-500">{product.id}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-sm text-emerald-700 font-bold uppercase tracking-wider">{product.category}</p>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>
                
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-3 border-2 border-emerald-700 text-emerald-700 font-bold rounded-lg hover:bg-emerald-700 hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  Inquire Now <ChevronRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 italic">No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;