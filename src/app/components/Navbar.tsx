import React from 'react';
import { ShoppingCart, Menu, Search, X, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onNavigate: (page: string) => void;
}

export function Navbar({ cartCount, onCartClick, onNavigate }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleNav = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 font-[Vazirmatn]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div
            className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={() => handleNav('home')}
          >
            <div className="w-8 h-8 bg-gray-900 flex items-center justify-center ml-2">
              <span className="text-white font-bold text-xl">I</span>
            </div>
            <span className="font-bold text-xl text-gray-900">فروشگاه IoT</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <button onClick={() => handleNav('home')} className="text-gray-600 hover:text-gray-900 font-medium transition-colors">خانه</button>
            <button onClick={() => handleNav('products')} className="text-gray-600 hover:text-gray-900 font-medium transition-colors">محصولات</button>
            <button onClick={() => handleNav('solutions')} className="text-gray-600 hover:text-gray-900 font-medium transition-colors">راهکارها</button>
            <button onClick={() => handleNav('software')} className="text-gray-600 hover:text-gray-900 font-medium transition-colors">نرم‌افزار</button>
            <button onClick={() => handleNav('support')} className="text-gray-600 hover:text-gray-900 font-medium transition-colors">پشتیبانی</button>
          </div>

          {/* Left Actions */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <button className="text-gray-500 hover:text-gray-900 transition-colors p-2 hidden sm:block">
              <Search className="w-5 h-5" />
            </button>

            <button
              className="text-gray-500 hover:text-gray-900 transition-colors p-2"
              onClick={() => handleNav('profile')}
            >
              <User className="w-5 h-5" />
            </button>

            <button
              className="text-gray-500 hover:text-gray-900 transition-colors p-2 relative"
              onClick={onCartClick}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 left-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform -translate-x-1/4 -translate-y-1/4 bg-gray-900">
                  {cartCount}
                </span>
              )}
            </button>

            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-500 hover:text-gray-900 p-2"
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
              <button onClick={() => handleNav('home')} className="block w-full text-right px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">خانه</button>
              <button onClick={() => handleNav('products')} className="block w-full text-right px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">محصولات</button>
              <button onClick={() => handleNav('solutions')} className="block w-full text-right px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">راهکارها</button>
              <button onClick={() => handleNav('software')} className="block w-full text-right px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">نرم‌افزار</button>
              <button onClick={() => handleNav('support')} className="block w-full text-right px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">پشتیبانی</button>
              <button onClick={() => handleNav('profile')} className="block w-full text-right px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">حساب کاربری</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
