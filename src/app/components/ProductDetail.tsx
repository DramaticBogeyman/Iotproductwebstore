import React from 'react';
import { Product } from '../data/products';
import { motion } from 'motion/react';
import { ShoppingCart, ArrowRight, Check, Shield, Truck } from 'lucide-react';
import { formatPrice } from '../utils/format';
import { ProductViewer3D } from './ProductViewer3D';
import { CatalogViewer } from './CatalogViewer';

interface ProductDetailProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onBack: () => void;
}

export function ProductDetail({ product, onAddToCart, onBack }: ProductDetailProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-[Vazirmatn]"
    >
      <button 
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-indigo-600 mb-8 transition-colors group"
      >
        <ArrowRight className="w-5 h-5 ml-2 group-hover:-translate-x-1 transition-transform" />
        بازگشت به محصولات
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Image Section */}
        <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-sm aspect-square lg:aspect-auto lg:h-[600px]">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Info Section */}
        <div className="flex flex-col h-full">
          <div className="mb-2">
            <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 text-sm font-semibold rounded-full">
              {product.category}
            </span>
          </div>
          
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-2xl font-bold text-indigo-600 mb-6">{formatPrice(product.price)}</p>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {product.description}
          </p>

          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">ویژگی‌های کلیدی:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <div className="bg-green-100 text-green-600 rounded-full p-1 ml-3">
                    <Check className="w-4 h-4" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-gray-100 pt-8 mt-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={() => onAddToCart(product)}
                className="flex-1 bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 active:scale-[0.98] transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                افزودن به سبد خرید
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-indigo-600" />
                <span>۲ سال گارانتی</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-indigo-600" />
                <span>ارسال رایگان</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Viewer and Catalog Section */}
      {(product.model3D || product.packaging3D || product.catalogPDF) && (
        <div className="mt-16 pt-16 border-t border-gray-200">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            اطلاعات تکمیلی محصول
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {(product.model3D || product.packaging3D) && (
              <ProductViewer3D
                productModel={product.model3D}
                packagingModel={product.packaging3D}
                productName={product.name}
              />
            )}
            {product.catalogPDF && (
              <CatalogViewer
                catalogPDF={product.catalogPDF}
                productName={product.name}
              />
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
}
