import React from 'react';
import { Product } from '../data/products';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-900 shadow-sm">
          {product.category}
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
          <p className="text-sm text-gray-500 mb-4 line-clamp-2">{product.description}</p>
        </div>
        
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <span className="text-xl font-bold text-indigo-600">${product.price.toFixed(2)}</span>
          <button 
            onClick={() => onAddToCart(product)}
            className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors active:scale-95"
          >
            <Plus className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </motion.div>
  );
}
