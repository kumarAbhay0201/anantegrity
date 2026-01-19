import React from 'react';
import { blogPosts } from '../data';

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <p className="text-xl text-gray-600">Learn more about jute products and sustainability</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="border rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-emerald-100 to-green-100 h-48 flex items-center justify-center">
                <p className="text-5xl">📰</p>
              </div>
              <div className="p-6">
                <p className="text-sm text-emerald-700 font-semibold mb-2">{post.category}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
