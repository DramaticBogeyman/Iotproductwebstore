import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Smartphone, Monitor, Tablet, Download, Apple, Play, Star, Check, Zap, Shield, Clock, Users } from 'lucide-react';

export function SoftwarePage() {
  const [activeDevice, setActiveDevice] = useState<'mobile' | 'desktop' | 'tablet'>('mobile');

  const features = [
    {
      icon: Zap,
      title: 'سریع و روان',
      description: 'رابط کاربری بهینه‌شده با سرعت بالا'
    },
    {
      icon: Shield,
      title: 'امن و مطمئن',
      description: 'رمزنگاری سطح بانکی برای داده‌های شما'
    },
    {
      icon: Clock,
      title: 'به‌روزرسانی خودکار',
      description: 'همیشه آخرین نسخه را داشته باشید'
    },
    {
      icon: Users,
      title: 'چند کاربره',
      description: 'مدیریت دسترسی برای خانواده'
    }
  ];

  const screenshots = [
    {
      title: 'داشبورد اصلی',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=800&fit=crop',
      description: 'مشاهده وضعیت تمام دستگاه‌ها در یک نگاه'
    },
    {
      title: 'کنترل دستگاه‌ها',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=800&fit=crop',
      description: 'کنترل آسان و سریع همه دستگاه‌ها'
    },
    {
      title: 'اتوماسیون',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=800&fit=crop',
      description: 'ایجاد سناریوهای هوشمند'
    }
  ];

  return (
    <div className="bg-white font-[Vazirmatn]">
      {/* Hero */}
      <div className="relative py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 border border-gray-900 rounded-full mb-6">
                <span className="text-sm font-medium text-gray-900">نرم‌افزار اختصاصی</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                کنترل کامل
                <br />
                در دستان شما
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                اپلیکیشن و نرم‌افزار اختصاصی برای مدیریت خانه هوشمند شما
              </p>

              <div className="flex gap-4">
                <button className="flex items-center gap-3 px-6 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                  <Apple className="w-6 h-6" />
                  <div className="text-right">
                    <div className="text-xs">دریافت از</div>
                    <div className="font-bold">App Store</div>
                  </div>
                </button>
                <button className="flex items-center gap-3 px-6 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                  <Play className="w-6 h-6" />
                  <div className="text-right">
                    <div className="text-xs">دریافت از</div>
                    <div className="font-bold">Google Play</div>
                  </div>
                </button>
              </div>

              <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gray-900 text-gray-900" />
                    ))}
                  </div>
                  <span className="font-medium">۴.۸</span>
                </div>
                <div className="h-4 w-px bg-gray-300"></div>
                <div>۱۰۰,۰۰۰+ دانلود</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative mx-auto w-80">
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=800&fit=crop"
                  alt="اپلیکیشن"
                  className="w-full rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gray-900 rounded-full blur-3xl opacity-20"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ویژگی‌های برجسته
            </h2>
            <p className="text-xl text-gray-600">
              طراحی شده برای تجربه بهتر
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-gray-900 rounded-full mb-4">
                  <feature.icon className="w-7 h-7 text-gray-900" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Screenshots */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              رابط کاربری ساده
            </h2>
            <p className="text-xl text-gray-600">
              طراحی مینیمال و کاربرپسند
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {screenshots.map((shot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={shot.image}
                    alt={shot.title}
                    className="w-full aspect-[9/16] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{shot.title}</h3>
                <p className="text-gray-600">{shot.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Platform Selector */}
      <div className="py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              در همه پلتفرم‌ها
            </h2>
            <p className="text-xl text-gray-600">
              موبایل، دسکتاپ و تبلت
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            {[
              { key: 'mobile' as const, icon: Smartphone, label: 'موبایل' },
              { key: 'desktop' as const, icon: Monitor, label: 'دسکتاپ' },
              { key: 'tablet' as const, icon: Tablet, label: 'تبلت' }
            ].map((platform) => (
              <button
                key={platform.key}
                onClick={() => setActiveDevice(platform.key)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeDevice === platform.key
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                <platform.icon className="w-5 h-5 inline ml-2" />
                {platform.label}
              </button>
            ))}
          </div>

          <div className="bg-gray-100 rounded-2xl p-12 text-center">
            <p className="text-gray-600 text-lg">
              نمایش {activeDevice === 'mobile' ? 'موبایل' : activeDevice === 'desktop' ? 'دسکتاپ' : 'تبلت'}
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            آماده شروع هستید؟
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            همین حالا اپلیکیشن را دانلود کنید
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            <Download className="w-5 h-5" />
            دانلود رایگان
          </button>
        </div>
      </div>
    </div>
  );
}
