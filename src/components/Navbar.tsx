import React from 'react';
import { Phone, ShoppingBag } from 'lucide-react';
import type { RestaurantInfo } from '../types';

interface Props {
  restaurant: RestaurantInfo;
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<Props> = ({ restaurant, cartCount, onOpenCart }) => {
  return (
    <header className="site-nav">
      <div className="container nav-container">
        
        {/* Brand Logo */}
        <a href="#" className="brand-logo" aria-label="زنجر كينج الصفحة الرئيسية">
          <div className="logo-badge">ZK</div>
          <div className="brand-text">
            <h1>{restaurant.name_ar}</h1>
            <span>{restaurant.name_en.toUpperCase()} CAFETERIA</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav aria-label="التنقل الرئيسي">
          <ul className="nav-links">
            <li><a href="#hero" className="nav-link">الرئيسية</a></li>
            <li><a href="#menu" className="nav-link">قائمة الطعام</a></li>
            <li><a href="#late-night" className="nav-link">ميزة ٢:٣٠ فجراً 🌙</a></li>
            <li><a href="#services" className="nav-link">خدماتنا</a></li>
            <li><a href="#gallery" className="nav-link">من مطبخنا</a></li>
            <li><a href="#reviews" className="nav-link">آراء العملاء</a></li>
            <li><a href="#location" className="nav-link">الموقع والتواصل</a></li>
          </ul>
        </nav>

        {/* Nav Actions */}
        <div className="nav-actions">
          <a href={`tel:${restaurant.phone.replace(/\s+/g, '')}`} className="btn-header-call" aria-label="اتصل بالمطعم مباشرة">
            <Phone size={16} />
            <span>{restaurant.phone}</span>
          </a>

          <button type="button" className="btn-cart-trigger" onClick={onOpenCart} aria-label="فتح سلة الطلبات">
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="cart-counter">{cartCount}</span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
};
