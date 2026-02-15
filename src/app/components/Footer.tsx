import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight text-white">IoT Store</h3>
            <p className="text-gray-400 text-sm">Empowering your life with smart technology. Secure, efficient, and easy to use.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Hubs & Bridges</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lighting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security Cameras</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Smart Locks</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Thermostats</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Order Status</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Product Help</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Warranty</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> 123 Tech Blvd, San Francisco, CA</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +1 (555) 123-4567</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> support@iotstore.com</li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} IoT Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
