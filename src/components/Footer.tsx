import { MapPin, Phone, MessageCircle, Moon } from 'lucide-react';
import type { RestaurantInfo } from '../types';

interface Props {
  restaurant: RestaurantInfo;
}

export const Footer: React.FC<Props> = ({ restaurant }) => {
  return (
    <footer className="site-footer">
      <div className="container">
        
        <div className="footer-grid">
          
          <div className="footer-brand">
            <div className="brand-logo">
              <div className="logo-badge">ZK</div>
              <div className="brand-text">
                <h2 style={{ fontSize: '1.3rem', color: '#fff', fontWeight: 800 }}>
                  {restaurant.name_ar}
                </h2>
                <span>{restaurant.name_en.toUpperCase()} CAFETERIA</span>
              </div>
            </div>
            <p>
              المذاق الذي يصنع ولا يولد! وجهتك الأولى لأشهى وجبات الزنجر المقرمش وسندوتشات الكلوب والعصائر الطازجة بالعيينة، نخدمك حتى 2:30 بعد منتصف الليل.
            </p>
          </div>

          <div className="footer-col">
            <h4>روابط سريعة</h4>
            <ul className="footer-links">
              <li><a href="#hero">الصفحة الرئيسية</a></li>
              <li><a href="#menu">قائمة الطعام والأسعار</a></li>
              <li><a href="#late-night">عروض جوع آخر الليل (2:30 ص)</a></li>
              <li><a href="#services">خدمات الإيصال والتوصيل</a></li>
              <li><a href="#location">خريطة الموقع والاتصال</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>التواصل والموقع</h4>
            <ul className="footer-links">
              <li>
                <MapPin size={16} color="var(--primary)" />
                <span>طريق الملك عبد العزيز، العيينة</span>
              </li>
              <li>
                <Phone size={16} color="var(--primary)" />
                <a href={`tel:${restaurant.phone.replace(/\s+/g, '')}`}>{restaurant.phone}</a>
              </li>
              <li>
                <MessageCircle size={16} color="#25d366" />
                <a href={`https://wa.me/${restaurant.whatsapp_number}`} target="_blank" rel="noopener noreferrer">
                  {restaurant.phone_international}
                </a>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e1306c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                <a href={restaurant.instagram} target="_blank" rel="noopener noreferrer">
                  @zinkerking
                </a>
              </li>
              <li>
                <Moon size={16} color="var(--primary)" />
                <span>يومياً حتى الساعة 2:30 فجراً</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 مطعم كافتيريا زنجر كينج (Zinker King). جميع الحقوق محفوظة.</p>
          <p>مبني باستخدام React + TypeScript لتجربة سريعة وفائقة الأداء 🍔👑</p>
        </div>

      </div>
    </footer>
  );
};
