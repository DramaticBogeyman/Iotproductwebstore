import React from 'react';
import { Product, products } from '../data/products';
import { ProductCard } from './ProductCard';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

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
    <div id="products" className="relative py-24 bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30 font-[Vazirmatn] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-indigo-200/40 to-purple-200/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-pink-200/40 to-orange-200/40 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-6">
            <Sparkles className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              محصولات پیشرفته
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent">
              مجموعه محصولات هوشمند
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            دستگاه‌هایی که برای ساده‌تر، ایمن‌تر و هوشمندتر کردن زندگی شما طراحی شده‌اند
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12 flex-wrap gap-3"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                filter === category
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/50'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md border border-gray-200'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard
                product={product}
                onAddToCart={handleAddToCart}
                onClick={onProductClick}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
