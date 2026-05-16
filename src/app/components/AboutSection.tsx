import React from 'react';
import { motion } from 'motion/react';

export function AboutSection() {
  return (
    <div className="min-h-screen py-24 bg-gray-50 font-[Vazirmatn] border-t border-gray-200 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square bg-gray-200 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
                alt="تیم ما"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 border border-gray-900 mb-6">
              <span className="text-sm font-medium text-gray-900">درباره ما</span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              پیشگام در فناوری
              <br />
              خانه هوشمند
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              ما بیش از ۸ سال است که در زمینه ارائه راهکارهای هوشمند خانگی فعالیت می‌کنیم.
              هدف ما این است که با بهره‌گیری از جدیدترین فناوری‌های IoT، زندگی شما را ساده‌تر و ایمن‌تر کنیم.
            </p>

            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-gray-900">۸+</div>
                <div className="text-sm text-gray-600 mt-1">سال تجربه</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">۵۰۰۰+</div>
                <div className="text-sm text-gray-600 mt-1">مشتری راضی</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">۹۸٪</div>
                <div className="text-sm text-gray-600 mt-1">رضایت</div>
              </div>
            </div>

            <button className="px-8 py-4 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors">
              بیشتر بدانید
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
