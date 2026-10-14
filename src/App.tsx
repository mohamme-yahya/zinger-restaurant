import React, { useState, useEffect, useCallback } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { RESTAURANT_DATA, MENU_ITEMS } from './data/menuData';
import type { CartItem, MenuItem } from './types';
import { TopAnnouncement } from './components/TopAnnouncement';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LateNightBanner } from './components/LateNightBanner';
import { Services } from './components/Services';
import { MenuSection } from './components/MenuSection';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { LocationSection } from './components/LocationSection';
import { CartDrawer } from './components/CartDrawer';
import { FloatingActionBar } from './components/FloatingActionBar';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('zinker_react_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isOpenNow, setIsOpenNow] = useState(true);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('zinker_react_cart', JSON.stringify(cart));
    } catch (e) {
      console.warn('LocalStorage save failed', e);
    }
  }, [cart]);

  // Live status calculation (Saudi UTC+3)
  const checkOpenStatus = useCallback(() => {
    const now = new Date();
    const utcHours = now.getUTCHours();
    const utcMinutes = now.getUTCMinutes();
    const saudiHours = (utcHours + 3) % 24;
    const currentDecimalHour = saudiHours + (utcMinutes / 60);

    // Open from 12:00 PM (12.0) to 2:30 AM (2.5)
    const open = currentDecimalHour >= 12.0 || currentDecimalHour < 2.5;
    setIsOpenNow(open);
  }, []);

  useEffect(() => {
    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, [checkOpenStatus]);

  // Toast helper
  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 2800);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  // Cart actions
  const handleAddToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [
        ...prev,
        {
          id: item.id,
          name_ar: item.name_ar,
          name_en: item.name_en,
          price: item.price,
          img: item.img,
          quantity: 1
        }
      ];
    });
    showToast(`تمت إضافة "${item.name_ar}" إلى سلتك 🛒`);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart(prev => {
      return prev
        .map(item => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null);
    });
  };

  const handleRemoveItem = (id: string) => {
    setCart(prev => prev.filter(i => i.id !== id));
    showToast('تم حذف الوجبة من السلة');
  };

  const totalCartCount = cart.reduce((sum, i) => sum + i.quantity, 0);

  // Close cart with ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsCartOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Top Announcement Bar */}
      <TopAnnouncement isOpen={isOpenNow} />

      {/* Main Navbar */}
      <Navbar 
        restaurant={RESTAURANT_DATA} 
        cartCount={totalCartCount} 
        onOpenCart={() => setIsCartOpen(true)} 
      />

      {/* Main Page Content */}
      <main>
        <Hero 
          restaurant={RESTAURANT_DATA} 
        />

        <LateNightBanner 
          restaurant={RESTAURANT_DATA} 
          onOpenCart={() => setIsCartOpen(true)} 
        />

        <Services />

        <MenuSection 
          items={MENU_ITEMS} 
          onAddToCart={handleAddToCart} 
        />

        <Gallery />

        <Reviews restaurant={RESTAURANT_DATA} />

        <LocationSection 
          restaurant={RESTAURANT_DATA} 
          isOpen={isOpenNow} 
        />
      </main>

      {/* Sticky Bottom Floating Bar */}
      <FloatingActionBar 
        restaurant={RESTAURANT_DATA} 
        cartCount={totalCartCount} 
        onOpenCart={() => setIsCartOpen(true)} 
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        restaurant={RESTAURANT_DATA}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      {/* Toast Feedback */}
      {toastMessage && (
        <div className="toast-container" aria-live="polite">
          <div className="toast">
            <CheckCircle2 size={18} color="var(--primary)" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Site Footer */}
      <Footer restaurant={RESTAURANT_DATA} />
    </>
  );
};

export default App;
