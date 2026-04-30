import React from 'react';
import { motion } from 'motion/react';
import { Target, Users, Award, TrendingUp, Heart, Lightbulb } from 'lucide-react';

export function AboutSection() {
  const values = [
    {
      icon: Lightbulb,
      title: 'نوآوری',
      description: 'همیشه در خط مقدم فناوری',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Heart,
      title: 'مشتری‌مداری',
      description: 'رضایت شما اولویت ماست',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: Award,
      title: 'کیفیت برتر',
      description: 'بهترین محصولات بازار',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Users,
      title: 'تیم حرفه‌ای',
      description: 'متخصصان مجرب در کنار شما',
      gradient: 'from-blue-500 to-cyan-500'
    }
  ];

  const stats = [
    {
      number: '۸+',
      label: 'سال تجربه',
      icon: TrendingUp,
      color: 'indigo'
    },
    {
      number: '۵۰۰۰+',
      label: 'مشتری راضی',
      icon: Users,
      color: 'purple'
    },
    {
      number: '۱۰۰+',
      label: 'محصول متنوع',
      icon: Target,
      color: 'pink'
    },
    {
      number: '۹۸٪',
      label: 'نرخ رضایت',
      icon: Award,
      color: 'green'
    }
  ];

  const colorClasses = {
    indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', gradient: 'from-indigo-500 to-purple-500' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', gradient: 'from-purple-500 to-pink-500' },
    pink: { bg: 'bg-pink-100', text: 'text-pink-600', gradient: 'from-pink-500 to-rose-500' },
    green: { bg: 'bg-green-100', text: 'text-green-600', gradient: 'from-green-500 to-emerald-500' }
  };

  return (
    <div className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-indigo-50/30 overflow-hidden font-[Vazirmatn]">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-40 -right-20 w-96 h-96 bg-gradient-to-br from-indigo-200/40 to-purple-200/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-pink-200/40 to-orange-200/40 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              درباره ما
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ما در تلاشیم تا با ارائه بهترین محصولات IoT، زندگی هوشمندتر و راحت‌تری را برای شما رقم بزنیم
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=600"
              alt="تیم ما"
              className="relative rounded-3xl shadow-2xl object-cover w-full h-[400px] lg:h-[500px]"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-extrabold text-gray-900">۸+ سال</div>
                  <div className="text-sm text-gray-600">تجربه در صنعت</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
              پیشگام در فناوری خانه هوشمند
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              ما بیش از ۸ سال است که در زمینه ارائه راهکارهای هوشمند خانگی فعالیت می‌کنیم.
              هدف ما این است که با بهره‌گیری از جدیدترین فناوری‌های IoT، زندگی شما را ساده‌تر،
              ایمن‌تر و لذت‌بخش‌تر کنیم.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              تیم ما متشکل از متخصصان مجرب در حوزه فناوری، طراحی و خدمات مشتریان است که
              با تمام وجود برای ارائه بهترین تجربه به شما تلاش می‌کنند.
            </p>
            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-500/50 hover:shadow-indigo-600/60 transition-all"
              >
                بیشتر بدانید
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
            ارزش‌های ما
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all text-center"
              >
                <div className={`inline-flex p-4 bg-gradient-to-br ${value.gradient} rounded-2xl shadow-lg mb-4`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
        >
          <h3 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
            دستاوردهای ما
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const colors = colorClasses[stat.color as keyof typeof colorClasses];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`inline-flex p-4 ${colors.bg} rounded-2xl mb-4`}>
                    <stat.icon className={`w-8 h-8 ${colors.text}`} />
                  </div>
                  <div className={`text-4xl font-extrabold mb-2 bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-semibold">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
