import React from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Home, Sun, Check, ArrowRight } from 'lucide-react';

export function SolutionsPage() {
  const solutions = [
    {
      icon: Shield,
      title: 'امنیت هوشمند',
      description: 'نظارت ۲۴ ساعته با دوربین‌های 4K و تشخیص هوشمند',
      features: [
        'دوربین 4K با دید شب',
        'تشخیص چهره و حرکت',
        'هشدار فوری',
        'ضبط ابری'
      ]
    },
    {
      icon: Zap,
      title: 'مدیریت انرژی',
      description: 'کاهش ۴۰٪ هزینه‌ها با مدیریت هوشمند مصرف',
      features: [
        'کنترل خودکار دما',
        'گزارش مصرف',
        'برنامه‌ریزی هوشمند',
        'قطع خودکار'
      ]
    },
    {
      icon: Sun,
      title: 'روشنایی هوشمند',
      description: '۱۶ میلیون رنگ برای هر حال و هوایی',
      features: [
        'انتخاب رنگ',
        'سناریوهای آماده',
        'تنظیم خودکار',
        'همگام با موسیقی'
      ]
    },
    {
      icon: Home,
      title: 'اتوماسیون کامل',
      description: 'کنترل همه چیز از یک نقطه',
      features: [
        'کنترل صوتی',
        'روتین شخصی',
        'کنترل از راه دور',
        'یکپارچگی کامل'
      ]
    }
  ];

  return (
    <div className="bg-white font-[Vazirmatn]">
      {/* Hero */}
      <div className="py-32 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-2 border border-gray-900 mb-6">
              <span className="text-sm font-medium text-gray-900">راهکارهای هوشمند</span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              راهکارها برای
              <br />
              زندگی بهتر
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              مجموعه کاملی از راهکارهای یکپارچه برای هوشمندسازی خانه شما
            </p>
          </motion.div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-t border-gray-200 pt-8"
              >
                <div className="w-12 h-12 border-2 border-gray-900 flex items-center justify-center mb-6">
                  <solution.icon className="w-6 h-6 text-gray-900" />
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {solution.title}
                </h2>

                <p className="text-lg text-gray-600 mb-8">
                  {solution.description}
                </p>

                <div className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-gray-900" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            آماده هوشمندسازی خانه خود هستید؟
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            با کارشناسان ما تماس بگیرید و مشاوره رایگان دریافت کنید
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors">
            دریافت مشاوره رایگان
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
