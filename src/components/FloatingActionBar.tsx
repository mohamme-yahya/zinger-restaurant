import React from 'react';
import { MessageCircle, Phone, ShoppingBag, MapPin } from 'lucide-react';
import type { RestaurantInfo } from '../types';

interface Props {
  restaurant: RestaurantInfo;
  cartCount: number;
  onOpenCart: () => void;
}

export const FloatingActionBar: React.FC<Props> = ({
  restaurant,
  cartCount,
  onOpenCart
}) => {
  return (
    <aside className="floating-action-bar" aria-label="شريط الوصول السريع">
      
      {/* WhatsApp Direct Order */}
      <a 
        href={`https://wa.me/${restaurant.whatsapp_number}?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%B7%D9%84%D8%A8%20%D9%85%D9%86%20%D8%B2%D9%86%D8%AC%D8%B1%20%D9%83%D9%8A%D9%86%D8%AC`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-action-btn btn-float-wa" 
        aria-label="اطلب عبر واتساب"
      >
        <MessageCircle size={18} />
        <span>واتساب</span>
      </a>

      {/* Direct Call */}
      <a 
        href={`tel:${restaurant.phone.replace(/\s+/g, '')}`} 
        className="floating-action-btn btn-float-call" 
        aria-label="اتصل هاتفياً"
      >
        <Phone size={18} />
        <span>اتصال</span>
      </a>

      {/* Cart Trigger */}
      <button 
        type="button" 
        className="floating-action-btn btn-float-cart" 
        onClick={onOpenCart} 
        aria-label="سلة المشتريات"
      >
        <ShoppingBag size={18} />
        <span>السلة ({cartCount})</span>
      </button>

      {/* Map Directions */}
      <a 
        href={restaurant.maps_url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-action-btn btn-float-map" 
        aria-label="موقع المطعم"
      >
        <MapPin size={18} />
        <span>الموقع</span>
      </a>

    </aside>
  );
};
