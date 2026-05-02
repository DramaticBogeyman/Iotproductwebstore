import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Zap, Home, Sun, Camera, Lock, Thermometer, Lightbulb, Smartphone, Clock, TrendingDown, Users, Check, ArrowLeft, Star, Play, Wifi, Volume2, Eye, DollarSign, Maximize2, RefreshCw, MousePointer, Sparkles, Layers, Monitor } from 'lucide-react';
import { InteractiveRoom } from './InteractiveRoom';
import { CostCalculator } from './CostCalculator';
import { BeforeAfterComparison } from './BeforeAfterComparison';

export function SolutionsPage() {
  const [activeTab, setActiveTab] = useState(0);

  const solutions = [
    {
      icon: Shield,
      title: 'امنیت هوشمند',
      subtitle: 'حفاظت ۲۴/۷ از خانه شما',
      description: 'با سیستم‌های امنیتی پیشرفته ما، خانه خود را به دژی نفوذناپذیر تبدیل کنید.',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800',
      features: [
        'دوربین‌های 4K با دید شب رنگی',
        'تشخیص هوشمند چهره و حرکت',
        'هشدارهای فوری به موبایل',
        'ضبط ابری ۳۰ روزه رایگان'
      ],
      stats: { save: '۱۰۰٪', label: 'امنیت بیشتر' }
    },
    {
      icon: Zap,
      title: 'مدیریت انرژی',
      subtitle: 'صرفه‌جویی تا ۴۰٪ در هزینه‌ها',
      description: 'با ترموستات‌ها و پریزهای هوشمند، مصرف انرژی را بهینه کنید.',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800',
      features: [
        'کنترل خودکار دما و روشنایی',
        'گزارش‌های مصرف انرژی',
        'برنامه‌ریزی هوشمند با AI',
        'قطع خودکار دستگاه‌های بیکار'
      ],
      stats: { save: '۴۰٪', label: 'صرفه‌جویی انرژی' }
    },
    {
      icon: Sun,
      title: 'روشنایی هوشمند',
      subtitle: 'نورپردازی دلخواه در هر لحظه',
      description: 'نورپردازی خانه را با حال و هوای خود تنظیم کنید.',
      gradient: 'from-yellow-500 to-orange-500',
      bgGradient: 'from-yellow-50 to-orange-50',
      image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=800',
      features: [
        '۱۶ میلیون رنگ قابل انتخاب',
        'سناریوهای از پیش تعریف شده',
        'تنظیم خودکار با طلوع و غروب',
        'همگام‌سازی با موسیقی'
      ],
      stats: { save: '۶۰٪', label: 'مصرف کمتر' }
    },
    {
      icon: Home,
      title: 'اتوماسیون کامل',
      subtitle: 'کنترل همه چیز از یک مکان',
      description: 'همه دستگاه‌ها را به یک هاب مرکزی متصل کنید.',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      features: [
        'کنترل صوتی با دستیار هوش مصنوعی',
        'روتین‌های شخصی‌سازی شده',
        'مدیریت از هر نقطه جهان',
        'یکپارچگی با تمام دستگاه‌ها'
      ],
      stats: { save: '۵۰٪', label: 'زمان کمتر' }
    }
  ];

  const useCases = [
    {
      title: 'یک روز در خانه هوشمند',
      scenarios: [
        { time: '۶:۳۰ صبح', action: 'چراغ‌ها به آرامی روشن می‌شوند', icon: Sun },
        { time: '۷:۰۰ صبح', action: 'ترموستات دما را تنظیم می‌کند', icon: Thermometer },
        { time: '۸:۰۰ صبح', action: 'خانه به حالت امنیتی می‌رود', icon: Lock },
        { time: '۶:۰۰ عصر', action: 'دستگاه‌ها برای ورود شما آماده می‌شوند', icon: Home },
        { time: '۱۰:۰۰ شب', action: 'حالت خواب فعال می‌شود', icon: Lightbulb }
      ]
    }
  ];

  const packages = [
    {
      name: 'بسته پایه',
      price: '۱۵,۰۰۰,۰۰۰',
      description: 'برای شروع هوشمندسازی',
      features: [
        'هاب مرکزی',
        '۳ لامپ هوشمند',
        '۱ پریز هوشمند',
        'نصب و راه‌اندازی رایگان'
      ],
      popular: false,
      gradient: 'from-gray-500 to-gray-600'
    },
    {
      name: 'بسته حرفه‌ای',
      price: '۳۵,۰۰۰,۰۰۰',
      description: 'محبوب‌ترین انتخاب',
      features: [
        'هاب مرکزی پیشرفته',
        '۸ لامپ هوشمند',
        '۲ دوربین امنیتی',
        'ترموستات هوشمند',
        '۳ پریز هوشمند',
        'نصب و پشتیبانی ۱ ساله'
      ],
      popular: true,
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'بسته کامل',
      price: '۶۰,۰۰۰,۰۰۰',
      description: 'اتوماسیون کامل خانه',
      features: [
        '۲ هاب مرکزی',
        '۱۵ لامپ هوشمند',
        '۴ دوربین امنیتی 4K',
        '۲ ترموستات هوشمند',
        '۶ پریز هوشمند',
        'قفل هوشمند',
        'نصب و پشتیبانی ۲ ساله'
      ],
      popular: false,
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  const benefits = [
    { icon: TrendingDown, text: 'کاهش ۴۰٪ هزینه‌ها', color: 'green' },
    { icon: Clock, text: 'صرفه‌جویی در زمان', color: 'blue' },
    { icon: Shield, text: 'امنیت بیشتر', color: 'purple' },
    { icon: Users, text: 'راحتی برای همه', color: 'pink' }
  ];

  return (
    <div className="bg-white font-[Vazirmatn]">
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6">
              راهکارهای هوشمند
              <br />
              برای هر نیازی
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              زندگی راحت‌تر، امن‌تر و مقرون‌به‌صرفه‌تر با راهکارهای یکپارچه خانه هوشمند
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
                <benefit.icon className="w-10 h-10 text-white mx-auto mb-3" />
                <p className="text-white font-semibold">{benefit.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Interactive Solutions */}
      <div className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                راهکارهای ما
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              هر راهکار برای نیاز خاصی طراحی شده است
            </p>
          </motion.div>

          {/* Solution Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {solutions.map((solution, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === index
                    ? `bg-gradient-to-r ${solution.gradient} text-white shadow-lg`
                    : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
                }`}
              >
                {React.createElement(solution.icon, { className: `w-5 h-5 inline-block ml-2` })}
                {solution.title}
              </motion.button>
            ))}
          </div>

          {/* Active Solution Detail */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`bg-gradient-to-br ${solutions[activeTab].bgGradient} rounded-3xl overflow-hidden shadow-2xl`}
          >
            <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
              <div>
                <div className={`inline-flex p-4 bg-gradient-to-br ${solutions[activeTab].gradient} rounded-2xl shadow-lg mb-6`}>
                  {React.createElement(solutions[activeTab].icon, { className: "w-12 h-12 text-white" })}
                </div>
                <h3 className="text-3xl font-extrabold text-gray-900 mb-3">
                  {solutions[activeTab].title}
                </h3>
                <p className="text-xl text-gray-700 mb-6">
                  {solutions[activeTab].subtitle}
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {solutions[activeTab].description}
                </p>

                <div className="space-y-4 mb-8">
                  {solutions[activeTab].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="bg-green-100 rounded-full p-1">
                        <Check className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className={`bg-gradient-to-r ${solutions[activeTab].gradient} rounded-2xl p-6 text-white`}>
                  <div className="text-5xl font-extrabold mb-2">
                    {solutions[activeTab].stats.save}
                  </div>
                  <div className="text-lg">{solutions[activeTab].stats.label}</div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
                <img
                  src={solutions[activeTab].image}
                  alt={solutions[activeTab].title}
                  className="relative rounded-2xl shadow-2xl object-cover w-full h-full"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg">
                  <Play className="w-8 h-8 text-indigo-600" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Interactive Room Visualization */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-indigo-100 px-4 py-2 rounded-full mb-4">
              <Layers className="w-5 h-5 text-indigo-600" />
              <span className="text-sm font-bold text-indigo-700">تجربه تعاملی</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                خانه هوشمند خود را کشف کنید
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              روی هر دستگاه کلیک کنید تا جزئیات و مزایای آن را ببینید
            </p>
          </motion.div>

          <InteractiveRoom />
        </div>
      </div>

      {/* Before/After Comparison */}
      <div className="py-24 bg-gradient-to-br from-gray-50 to-indigo-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
              <Maximize2 className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-bold text-purple-700">مقایسه قبل و بعد</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                تفاوت را ببینید
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              زندگی قبل و بعد از هوشمندسازی چگونه تغییر می‌کند؟
            </p>
          </motion.div>

          <BeforeAfterComparison />
        </div>
      </div>

      {/* Cost Calculator */}
      <div className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <CostCalculator />
        </div>
      </div>

      {/* Use Case Timeline */}
      <div className="py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                یک روز در خانه هوشمند
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              ببینید خانه هوشمند چگونه زندگی شما را تغییر می‌دهد
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute right-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 transform translate-x-1/2 hidden lg:block"></div>

            <div className="space-y-8">
              {useCases[0].scenarios.map((scenario, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow border-2 border-gray-100">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-3">
                          {React.createElement(scenario.icon, { className: "w-6 h-6 text-white" })}
                        </div>
                        <span className="text-2xl font-bold text-gray-900">{scenario.time}</span>
                      </div>
                      <p className="text-lg text-gray-700">{scenario.action}</p>
                    </div>
                  </div>

                  <div className="hidden lg:block w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full ring-4 ring-white shadow-lg"></div>

                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Packages */}
      <div className="py-24 bg-gradient-to-br from-gray-50 to-indigo-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                پکیج‌های آماده
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              بسته‌های کامل برای هوشمندسازی خانه شما
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`relative bg-white rounded-3xl shadow-xl overflow-hidden ${
                  pkg.popular ? 'ring-4 ring-indigo-500' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center py-2 font-bold">
                    <Star className="w-5 h-5 inline-block ml-1" />
                    محبوب‌ترین
                  </div>
                )}

                <div className={`p-8 ${pkg.popular ? 'pt-16' : ''}`}>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>

                  <div className="mb-6">
                    <span className={`text-5xl font-extrabold bg-gradient-to-r ${pkg.gradient} bg-clip-text text-transparent`}>
                      {pkg.price}
                    </span>
                    <span className="text-gray-600 mr-2">تومان</span>
                  </div>

                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="bg-green-100 rounded-full p-1">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                      pkg.popular
                        ? `bg-gradient-to-r ${pkg.gradient} text-white shadow-lg hover:shadow-xl`
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    انتخاب پکیج
                    <ArrowLeft className="w-5 h-5 inline-block mr-2" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative py-24 overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              آماده تحول در خانه خود هستید؟
            </h2>
            <p className="text-xl text-white/90 mb-8">
              با کارشناسان ما تماس بگیرید و مشاوره رایگان دریافت کنید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-indigo-600 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/30 transition-all"
              >
                دریافت مشاوره رایگان
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white/10 backdrop-blur-md text-white rounded-2xl font-bold text-lg border-2 border-white/50 hover:bg-white/20 transition-all"
              >
                تماس با ما
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
