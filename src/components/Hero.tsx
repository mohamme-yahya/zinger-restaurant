import React from 'react';
import { Clock, Tag, Bike, Car, Star, Flame, MessageCircle, Phone, Moon, Truck } from 'lucide-react';
import type { RestaurantInfo } from '../types';

interface Props {
  restaurant: RestaurantInfo;
}

export const Hero: React.FC<Props> = ({ restaurant }) => {
  return (
    <section className="hero-section" id="hero">
      <div className="container hero-grid">
        
        {/* Hero Text & Quick Action */}
        <div className="hero-text-content">
          <div className="hero-badge-wrap">
            <Clock size={16} />
            <span>المطعم الوحيد بالعيينة اللي يخدمك لـ 2:30 بعد منتصف الليل</span>
          </div>

          <h1 className="hero-title">
            قرمشة لا تُقاوم.. <br />
            وأسرع طلب يوصل لعندك <br />
            <span className="highlight">حتى ٢:٣٠ فجراً!</span>
          </h1>

          <p className="hero-subtitle">
            تبحث عن وجبة سريعة ومقرمشة تشبعك بسعر مناسب؟ زنجر كينج يقدم لك أشهى ساندوتشات الكلوب والبرجر والتندر المحضرة طازجة، بطلب فوري بضغطة زر وتوصيل بـ 2 ريال فقط.
          </p>

          {/* Perks highlights */}
          <div className="hero-perks">
            <div className="hero-perk-item">
              <Tag size={16} color="var(--primary)" />
              <span>وجبات متكاملة من 15 إلى 35 ر.س</span>
            </div>
            <div className="hero-perk-item">
              <Bike size={16} color="var(--primary)" />
              <span>توصيل رمزي بريالين فقط (2 ر.س)</span>
            </div>
            <div className="hero-perk-item">
              <Car size={16} color="var(--primary)" />
              <span>خدمة الإيصال للسيارة وأنت مرتاح</span>
            </div>
            <div className="hero-perk-item">
              <Star size={16} color="#f59e0b" fill="#f59e0b" />
              <span>تقييم {restaurant.rating} ({restaurant.reviews_count}+ عميل على جوجل)</span>
            </div>
          </div>

          {/* Hero CTA buttons */}
          <div className="hero-cta-group">
            <a href="#menu" className="btn-primary">
              <Flame size={18} />
              <span>تصفح المنيو واطلب فوراً</span>
            </a>
            
            <a 
              href={`https://wa.me/${restaurant.whatsapp_number}?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%B7%D9%84%D8%A8%20%D9%85%D9%86%20%D8%B2%D9%86%D8%AC%D8%B1%20%D9%83%D9%8A%D9%86%D8%AC`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-whatsapp"
            >
              <MessageCircle size={18} />
              <span>طلب سريع عبر واتساب</span>
            </a>

            <a href={`tel:${restaurant.phone.replace(/\s+/g, '')}`} className="btn-secondary-outline">
              <Phone size={18} />
              <span>اتصال هاتفي</span>
            </a>
          </div>

        </div>

        {/* Hero Visual Showcase */}
        <div className="hero-visual">
          <div className="hero-visual-card">
            <div className="hero-main-img-wrap">
              <img 
                src="/images/zingerking/1.webp" 
                alt="وجبة زنجر كينج الذهبية" 
                className="hero-main-img" 
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/images/zingerking/1-1.jpg';
                }}
              />
            </div>

            {/* Floating Badges */}
            <div className="float-badge badge-top">
              <div className="badge-icon"><Moon size={20} /></div>
              <div className="badge-info">
                <h4>مفتوح لـ 2:30 ص</h4>
                <p>منقذك الدائم في جوع الليل</p>
              </div>
            </div>

            <div className="float-badge badge-bottom">
              <div className="badge-icon"><Truck size={20} /></div>
              <div className="badge-info">
                <h4>توصيل بـ 2 ريال بس!</h4>
                <p>داخل نطاق العيينة بالكامل</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
