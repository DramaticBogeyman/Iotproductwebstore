import React from 'react';
import { motion } from 'motion/react';
import { Wifi, Shield, Zap, Smartphone, Cloud, Lock } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Wifi,
      title: 'اتصال یکپارچه',
      description: 'تمام دستگاه‌های شما در یک پلتفرم واحد متصل می‌شوند',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      icon: Shield,
      title: 'امنیت پیشرفته',
      description: 'رمزنگاری نظامی و حفاظت ۲۴/۷ از داده‌های شما',
      gradient: 'from-indigo-500 to-purple-500',
      bgGradient: 'from-indigo-50 to-purple-50'
    },
    {
      icon: Zap,
      title: 'کنترل سریع',
      description: 'واکنش فوری به دستورات شما در کسری از ثانیه',
      gradient: 'from-yellow-500 to-orange-500',
      bgGradient: 'from-yellow-50 to-orange-50'
    },
    {
      icon: Smartphone,
      title: 'کنترل از راه دور',
      description: 'مدیریت خانه از هر نقطه جهان با اپلیکیشن موبایل',
      gradient: 'from-pink-500 to-rose-500',
      bgGradient: 'from-pink-50 to-rose-50'
    },
    {
      icon: Cloud,
      title: 'ذخیره ابری',
      description: 'پشتیبان‌گیری خودکار و دسترسی به داده‌ها از همه جا',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50'
    },
    {
      icon: Lock,
      title: 'حریم خصوصی',
      description: 'داده‌های شما فقط متعلق به شماست و هیچ‌کس دیگر',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50'
    }
  ];

  return (
    <div className="py-24 bg-white font-[Vazirmatn]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              چرا ما را انتخاب کنید؟
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ویژگی‌هایی که تجربه خانه هوشمند شما را به سطح جدیدی می‌برند
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative group bg-gradient-to-br ${feature.bgGradient} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all`}
            >
              <div className="relative">
                <div className={`inline-flex p-4 bg-gradient-to-br ${feature.gradient} rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
