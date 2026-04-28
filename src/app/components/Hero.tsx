import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, Zap, Shield, Wifi } from 'lucide-react';

interface HeroProps {
  onShopNow: () => void;
}

export function Hero({ onShopNow }: HeroProps) {
  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 font-[Vazirmatn]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-pink-200/30 to-orange-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-cyan-200/20 to-blue-200/20 rounded-full blur-2xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          {/* Text Content */}
          <div className="text-center lg:text-right">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-6"
            >
              <Sparkles className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                جدیدترین فناوری IoT
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl tracking-tight font-extrabold mb-6"
            >
              <span className="block bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent">
                آینده زندگی
              </span>
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                هوشمند شما
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              خانه خود را با مجموعه برتر دستگاه‌های IoT به فضایی هوشمند تبدیل کنید. کنترل کامل، امنیت بالا و راحتی بی‌نظیر در انتظار شماست.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                onClick={onShopNow}
                className="group flex items-center justify-center px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-indigo-500/50 hover:shadow-indigo-600/60 transition-all"
              >
                شروع خرید
                <ArrowLeft className="mr-2 w-6 h-6 group-hover:-translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="flex items-center justify-center px-10 py-5 bg-white/80 backdrop-blur-sm text-indigo-700 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-white transition-all border-2 border-indigo-100"
              >
                مشاهده دمو
                <Zap className="mr-2 w-6 h-6" />
              </motion.button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0"
            >
              <div className="text-center lg:text-right">
                <div className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  ۱۰۰+
                </div>
                <div className="text-sm text-gray-600 mt-1">محصول</div>
              </div>
              <div className="text-center lg:text-right">
                <div className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  ۵۰۰۰+
                </div>
                <div className="text-sm text-gray-600 mt-1">مشتری راضی</div>
              </div>
              <div className="text-center lg:text-right">
                <div className="text-3xl font-extrabold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                  ۹۸٪
                </div>
                <div className="text-sm text-gray-600 mt-1">رضایت</div>
              </div>
            </motion.div>
          </div>

          {/* Hero Image with Floating Icons */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl blur-2xl opacity-30"></div>
              <img
                className="relative rounded-3xl shadow-2xl object-cover w-full h-[400px] lg:h-[600px]"
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
                alt="خانه هوشمند"
              />
            </motion.div>

            {/* Floating Feature Icons */}
            <motion.div
              animate={floatingAnimation}
              className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4"
            >
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-3">
                <Wifi className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            <motion.div
              animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 0.5 } }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4"
            >
              <div className="bg-gradient-to-br from-pink-500 to-orange-600 rounded-xl p-3">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            <motion.div
              animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
              className="absolute top-1/2 -left-6 bg-white rounded-2xl shadow-xl p-4"
            >
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl p-3">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
