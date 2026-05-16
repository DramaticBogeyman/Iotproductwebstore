import React from 'react';
import { Product } from '../data/products';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { formatPrice } from '../utils/format';

interface ProductCardProps {
  product: Product;
  onAddToCart: (e: React.MouseEvent, product: Product) => void;
  onClick: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart, onClick }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={() => onClick(product)}
      className="bg-white border border-gray-200 overflow-hidden flex flex-col cursor-pointer group hover:border-gray-900 transition-colors"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:opacity-90 transition-opacity"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 text-xs font-medium text-gray-900">
          {product.category}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
          <span className="text-xl font-bold text-gray-900">{formatPrice(product.price)}</span>
          <button
            onClick={(e) => onAddToCart(e, product)}
            className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors z-10 relative"
          >
            <Plus className="w-4 h-4" />
            افزودن
          </button>
        </div>
      </div>
    </motion.div>
  );
}
