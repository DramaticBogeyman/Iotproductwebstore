import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSlideshow } from './components/HeroSlideshow';
import { ProductList } from './components/ProductList';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductDetail } from './components/ProductDetail';
import { SolutionsPage } from './components/SolutionsPage';
import { SupportPage } from './components/SupportPage';
import { UserProfilePage } from './components/UserProfilePage';
import { CheckoutPage } from './components/CheckoutPage';
import { FeaturesSection } from './components/FeaturesSection';
import { BenefitsSection } from './components/BenefitsSection';
import { CTASection } from './components/CTASection';
import { Product } from './data/products';
import { Toaster, toast } from 'sonner';

interface CartItem extends Product {
  quantity: number;
}

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        toast.success(`تعداد ${product.name} افزایش یافت`);
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      toast.success(`${product.name} به سبد خرید اضافه شد`);
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    toast.info('محصول از سبد خرید حذف شد');
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product-detail');
    window.scrollTo(0, 0);
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
    if (page === 'home') {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    }
  };

  const scrollToProducts = () => {
    if (currentPage !== 'home') {
      handleNavigate('home');
      setTimeout(() => {
        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    handleNavigate('checkout');
  };

  const handleOrderSuccess = () => {
    setCartItems([]);
    handleNavigate('profile');
  };

  return (
    <div dir="rtl" className="min-h-screen bg-white font-[Vazirmatn] text-gray-900 selection:bg-indigo-100 selection:text-indigo-900 text-right">
      <Toaster position="top-center" richColors dir="rtl" />
      
      <Navbar 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)}
        onNavigate={handleNavigate}
      />

      <main className="pt-16 min-h-screen">
        {currentPage === 'home' && (
          <>
            <HeroSlideshow onShopNow={scrollToProducts} />
            <FeaturesSection />
            <ProductList onAddToCart={addToCart} onProductClick={handleProductClick} />
            <BenefitsSection />
            <CTASection onShopNow={scrollToProducts} />
          </>
        )}
        
        {currentPage === 'products' && (
          <ProductList onAddToCart={addToCart} onProductClick={handleProductClick} />
        )}

        {currentPage === 'product-detail' && selectedProduct && (
          <ProductDetail 
            product={selectedProduct} 
            onAddToCart={addToCart}
            onBack={() => handleNavigate('products')}
          />
        )}

        {currentPage === 'solutions' && <SolutionsPage />}
        
        {currentPage === 'support' && <SupportPage />}
        
        {currentPage === 'profile' && <UserProfilePage />}
        
        {currentPage === 'checkout' && (
          <CheckoutPage 
            cartItems={cartItems} 
            onOrderSuccess={handleOrderSuccess} 
          />
        )}
      </main>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems} 
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onCheckout={handleCheckout}
      />
    </div>
  );
}
