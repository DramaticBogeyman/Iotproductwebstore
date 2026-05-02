import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TrendingDown, Zap, DollarSign, Check } from 'lucide-react';

export function CostCalculator() {
  const [roomCount, setRoomCount] = useState(3);
  const [hasAC, setHasAC] = useState(true);
  const [hasSecurity, setHasSecurity] = useState(true);

  const calculateSavings = () => {
    const baseEnergy = roomCount * 500000;
    const acCost = hasAC ? 1500000 : 0;
    const securityCost = hasSecurity ? 800000 : 0;
    const totalMonthly = baseEnergy + acCost + securityCost;
    const savings = totalMonthly * 0.4;
    const yearlySavings = savings * 12;

    return {
      monthly: Math.round(totalMonthly),
      savings: Math.round(savings),
      yearly: Math.round(yearlySavings)
    };
  };

  const costs = calculateSavings();

  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-2xl">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-4">
          <DollarSign className="w-5 h-5 text-green-600" />
          <span className="text-sm font-bold text-green-700">ماشین حساب صرفه‌جویی</span>
        </div>
        <h3 className="text-3xl font-extrabold text-gray-900 mb-2">
          چقدر صرفه‌جویی می‌کنید؟
        </h3>
        <p className="text-gray-600">
          اطلاعات خود را وارد کنید تا میزان صرفه‌جویی را محاسبه کنیم
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Room Count Slider */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <label className="block text-gray-900 font-bold mb-4 text-right">
              تعداد اتاق‌ها: <span className="text-indigo-600">{roomCount}</span>
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={roomCount}
              onChange={(e) => setRoomCount(Number(e.target.value))}
              className="w-full h-3 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to left, #818cf8 0%, #818cf8 ${(roomCount / 10) * 100}%, #e0e7ff ${(roomCount / 10) * 100}%, #e0e7ff 100%)`
              }}
            />
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>۱</span>
              <span>۱۰</span>
            </div>
          </div>

          {/* Toggles */}
          <div className="bg-white rounded-2xl p-6 shadow-lg space-y-4">
            <div
              onClick={() => setHasAC(!hasAC)}
              className="flex items-center justify-between cursor-pointer p-4 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${
                  hasAC ? 'bg-indigo-600 border-indigo-600' : 'border-gray-300'
                }`}>
                  {hasAC && <Check className="w-4 h-4 text-white" />}
                </div>
                <span className="font-semibold text-gray-900">سیستم تهویه مطبوع</span>
              </div>
            </div>

            <div
              onClick={() => setHasSecurity(!hasSecurity)}
              className="flex items-center justify-between cursor-pointer p-4 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${
                  hasSecurity ? 'bg-indigo-600 border-indigo-600' : 'border-gray-300'
                }`}>
                  {hasSecurity && <Check className="w-4 h-4 text-white" />}
                </div>
                <span className="font-semibold text-gray-900">سیستم امنیتی</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-4">
          {/* Current Cost */}
          <motion.div
            key={costs.monthly}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-red-100 p-3 rounded-xl">
                <Zap className="w-6 h-6 text-red-600" />
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">هزینه فعلی ماهانه</div>
                <div className="text-2xl font-extrabold text-gray-900">
                  {costs.monthly.toLocaleString('fa-IR')} تومان
                </div>
              </div>
            </div>
          </motion.div>

          {/* Monthly Savings */}
          <motion.div
            key={costs.savings}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 shadow-lg text-white"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-white/20 p-3 rounded-xl">
                <TrendingDown className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-sm text-green-100">صرفه‌جویی ماهانه</div>
                <div className="text-3xl font-extrabold">
                  {costs.savings.toLocaleString('fa-IR')} تومان
                </div>
              </div>
            </div>
            <div className="text-sm bg-white/20 rounded-lg px-3 py-2 text-center">
              معادل ۴۰٪ کاهش هزینه
            </div>
          </motion.div>

          {/* Yearly Savings */}
          <motion.div
            key={costs.yearly}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 shadow-lg text-white"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-white/20 p-3 rounded-xl">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-sm text-indigo-100">صرفه‌جویی سالانه</div>
                <div className="text-3xl font-extrabold">
                  {costs.yearly.toLocaleString('fa-IR')} تومان
                </div>
              </div>
            </div>
            <div className="text-sm bg-white/20 rounded-lg px-3 py-2 text-center">
              بازگشت سرمایه در کمتر از ۲ سال
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center"
      >
        <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all">
          همین الان شروع کنید
        </button>
      </motion.div>
    </div>
  );
}
