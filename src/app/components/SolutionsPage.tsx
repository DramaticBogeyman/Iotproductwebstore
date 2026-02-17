import React from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Home, Sun } from 'lucide-react';

export function SolutionsPage() {
  const solutions = [
    {
      icon: <Shield className="w-12 h-12 text-indigo-600" />,
      title: 'امنیت هوشمند',
      description: 'با سیستم‌های امنیتی پیشرفته ما، خانه خود را به دژی نفوذناپذیر تبدیل کنید. نظارت ۲۴ ساعته و هشدارهای فوری.'
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: 'مدیریت انرژی',
      description: 'با ترموستات‌ها و پریزهای هوشمند، مصرف انرژی را بهینه کنید و هزینه‌های برق خود را تا ۳۰٪ کاهش دهید.'
    },
    {
      icon: <Sun className="w-12 h-12 text-orange-500" />,
      title: 'روشنایی خودکار',
      description: 'نورپردازی خانه را با حال و هوای خود تنظیم کنید. بیدار شدن با نور ملایم و خوابیدن با نور آرامش‌بخش.'
    },
    {
      icon: <Home className="w-12 h-12 text-green-600" />,
      title: 'اتوماسیون کامل',
      description: 'همه دستگاه‌ها را به یک هاب مرکزی متصل کنید و روتین‌های روزانه خود را خودکار کنید.'
    }
  ];

  return (
    <div className="py-12 bg-white font-[Vazirmatn]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold text-gray-900 mb-4"
          >
            راهکارهای هوشمند برای زندگی مدرن
          </motion.h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            ما مجموعه‌ای از راهکارهای یکپارچه را ارائه می‌دهیم که زندگی شما را ساده‌تر، ایمن‌تر و لذت‌بخش‌تر می‌کند.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {solutions.map((solution, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6 p-8 rounded-2xl bg-gray-50 hover:bg-indigo-50 transition-colors border border-gray-100"
            >
              <div className="shrink-0">
                <div className="p-4 bg-white rounded-xl shadow-sm">
                  {solution.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 bg-indigo-900 rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558002038-1091a1661116?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="relative p-12 md:p-24 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">آماده هوشمندسازی خانه خود هستید؟</h2>
            <p className="text-indigo-200 text-lg mb-8 max-w-2xl mx-auto">
              با کارشناسان ما تماس بگیرید تا بهترین راهکار را برای نیازهای شما پیشنهاد دهند.
            </p>
            <button className="bg-white text-indigo-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              دریافت مشاوره رایگان
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
