import React from 'react';
import { ShoppingCart, Menu, Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onNavigate: (page: string) => void;
}

export function Navbar({ cartCount, onCartClick, onNavigate }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 font-[Vazirmatn]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer" 
            onClick={() => onNavigate('home')}
          >
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center ml-2">
              <span className="text-white font-bold text-xl">I</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">فروشگاه IoT</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <button onClick={() => onNavigate('home')} className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">خانه</button>
            <button onClick={() => onNavigate('products')} className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">محصولات</button>
            <button className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">راهکارها</button>
            <button className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">پشتیبانی</button>
          </div>

          {/* Left Actions (in RTL, this is the left side visually, but in DOM order it's last) */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <button className="text-gray-500 hover:text-indigo-600 transition-colors p-2">
              <Search className="w-5 h-5" />
            </button>
            
            <button 
              className="text-gray-500 hover:text-indigo-600 transition-colors p-2 relative"
              onClick={onCartClick}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 left-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform -translate-x-1/4 -translate-y-1/4 bg-indigo-600 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-500 hover:text-indigo-600 p-2"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-2 space-y-1">
              <button onClick={() => { onNavigate('home'); setIsMobileMenuOpen(false); }} className="block w-full text-right px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">خانه</button>
              <button onClick={() => { onNavigate('products'); setIsMobileMenuOpen(false); }} className="block w-full text-right px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">محصولات</button>
              <button className="block w-full text-right px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">راهکارها</button>
              <button className="block w-full text-right px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">پشتیبانی</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
