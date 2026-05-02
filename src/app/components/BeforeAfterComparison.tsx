import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Maximize2, X, Check, ArrowLeft } from 'lucide-react';

export function BeforeAfterComparison() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const scenarios = [
    {
      category: 'امنیت',
      before: {
        title: 'قبل از هوشمندسازی',
        items: [
          { text: 'نگرانی از امنیت خانه', icon: X, color: 'red' },
          { text: 'عدم کنترل از راه دور', icon: X, color: 'red' },
          { text: 'هزینه بالای نگهبانی', icon: X, color: 'red' },
          { text: 'اطلاع دیرهنگام از مزاحمت', icon: X, color: 'red' }
        ]
      },
      after: {
        title: 'بعد از هوشمندسازی',
        items: [
          { text: 'نظارت ۲۴ ساعته با دوربین', icon: Check, color: 'green' },
          { text: 'کنترل کامل از هر نقطه', icon: Check, color: 'green' },
          { text: 'صرفه‌جویی در هزینه‌ها', icon: Check, color: 'green' },
          { text: 'هشدار فوری به موبایل', icon: Check, color: 'green' }
        ]
      }
    },
    {
      category: 'انرژی',
      before: {
        title: 'قبل از هوشمندسازی',
        items: [
          { text: 'قبض برق بالا', icon: X, color: 'red' },
          { text: 'هدررفت انرژی', icon: X, color: 'red' },
          { text: 'کنترل دستی دما', icon: X, color: 'red' },
          { text: 'فراموشی خاموش کردن چراغ', icon: X, color: 'red' }
        ]
      },
      after: {
        title: 'بعد از هوشمندسازی',
        items: [
          { text: 'کاهش ۴۰٪ قبض برق', icon: Check, color: 'green' },
          { text: 'مدیریت بهینه مصرف', icon: Check, color: 'green' },
          { text: 'تنظیم خودکار دما', icon: Check, color: 'green' },
          { text: 'خاموش خودکار چراغ‌ها', icon: Check, color: 'green' }
        ]
      }
    }
  ];

  return (
    <div className="space-y-12">
      {/* Interactive Slider Comparison */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="relative aspect-video">
          {/* Before Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&h=675&fit=crop"
              alt="قبل"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 to-transparent"></div>
            <div className="absolute top-8 right-8 bg-red-500 text-white px-6 py-3 rounded-full font-bold shadow-lg">
              قبل
            </div>
          </div>

          {/* After Image */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=675&fit=crop"
              alt="بعد"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-indigo-900/60 to-transparent"></div>
            <div className="absolute top-8 left-8 bg-green-500 text-white px-6 py-3 rounded-full font-bold shadow-lg">
              بعد
            </div>
          </div>

          {/* Slider Handle */}
          <div
            className="absolute inset-y-0 cursor-ew-resize z-10"
            style={{ right: `${sliderPosition}%` }}
            onMouseDown={(e) => {
              const handleMouseMove = (moveEvent: MouseEvent) => {
                const rect = e.currentTarget.parentElement?.getBoundingClientRect();
                if (rect) {
                  const x = moveEvent.clientX - rect.left;
                  const percentage = 100 - (x / rect.width) * 100;
                  setSliderPosition(Math.min(100, Math.max(0, percentage)));
                }
              };

              const handleMouseUp = () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
              };

              document.addEventListener('mousemove', handleMouseMove);
              document.addEventListener('mouseup', handleMouseUp);
            }}
          >
            <div className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl"></div>
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-4 shadow-2xl">
              <Maximize2 className="w-6 h-6 text-indigo-600" />
            </div>
          </div>

          {/* Instruction */}
          <div className="absolute bottom-8 right-1/2 translate-x-1/2 bg-black/60 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold">
            <ArrowLeft className="w-4 h-4 inline ml-2" />
            اسلایدر را بکشید
          </div>
        </div>
      </div>

      {/* Detailed Comparisons */}
      <div className="grid md:grid-cols-2 gap-8">
        {scenarios.map((scenario, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 text-center">
              <h3 className="text-2xl font-extrabold">{scenario.category}</h3>
            </div>

            <div className="grid grid-cols-2 divide-x divide-gray-200">
              {/* Before */}
              <div className="p-6 bg-red-50">
                <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">
                  {scenario.before.title}
                </h4>
                <div className="space-y-3">
                  {scenario.before.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 text-right">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* After */}
              <div className="p-6 bg-green-50">
                <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">
                  {scenario.after.title}
                </h4>
                <div className="space-y-3">
                  {scenario.after.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 text-right">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
