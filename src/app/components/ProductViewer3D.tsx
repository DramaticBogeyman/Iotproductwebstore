import React, { useState } from 'react';
import { Box, Package, RotateCw } from 'lucide-react';

interface ProductViewer3DProps {
  productModel?: string;
  packagingModel?: string;
  productName: string;
}

export function ProductViewer3D({ productModel, packagingModel, productName }: ProductViewer3DProps) {
  const [activeView, setActiveView] = useState<'product' | 'packaging'>('product');

  if (!productModel && !packagingModel) {
    return null;
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-4">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Box className="w-6 h-6" />
          نمایش سه‌بعدی
        </h3>
      </div>

      <div className="p-4">
        {(productModel && packagingModel) && (
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setActiveView('product')}
              className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                activeView === 'product'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Box className="w-4 h-4" />
              محصول
            </button>
            <button
              onClick={() => setActiveView('packaging')}
              className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                activeView === 'packaging'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Package className="w-4 h-4" />
              بسته‌بندی
            </button>
          </div>
        )}

        <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl aspect-square overflow-hidden border-2 border-gray-200">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <RotateCw className="w-16 h-16 text-indigo-400 mx-auto mb-4 animate-spin" style={{ animationDuration: '3s' }} />
              <p className="text-gray-600 font-semibold mb-2">
                مدل سه‌بعدی {activeView === 'product' ? productName : 'بسته‌بندی'}
              </p>
              <p className="text-sm text-gray-500 px-4">
                برای چرخاندن، ماوس را کشیده و برای زوم، اسکرول کنید
              </p>
            </div>
          </div>

          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md">
            <span className="text-xs font-semibold text-gray-600">
              {activeView === 'product' ? 'نمایش محصول' : 'نمایش بسته‌بندی'}
            </span>
          </div>
        </div>

        <div className="mt-4 p-4 bg-indigo-50 rounded-lg">
          <p className="text-sm text-indigo-800">
            <strong>راهنما:</strong> می‌توانید مدل را با ماوس بچرخانید، زوم کنید و از زوایای مختلف مشاهده نمایید.
          </p>
        </div>
      </div>
    </div>
  );
}
