import React from 'react';
import { blogPosts } from '../data';

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <p className="text-xl text-gray-600">Learn more about jute products and sustainability</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="group bg-white border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col">
              {/* Blog Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/600x400?text=Blog+Image";
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-700/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-xs text-emerald-600 font-medium mb-2 uppercase tracking-tight">{post.date}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto">
                  <button className="text-emerald-700 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    Read Full Story <span className="text-lg">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;