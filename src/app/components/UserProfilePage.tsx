import React from 'react';
import { User, ShoppingBag, MapPin, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export function UserProfilePage() {
  const [activeTab, setActiveTab] = React.useState('profile');

  const orders = [
    { id: '#12345', date: '۱۴۰۲/۰۲/۱۵', status: 'تحویل شده', total: '۵,۸۰۰,۰۰۰ تومان' },
    { id: '#12346', date: '۱۴۰۲/۰۳/۰۱', status: 'در حال پردازش', total: '۹۵۰,۰۰۰ تومان' },
  ];

  return (
    <div className="py-12 bg-gray-50 min-h-screen font-[Vazirmatn]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">حساب کاربری من</h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 shrink-0">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden sticky top-24">
              <div className="p-6 text-center border-b border-gray-100">
                <div className="w-20 h-20 bg-indigo-100 rounded-full mx-auto flex items-center justify-center text-indigo-600 mb-4">
                  <User className="w-10 h-10" />
                </div>
                <h3 className="font-bold text-gray-900">علی محمدی</h3>
                <p className="text-sm text-gray-500">ali@example.com</p>
              </div>
              <nav className="p-2 space-y-1">
                <button 
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'profile' ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <User className="w-5 h-5" />
                  اطلاعات شخصی
                </button>
                <button 
                  onClick={() => setActiveTab('orders')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'orders' ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <ShoppingBag className="w-5 h-5" />
                  سفارش‌ها
                </button>
                <button 
                  onClick={() => setActiveTab('addresses')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'addresses' ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <MapPin className="w-5 h-5" />
                  آدرس‌ها
                </button>
                <button 
                  onClick={() => setActiveTab('wishlist')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'wishlist' ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <Heart className="w-5 h-5" />
                  علاقه‌مندی‌ها
                </button>
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 bg-white rounded-2xl shadow-sm p-8">
            {activeTab === 'profile' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">ویرایش اطلاعات</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">نام</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" defaultValue="علی" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">نام خانوادگی</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" defaultValue="محمدی" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ایمیل</label>
                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" defaultValue="ali@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">شماره موبایل</label>
                    <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" defaultValue="09123456789" />
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">ذخیره تغییرات</button>
                </div>
              </motion.div>
            )}

            {activeTab === 'orders' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">تاریخچه سفارش‌ها</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-right text-gray-600">
                    <thead className="text-gray-900 bg-gray-50 border-b border-gray-100">
                      <tr>
                        <th className="px-4 py-3 rounded-tr-lg">شماره سفارش</th>
                        <th className="px-4 py-3">تاریخ</th>
                        <th className="px-4 py-3">وضعیت</th>
                        <th className="px-4 py-3 rounded-tl-lg">مبلغ کل</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order) => (
                        <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                          <td className="px-4 py-4 font-medium">{order.id}</td>
                          <td className="px-4 py-4">{order.date}</td>
                          <td className="px-4 py-4">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${order.status === 'تحویل شده' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="px-4 py-4">{order.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
            
             {/* Placeholders for other tabs */}
             {activeTab === 'addresses' && (
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                 <p className="text-gray-500">لیست آدرس‌ها اینجا نمایش داده می‌شود.</p>
               </motion.div>
             )}
             {activeTab === 'wishlist' && (
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                 <p className="text-gray-500">لیست علاقه‌مندی‌ها اینجا نمایش داده می‌شود.</p>
               </motion.div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
}
