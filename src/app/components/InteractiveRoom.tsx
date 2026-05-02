import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Camera, Thermometer, Lock, Wifi, Volume2 } from 'lucide-react';

export function InteractiveRoom() {
  const [activeDevice, setActiveDevice] = useState<string | null>(null);

  const devices = [
    {
      id: 'light',
      icon: Lightbulb,
      name: 'لامپ هوشمند',
      position: { top: '15%', left: '25%' },
      color: 'from-yellow-400 to-orange-500',
      description: 'کنترل رنگ و شدت نور',
      benefit: '۶۰٪ صرفه‌جویی انرژی'
    },
    {
      id: 'camera',
      icon: Camera,
      name: 'دوربین امنیتی',
      position: { top: '20%', right: '20%' },
      color: 'from-blue-400 to-cyan-500',
      description: 'نظارت ۲۴/۷ با کیفیت 4K',
      benefit: 'امنیت کامل'
    },
    {
      id: 'thermostat',
      icon: Thermometer,
      name: 'ترموستات',
      position: { top: '50%', right: '30%' },
      color: 'from-green-400 to-emerald-500',
      description: 'تنظیم خودکار دما',
      benefit: '۴۰٪ کاهش هزینه'
    },
    {
      id: 'lock',
      icon: Lock,
      name: 'قفل هوشمند',
      position: { bottom: '25%', left: '15%' },
      color: 'from-purple-400 to-pink-500',
      description: 'کنترل دسترسی با اثر انگشت',
      benefit: 'امنیت پیشرفته'
    },
    {
      id: 'hub',
      icon: Wifi,
      name: 'هاب مرکزی',
      position: { bottom: '30%', right: '25%' },
      color: 'from-indigo-400 to-purple-500',
      description: 'کنترل همه دستگاه‌ها',
      benefit: 'مدیریت متمرکز'
    },
    {
      id: 'speaker',
      icon: Volume2,
      name: 'اسپیکر هوشمند',
      position: { top: '45%', left: '20%' },
      color: 'from-pink-400 to-rose-500',
      description: 'دستیار صوتی هوش مصنوعی',
      benefit: 'کنترل صوتی'
    }
  ];

  return (
    <div className="relative">
      <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl aspect-video">
        {/* Room Background */}
        <img
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=675&fit=crop"
          alt="اتاق هوشمند"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-pink-900/40"></div>

        {/* Interactive Devices */}
        {devices.map((device) => (
          <motion.div
            key={device.id}
            className="absolute"
            style={device.position}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: Math.random() * 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveDevice(activeDevice === device.id ? null : device.id)}
              className="relative cursor-pointer"
            >
              {/* Pulse Animation */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`absolute inset-0 bg-gradient-to-r ${device.color} rounded-full blur-xl`}
              />

              {/* Device Icon */}
              <div className={`relative bg-gradient-to-br ${device.color} p-4 rounded-full shadow-2xl ring-4 ring-white/50`}>
                <device.icon className="w-6 h-6 text-white" />
              </div>

              {/* Connection Lines */}
              {activeDevice === device.id && (
                <motion.div
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  className="absolute inset-0"
                >
                  <svg className="absolute inset-0 w-full h-full overflow-visible">
                    <motion.circle
                      cx="50%"
                      cy="50%"
                      r="40"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <defs>
                      <linearGradient id="gradient">
                        <stop offset="0%" stopColor="#818cf8" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
              )}
            </motion.div>

            {/* Device Info Popup */}
            <AnimatePresence>
              {activeDevice === device.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 z-50 w-64"
                >
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-4 border-2 border-indigo-100">
                    <h4 className="font-bold text-gray-900 mb-2 text-right">{device.name}</h4>
                    <p className="text-sm text-gray-600 mb-2 text-right">{device.description}</p>
                    <div className={`inline-block px-3 py-1 bg-gradient-to-r ${device.color} text-white text-xs font-bold rounded-full`}>
                      {device.benefit}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}

        {/* Info Overlay */}
        <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
          <div className="flex items-center gap-3 text-white">
            <MousePointer className="w-6 h-6" />
            <p className="text-sm font-semibold">
              روی هر دستگاه کلیک کنید تا جزئیات را ببینید
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
