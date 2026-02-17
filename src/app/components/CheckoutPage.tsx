import React from 'react';
import { motion } from 'motion/react';
import { CreditCard, Truck, MapPin, Check } from 'lucide-react';
import { formatPrice } from '../utils/format';
import { toast } from 'sonner';

interface CheckoutPageProps {
  cartItems: { id: string; name: string; price: number; quantity: number; image: string }[];
  onOrderSuccess: () => void;
}

export function CheckoutPage({ cartItems, onOrderSuccess }: CheckoutPageProps) {
  const [step, setStep] = React.useState(1);
  const [loading, setLoading] = React.useState(false);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 2000000 ? 0 : 50000;
  const total = subtotal + shipping;

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        toast.success('سفارش شما با موفقیت ثبت شد!');
        onOrderSuccess();
      }, 2000);
    }
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen font-[Vazirmatn]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">تکمیل خرید</h1>

        <div className="flex justify-center mb-12">
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${step >= 1 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500'}`}>1</div>
            <div className={`w-20 h-1 ${step >= 2 ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${step >= 2 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500'}`}>2</div>
            <div className={`w-20 h-1 ${step >= 3 ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${step >= 3 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500'}`}>3</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form Area */}
          <div className="lg:col-span-2">
            <motion.div 
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-2xl shadow-sm p-8"
            >
              <form onSubmit={handleNextStep}>
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
                      <MapPin className="w-5 h-5 text-indigo-600" />
                      آدرس تحویل
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">استان</label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none bg-white">
                          <option>تهران</option>
                          <option>اصفهان</option>
                          <option>فارس</option>
                          <option>خراسان رضوی</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">شهر</label>
                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" required />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">آدرس پستی</label>
                        <textarea rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none resize-none" required></textarea>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">کد پستی</label>
                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">شماره موبایل گیرنده</label>
                        <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" required />
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
                      <Truck className="w-5 h-5 text-indigo-600" />
                      شیوه ارسال
                    </h2>
                    <div className="space-y-4">
                      <label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                        <input type="radio" name="shipping" className="text-indigo-600 focus:ring-indigo-500" defaultChecked />
                        <div className="mr-4 flex-1">
                          <div className="flex justify-between">
                            <span className="font-bold text-gray-900">پست پیشتاز</span>
                            <span className="font-bold text-green-600">۵۰,۰۰۰ تومان</span>
                          </div>
                          <p className="text-sm text-gray-500">تحویل ۲ تا ۴ روز کاری</p>
                        </div>
                      </label>
                      <label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                        <input type="radio" name="shipping" className="text-indigo-600 focus:ring-indigo-500" />
                        <div className="mr-4 flex-1">
                          <div className="flex justify-between">
                            <span className="font-bold text-gray-900">پیک موتوری (فقط تهران)</span>
                            <span className="font-bold text-indigo-600">۱۲۰,۰۰۰ تومان</span>
                          </div>
                          <p className="text-sm text-gray-500">تحویل فوری (۲ تا ۳ ساعت)</p>
                        </div>
                      </label>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
                      <CreditCard className="w-5 h-5 text-indigo-600" />
                      پرداخت
                    </h2>
                    <div className="space-y-4">
                      <label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-gray-50 transition-colors bg-indigo-50 border-indigo-200">
                        <input type="radio" name="payment" className="text-indigo-600 focus:ring-indigo-500" defaultChecked />
                        <div className="mr-4 flex-1">
                          <span className="font-bold text-gray-900 block">پرداخت اینترنتی</span>
                          <span className="text-sm text-gray-500">پرداخت با کلیه کارت‌های عضو شتاب</span>
                        </div>
                        <CreditCard className="w-6 h-6 text-indigo-600" />
                      </label>
                      <label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                        <input type="radio" name="payment" className="text-indigo-600 focus:ring-indigo-500" />
                        <div className="mr-4 flex-1">
                          <span className="font-bold text-gray-900 block">پرداخت در محل</span>
                          <span className="text-sm text-gray-500">فقط برای سفارش‌های تهران</span>
                        </div>
                        <Truck className="w-6 h-6 text-gray-400" />
                      </label>
                    </div>
                  </div>
                )}

                <div className="mt-8 flex justify-between">
                  {step > 1 && (
                    <button 
                      type="button" 
                      onClick={() => setStep(step - 1)}
                      className="text-gray-600 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      مرحله قبل
                    </button>
                  )}
                  <button 
                    type="submit" 
                    disabled={loading}
                    className={`bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-indigo-700 transition-colors shadow-md mr-auto ${step === 1 ? 'w-full md:w-auto' : ''}`}
                  >
                    {loading ? 'در حال پردازش...' : (step === 3 ? 'پرداخت و تکمیل خرید' : 'مرحله بعد')}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4">خلاصه سفارش</h3>
              <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-1">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-start text-sm">
                    <div className="flex gap-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-md overflow-hidden shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 line-clamp-1">{item.name}</p>
                        <p className="text-gray-500">تعداد: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="text-gray-900 font-medium whitespace-nowrap">{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-100 pt-4 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>قیمت کالاها ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>هزینه ارسال</span>
                  <span className={shipping === 0 ? 'text-green-600' : ''}>
                    {shipping === 0 ? 'رایگان' : formatPrice(shipping)}
                  </span>
                </div>
                {shipping === 0 && (
                  <p className="text-xs text-green-600 text-right mt-1">ارسال رایگان برای خریدهای بالای ۲ میلیون تومان</p>
                )}
              </div>

              <div className="border-t border-gray-100 pt-4 mt-4">
                <div className="flex justify-between text-lg font-bold text-gray-900">
                  <span>مبلغ قابل پرداخت</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
