import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { products } from '../data';

const Products = ({ scrollToSection }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allProducts = [...products.juteRugs, ...products.bags, ...products.pouches];
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

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'rugs', 'bags', 'pouches'].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                selectedCategory === cat 
                  ? 'bg-emerald-700 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat === 'all' ? 'All Products' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="border rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-amber-50 to-green-50 h-64 flex items-center justify-center overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden flex-col items-center justify-center w-full h-full">
                  <p className="text-6xl mb-4">
                    {product.category.includes('Rug') ? '🧶' : product.category.includes('Bag') ? '👜' : '📦'}
                  </p>
                  <p className="text-sm font-semibold text-gray-600">{product.id}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-emerald-700 font-semibold mb-2">{product.category}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="mt-4 text-emerald-700 font-semibold hover:text-emerald-800 flex items-center gap-2"
                >
                  Inquire Now <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
