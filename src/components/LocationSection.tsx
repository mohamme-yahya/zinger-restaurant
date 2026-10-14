import React from 'react';
import { MapPin, Clock, Phone, MessageCircle, Compass } from 'lucide-react';
import type { RestaurantInfo } from '../types';

interface Props {
  restaurant: RestaurantInfo;
  isOpen: boolean;
}

export const LocationSection: React.FC<Props> = ({ restaurant, isOpen }) => {
  return (
    <section className="location-section" id="location">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">موقعنا وخدمة العملاء</span>
          <h2 className="section-title">تفضل بزيارتنا أو تواصل معنا</h2>
          <p className="section-desc">موقع استراتيجي على طريق الملك عبد العزيز بالعيينة يسهل الوصول إليه</p>
        </div>

        <div className="location-grid">
          
          {/* Location Info Card */}
          <div className="location-info-card">
            <div>
              <h3 style={{ fontSize: '1.4rem', color: '#fff', fontWeight: 800, marginBottom: '0.5rem' }}>
                بيانات المطعم والتواصل المباشر
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                طلبك يجهز فور اتصالك لنوفر عليك وقت الانتظار
              </p>

              <div className="location-items-list">
                
                <div className="location-item">
                  <div className="loc-icon"><MapPin size={22} /></div>
                  <div>
                    <h4>العنوان والفرع</h4>
                    <p>{restaurant.address} ({restaurant.plus_code})</p>
                  </div>
                </div>

                <div className="location-item">
                  <div className="loc-icon"><Clock size={22} /></div>
                  <div>
                    <h4>ساعات العمل والدوام</h4>
                    <p>
                      {isOpen ? (
                        <>مفتوح الآن ويغلق عند <strong>2:30 فجراً</strong> 🌙</>
                      ) : (
                        <>يومياً حتى <strong>2:30 فجراً</strong> 🌙</>
                      )}
                    </p>
                  </div>
                </div>

                <div className="location-item">
                  <div className="loc-icon"><Phone size={22} /></div>
                  <div>
                    <h4>رقم الطلبات والاتصال السريع</h4>
                    <p>
                      <a 
                        href={`tel:${restaurant.phone.replace(/\s+/g, '')}`} 
                        style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '1.1rem', direction: 'ltr', display: 'inline-block' }}
                      >
                        {restaurant.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="location-item">
                  <div className="loc-icon" style={{ background: 'rgba(37, 211, 102, 0.15)', color: '#25d366' }}>
                    <MessageCircle size={22} />
                  </div>
                  <div>
                    <h4>رقم الواتساب</h4>
                    <p>
                      <a href={`https://wa.me/${restaurant.whatsapp_number}`} target="_blank" rel="noopener noreferrer">
                        {restaurant.phone_international}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="location-item">
                  <div className="loc-icon" style={{ background: 'rgba(225, 48, 108, 0.15)', color: '#e1306c' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </div>
                  <div>
                    <h4>حساب إنستغرام الرسمي</h4>
                    <p>
                      <a href={restaurant.instagram} target="_blank" rel="noopener noreferrer">
                        @zinkerking
                      </a>
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Actions */}
            <div className="location-actions">
              <a href={restaurant.maps_url} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Compass size={18} />
                <span>فتح الاتجاهات في خرائط Google</span>
              </a>

              <a href={`tel:${restaurant.phone.replace(/\s+/g, '')}`} className="btn-secondary-outline">
                <Phone size={18} />
                <span>اتصل بالمطعم</span>
              </a>
            </div>

          </div>

          {/* Map Embed */}
          <div className="map-embed-card">
            <iframe 
              src={`https://maps.google.com/maps?q=${restaurant.coordinates.lat},${restaurant.coordinates.lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`} 
              title="موقع مطعم زنجر كينج بالعيينة على الخريطة" 
              loading="lazy" 
              allowFullScreen
            />
          </div>

        </div>

      </div>
    </section>
  );
};
