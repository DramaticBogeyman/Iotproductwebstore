import React from 'react';
import { motion } from 'motion/react';
import { Star, TrendingDown, Clock, Headphones } from 'lucide-react';

export function BenefitsSection() {
  const benefits = [
    {
      icon: TrendingDown,
      title: 'صرفه‌جویی تا ۴۰٪',
      description: 'در مصرف انرژی و هزینه‌های ماهانه',
      stat: '۴۰٪',
      color: 'green'
    },
    {
      icon: Clock,
      title: 'نصب در ۳۰ دقیقه',
      description: 'راه‌اندازی آسان بدون نیاز به تخصص',
      stat: '۳۰ دقیقه',
      color: 'blue'
    },
    {
      icon: Headphones,
      title: 'پشتیبانی ۲۴/۷',
      description: 'تیم متخصص همیشه در کنار شماست',
      stat: '۲۴/۷',
      color: 'purple'
    },
    {
      icon: Star,
      title: 'رتبه ۵ ستاره',
      description: 'از سوی هزاران مشتری راضی',
      stat: '۵/۵',
      color: 'yellow'
    }
  ];

  const testimonials = [
    {
      name: 'علی محمدی',
      role: 'مهندس نرم‌افزار',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      text: 'بهترین سرمایه‌گذاری برای خانه‌ام بود. کنترل همه چیز از گوشی خیلی راحته!',
      rating: 5
    },
    {
      name: 'سارا احمدی',
      role: 'طراح گرافیک',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      text: 'کیفیت محصولات عالیه و پشتیبانی فوق‌العاده سریع. واقعاً حرفه‌ای!',
      rating: 5
    },
    {
      name: 'رضا کریمی',
      role: 'مدیر فروش',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      text: 'قبول فاکتور به راحتی نصب شد و کار می‌کنه. خیالم از بابت امنیت خانه راحته.',
      rating: 5
    }
  ];

  const colorMap = {
    green: { gradient: 'from-green-500 to-emerald-500', bg: 'bg-green-100', text: 'text-green-600' },
    blue: { gradient: 'from-blue-500 to-cyan-500', bg: 'bg-blue-100', text: 'text-blue-600' },
    purple: { gradient: 'from-purple-500 to-pink-500', bg: 'bg-purple-100', text: 'text-purple-600' },
    yellow: { gradient: 'from-yellow-500 to-orange-500', bg: 'bg-yellow-100', text: 'text-yellow-600' }
  };

  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 font-[Vazirmatn]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              مزایای انتخاب ما
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {benefits.map((benefit, index) => {
            const colors = colorMap[benefit.color as keyof typeof colorMap];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all text-center"
              >
                <div className={`inline-flex p-4 bg-gradient-to-br ${colors.gradient} rounded-2xl shadow-lg mb-4`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-4xl font-extrabold mb-2 ${colors.text}`}>
                  {benefit.stat}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              نظر مشتریان ما
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            هزاران نفر به ما اعتماد کرده‌اند
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="flex items-center gap-1 mb-4 justify-center md:justify-start">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-4 ring-indigo-100"
                />
                <div className="text-right">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
