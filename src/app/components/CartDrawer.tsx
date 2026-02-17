import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, X, Plus, Minus, Trash2 } from 'lucide-react';
import { formatPrice } from '../utils/format';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

export function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onCheckout }: CartDrawerProps) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-40"
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed top-0 left-0 h-full w-full sm:w-[400px] bg-white shadow-2xl z-50 flex flex-col font-[Vazirmatn]"
          >
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" /> سبد خرید
              </h2>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
                    <ShoppingCart className="w-8 h-8 text-gray-300" />
                  </div>
                  <p className="text-gray-500 text-lg">سبد خرید شما خالی است</p>
                  <button 
                    onClick={onClose}
                    className="text-indigo-600 font-medium hover:text-indigo-700 hover:underline"
                  >
                    شروع خرید
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <motion.div 
                    layout
                    key={item.id} 
                    className="flex gap-4 bg-gray-50 p-4 rounded-xl"
                  >
                    <div className="w-20 h-20 bg-white rounded-lg overflow-hidden shrink-0 border border-gray-100">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900 line-clamp-1 text-right">{item.name}</h3>
                        <p className="text-sm text-gray-500 text-right">{formatPrice(item.price)}</p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 p-1">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1 hover:bg-gray-50 rounded text-gray-500"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1 hover:bg-gray-50 rounded text-gray-500"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button 
                          onClick={() => onRemoveItem(item.id)}
                          className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-white space-y-4">
                <div className="flex items-center justify-between text-lg font-bold text-gray-900">
                  <span>جمع کل</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <p className="text-xs text-gray-500 text-center">هزینه ارسال و مالیات در مرحله پرداخت محاسبه می‌شود</p>
                <button 
                  onClick={() => {
                    onClose();
                    onCheckout();
                  }}
                  className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 active:scale-[0.98] transition-all shadow-lg shadow-indigo-200"
                >
                  تسویه حساب
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
