import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ChevronLeft, ChevronRight, Sparkles, Shield, Zap } from 'lucide-react';

interface HeroSlideshowProps {
  onShopNow: () => void;
}

export function HeroSlideshow({ onShopNow }: HeroSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'آینده زندگی هوشمند شما',
      subtitle: 'تجربه خانه هوشمند با جدیدترین فناوری IoT',
      description: 'کنترل کامل خانه از کف دست شما با دستگاه‌های هوشمند پیشرفته',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&h=1080',
      gradient: 'from-indigo-600 to-purple-600',
      icon: Sparkles,
      badge: 'جدیدترین محصولات'
    },
    {
      title: 'امنیت پیشرفته برای خانه شما',
      subtitle: 'دوربین‌ها و سنسورهای هوشمند',
      description: 'مراقبت ۲۴ساعته با تشخیص هوشمند و هشدارهای فوری',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&h=1080',
      gradient: 'from-blue-600 to-cyan-600',
      icon: Shield,
      badge: 'امنیت هوشمند'
    },
    {
      title: 'صرفه‌جویی ۴۰٪ در مصرف انرژی',
      subtitle: 'سیستم‌های هوشمند مدیریت انرژی',
      description: 'کاهش هزینه‌ها با ترموستات و روشنایی هوشمند',
      image: 'https://images.unsplash.com/photo-1558618047-51f0ff1f3e0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&h=1080',
      gradient: 'from-green-600 to-emerald-600',
      icon: Zap,
      badge: 'صرفه‌جویی انرژی'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[600px] lg:h-[700px] overflow-hidden bg-gray-900 font-[Vazirmatn]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].gradient} opacity-80`}></div>
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl text-right">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full shadow-lg mb-6 border border-white/30"
                >
                  {React.createElement(slides[currentSlide].icon, { className: "w-5 h-5 text-white" })}
                  <span className="text-sm font-semibold text-white">
                    {slides[currentSlide].badge}
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
                >
                  {slides[currentSlide].title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-2xl sm:text-3xl text-white/95 font-bold mb-4"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed"
                >
                  {slides[currentSlide].description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onShopNow}
                    className="group px-10 py-5 bg-white text-gray-900 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/30 transition-all flex items-center justify-center"
                  >
                    مشاهده محصولات
                    <ArrowLeft className="mr-2 w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-white/20 backdrop-blur-md text-white rounded-2xl font-bold text-lg border-2 border-white/50 hover:bg-white/30 transition-all flex items-center justify-center"
                  >
                    درباره ما بیشتر بدانید
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full transition-all z-10 border border-white/30"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full transition-all z-10 border border-white/30"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all rounded-full ${
              index === currentSlide
                ? 'w-12 h-3 bg-white'
                : 'w-3 h-3 bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white font-semibold border border-white/30">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
}
