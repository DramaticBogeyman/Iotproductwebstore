import React from 'react';
import { Product, products } from '../data/products';
import { ProductCard } from './ProductCard';
import { motion } from 'motion/react';

interface ProductListProps {
  onAddToCart: (product: Product) => void;
  onProductClick: (product: Product) => void;
}

export function ProductList({ onAddToCart, onProductClick }: ProductListProps) {
  const [filter, setFilter] = React.useState('همه');

  const categories = ['همه', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = filter === 'همه'
    ? products
    : products.filter(p => p.category === filter);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    onAddToCart(product);
  };

  return (
    <div id="products" className="min-h-screen py-24 bg-white font-[Vazirmatn] border-t border-gray-200 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 border border-gray-900 mb-6">
            <span className="text-sm font-medium text-gray-900">محصولات</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            مجموعه محصولات
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            دستگاه‌های هوشمند برای زندگی بهتر
          </p>
        </motion.div>

        <div className="flex justify-center mb-12 flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 font-medium transition-colors ${
                filter === category
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-900 border border-gray-300 hover:border-gray-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <ProductCard
                product={product}
                onAddToCart={handleAddToCart}
                onClick={onProductClick}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
