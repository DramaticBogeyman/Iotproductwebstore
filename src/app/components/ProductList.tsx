import React from 'react';
import { Product, products } from '../data/products';
import { ProductCard } from './ProductCard';

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
    <div id="products" className="py-24 bg-gray-50 font-[Vazirmatn]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">مجموعه هوشمند ما</h2>
          <p className="mt-4 text-xl text-gray-500">دستگاه‌هایی که برای ساده‌تر و ایمن‌تر کردن زندگی شما طراحی شده‌اند.</p>
        </div>

        <div className="flex justify-center mb-12 flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 shadow-sm border border-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={handleAddToCart}
              onClick={onProductClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
