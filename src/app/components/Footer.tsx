import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 font-[Vazirmatn]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight text-white">فروشگاه IoT</h3>
            <p className="text-gray-400 text-sm">زندگی خود را با تکنولوژی هوشمند توانمند کنید. ایمن، کارآمد و آسان برای استفاده.</p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">فروشگاه</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">هاب‌ها و پل‌ها</a></li>
              <li><a href="#" className="hover:text-white transition-colors">روشنایی</a></li>
              <li><a href="#" className="hover:text-white transition-colors">دوربین‌های امنیتی</a></li>
              <li><a href="#" className="hover:text-white transition-colors">قفل‌های هوشمند</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ترموستات‌ها</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">پشتیبانی</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">وضعیت سفارش</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ارسال و بازگشت</a></li>
              <li><a href="#" className="hover:text-white transition-colors">راهنمای محصولات</a></li>
              <li><a href="#" className="hover:text-white transition-colors">گارانتی</a></li>
              <li><a href="#" className="hover:text-white transition-colors">تماس با ما</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">تماس</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> خیابان تکنولوژی، تهران، ایران</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> ۰۲۱-۱۲۳۴۵۶۷۸</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> support@iotstore.ir</li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} فروشگاه IoT. تمامی حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
}
