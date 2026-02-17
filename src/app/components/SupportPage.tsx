import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { toast } from 'sonner';

export function SupportPage() {
  const [activeFaq, setActiveFaq] = React.useState<number | null>(null);

  const faqs = [
    {
      question: 'چگونه دستگاه را نصب کنم؟',
      answer: 'تمام محصولات ما همراه با دفترچه راهنمای تصویری ارسال می‌شوند. همچنین می‌توانید ویدیوهای آموزشی را در کانال یوتیوب ما مشاهده کنید.'
    },
    {
      question: 'آیا محصولات دارای گارانتی هستند؟',
      answer: 'بله، تمامی محصولات ما دارای ۲۴ ماه گارانتی تعویض و ۵ سال خدمات پس از فروش هستند.'
    },
    {
      question: 'زمان ارسال چقدر است؟',
      answer: 'سفارشات تهران ۲۴ ساعته و شهرستان‌ها بین ۳ تا ۵ روز کاری تحویل داده می‌شوند.'
    },
    {
      question: 'چگونه می‌توانم محصول را مرجوع کنم؟',
      answer: 'در صورت وجود مشکل فنی تا ۷ روز مهلت تست دارید. با پشتیبانی تماس بگیرید تا هماهنگی‌های لازم انجام شود.'
    }
  ];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('پیام شما ارسال شد. همکاران ما به زودی با شما تماس خواهند گرفت.');
    // In a real app, send data to backend
  };

  return (
    <div className="py-12 bg-white font-[Vazirmatn]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">پشتیبانی و تماس با ما</h1>
          <p className="text-lg text-gray-500">
            ما اینجا هستیم تا به تمام سوالات شما پاسخ دهیم.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-indigo-50 p-6 rounded-2xl text-center hover:shadow-md transition-shadow">
            <Phone className="w-8 h-8 text-indigo-600 mx-auto mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">تلفن</h3>
            <p className="text-gray-600">۰۲۱-۱۲۳۴۵۶۷۸</p>
            <p className="text-xs text-gray-400 mt-2">شنبه تا پنجشنبه ۸-۱۷</p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-2xl text-center hover:shadow-md transition-shadow">
            <Mail className="w-8 h-8 text-indigo-600 mx-auto mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">ایمیل</h3>
            <p className="text-gray-600">support@iotstore.ir</p>
            <p className="text-xs text-gray-400 mt-2">پاسخگویی ۲۴ ساعته</p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-2xl text-center hover:shadow-md transition-shadow">
            <MessageCircle className="w-8 h-8 text-indigo-600 mx-auto mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">چت آنلاین</h3>
            <p className="text-gray-600">شروع گفتگو</p>
            <p className="text-xs text-gray-400 mt-2">زمان انتظار: ۵ دقیقه</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* FAQ Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">سوالات متداول</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-100 rounded-xl overflow-hidden">
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 text-right transition-colors"
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    {activeFaq === index ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                  </button>
                  <motion.div 
                    initial={false}
                    animate={{ height: activeFaq === index ? 'auto' : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">ارسال پیام</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">نام و نام خانوادگی</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow outline-none" placeholder="علی محمدی" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ایمیل</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow outline-none" placeholder="ali@example.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">موضوع</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow outline-none" placeholder="مشکل فنی" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">پیام</label>
                <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow outline-none resize-none" placeholder="پیام خود را بنویسید..." required></textarea>
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition-colors shadow-md">
                ارسال پیام
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
