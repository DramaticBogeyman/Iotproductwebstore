import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Gift, Truck, Shield } from 'lucide-react';

interface CTASectionProps {
  onShopNow: () => void;
}

export function CTASection({ onShopNow }: CTASectionProps) {
  return (
    <div className="relative py-24 overflow-hidden font-[Vazirmatn]">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            آماده تحول در زندگی‌تان هستید؟
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            همین امروز خانه هوشمند خود را بسازید و از تخفیف‌های ویژه بهره‌مند شوید
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onShopNow}
              className="group px-10 py-5 bg-white text-indigo-600 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/30 transition-all flex items-center justify-center"
            >
              مشاهده محصولات
              <ArrowLeft className="mr-2 w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-bold text-lg border-2 border-white/50 hover:bg-white/20 transition-all flex items-center justify-center"
            >
              مشاوره رایگان
              <Gift className="mr-2 w-6 h-6" />
            </motion.button>
          </motion.div>

          {/* Features Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <Gift className="w-10 h-10 text-white mx-auto mb-3" />
              <h3 className="text-white font-bold text-lg mb-2">تخفیف ویژه</h3>
              <p className="text-white/80 text-sm">تا ۳۰٪ تخفیف برای خریداران جدید</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <Truck className="w-10 h-10 text-white mx-auto mb-3" />
              <h3 className="text-white font-bold text-lg mb-2">ارسال رایگان</h3>
              <p className="text-white/80 text-sm">برای سفارش‌های بالای ۵ میلیون تومان</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <Shield className="w-10 h-10 text-white mx-auto mb-3" />
              <h3 className="text-white font-bold text-lg mb-2">گارانتی ۲ ساله</h3>
              <p className="text-white/80 text-sm">پشتیبانی کامل و تعویض رایگان</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
