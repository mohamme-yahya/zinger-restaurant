import React from 'react';
import { ShoppingBag, MapPin, Zap, Car, Coins } from 'lucide-react';
import type { RestaurantInfo } from '../types';

interface Props {
  restaurant: RestaurantInfo;
  onOpenCart: () => void;
}

export const LateNightBanner: React.FC<Props> = ({ restaurant, onOpenCart }) => {
  return (
    <section className="late-night-banner-section" id="late-night">
      <div className="container">
        <div className="late-night-box">
          <div className="late-night-content">
            
            <div>
              <div className="late-night-status-pill">
                <span className="pulsing-dot" />
                <span>المطعم شغال ويجهز وجباتك الآن</span>
              </div>
              <h2 className="late-night-title">
                جوعان بآخر الليل وما لك خلق تطبخ؟ <br />
                <span>زنجر كينج فاتح لـ ٢:٣٠ فجراً!</span>
              </h2>
              <p className="late-night-desc">
                كل المطاعم تقفل بدري وإحنا مستعدين نجهّز لك أشهى وجبات الكلوب والزنجر المقرمش والبطاطس الغرقانة بالجبن والموهيتو المثلج. اطلب وأنت في بيتك أو مر على الفرع ونوصله لسيارتك بدون ما تنزل!
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button type="button" className="btn-primary" onClick={onOpenCart}>
                  <ShoppingBag size={18} />
                  <span>ابدأ طلبك الآن بأقل من دقيقة</span>
                </button>
                <a 
                  href={restaurant.maps_url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-secondary-outline"
                >
                  <MapPin size={18} color="var(--primary)" />
                  <span>الاتجاهات إلى الفرع بالعيينة</span>
                </a>
              </div>
            </div>

            <div className="late-night-action-cards">
              <div className="service-fast-card">
                <div className="icon"><Zap size={20} /></div>
                <div>
                  <h5>تجهيز فائق السرعة</h5>
                  <p>وجبتك ساخنة ومقرمشة خلال 10-15 دقيقة</p>
                </div>
              </div>

              <div className="service-fast-card">
                <div className="icon"><Car size={20} /></div>
                <div>
                  <h5>توصيل للسيارة (Drive-by)</h5>
                  <p>اتصل أو أرسل بالواتساب واستلم بدون نزول</p>
                </div>
              </div>

              <div className="service-fast-card">
                <div className="icon"><Coins size={20} /></div>
                <div>
                  <h5>أوفر سعر للشخص الواحد</h5>
                  <p>متوسط 20 إلى 40 ريال تشبعك تماماً</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
