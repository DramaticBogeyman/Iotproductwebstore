import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface MinimalHeroProps {
  onShopNow: () => void;
}

export function MinimalHero({ onShopNow }: MinimalHeroProps) {
  return (
    <div className="relative py-32 bg-white font-[Vazirmatn]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 border border-gray-900 mb-6">
              <span className="text-sm font-medium text-gray-900">جدیدترین فناوری IoT</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              آینده زندگی
              <br />
              هوشمند شما
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              خانه خود را با مجموعه برتر دستگاه‌های IoT به فضایی هوشمند تبدیل کنید
            </p>

            <div className="flex gap-4">
              <button
                onClick={onShopNow}
                className="px-8 py-4 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
              >
                مشاهده محصولات
                <ArrowLeft className="w-5 h-5" />
              </button>

              <button className="px-8 py-4 border border-gray-900 text-gray-900 font-medium hover:bg-gray-50 transition-colors">
                درباره ما
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-lg">
              <div>
                <div className="text-3xl font-bold text-gray-900">۱۰۰+</div>
                <div className="text-sm text-gray-600 mt-1">محصول</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">۵۰۰۰+</div>
                <div className="text-sm text-gray-600 mt-1">مشتری</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">۹۸٪</div>
                <div className="text-sm text-gray-600 mt-1">رضایت</div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-gray-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop"
                alt="خانه هوشمند"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gray-900 opacity-10"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
