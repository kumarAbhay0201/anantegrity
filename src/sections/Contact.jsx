import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600">Ready to place an order or have questions? Contact us today!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-emerald-700 text-white p-3 rounded-lg">
                <Mail size={24} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Email</p>
                <a href="mailto:info@anantegrityexporters.com" className="text-emerald-700 hover:text-emerald-800">
                  info@anantegrityexporters.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-emerald-700 text-white p-3 rounded-lg">
                <Phone size={24} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Phone</p>
                <a href="tel:+919693508870" className="text-emerald-700 hover:text-emerald-800">
                  +91 9693508870
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-emerald-700 text-white p-3 rounded-lg">
                <MapPin size={24} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Office Location</p>
                <p className="text-gray-700">
                  7/3868, nr. Gokul Sweet, Varachha Sheri,<br />
                  Rughnathpura, Surat, Gujarat 395003<br />
                  India
                </p>
              </div>
            </div>

            <div className="pt-6">
              <p className="font-semibold text-gray-900 mb-4">Connect With Us</p>
              <div className="flex gap-4">
                {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="bg-emerald-700 text-white p-3 rounded-lg hover:bg-emerald-800 transition-colors">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  placeholder="Your message..."
                />
              </div>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  alert('Thank you for your message! We will contact you soon.');
                }}
                className="w-full bg-emerald-700 text-white py-3 rounded-lg hover:bg-emerald-800 transition-colors font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
