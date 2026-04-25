import React from 'react';
import { FileText, Download, Eye } from 'lucide-react';

interface CatalogViewerProps {
  catalogPDF?: string;
  productName: string;
}

export function CatalogViewer({ catalogPDF, productName }: CatalogViewerProps) {
  if (!catalogPDF) {
    return null;
  }

  const handleDownload = () => {
    console.log('دانلود کاتالوگ:', catalogPDF);
  };

  const handleView = () => {
    console.log('مشاهده کاتالوگ:', catalogPDF);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-4">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <FileText className="w-6 h-6" />
          کاتالوگ محصول
        </h3>
      </div>

      <div className="p-6">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border-2 border-dashed border-gray-300 mb-6">
          <div className="text-center">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-10 h-10 text-green-600" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              کاتالوگ فنی {productName}
            </h4>
            <p className="text-sm text-gray-600 mb-1">فرمت: PDF</p>
            <p className="text-sm text-gray-500">شامل مشخصات فنی، راهنمای نصب و استفاده</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={handleView}
            className="bg-indigo-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-indigo-700 active:scale-[0.98] transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2"
          >
            <Eye className="w-5 h-5" />
            مشاهده آنلاین
          </button>
          <button
            onClick={handleDownload}
            className="bg-green-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-green-700 active:scale-[0.98] transition-all shadow-lg shadow-green-200 flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            دانلود PDF
          </button>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4 text-center">
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold text-indigo-600 mb-1">۲۴</p>
            <p className="text-xs text-gray-600">صفحه</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold text-green-600 mb-1">۳.۵</p>
            <p className="text-xs text-gray-600">مگابایت</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold text-purple-600 mb-1">فارسی</p>
            <p className="text-xs text-gray-600">زبان</p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-green-50 rounded-lg">
          <p className="text-sm text-green-800">
            <strong>محتویات کاتالوگ:</strong> مشخصات کامل فنی، راهنمای نصب گام‌به‌گام، دستورالعمل‌های ایمنی، راهنمای عیب‌یابی و پاسخ به سوالات متداول.
          </p>
        </div>
      </div>
    </div>
  );
}
