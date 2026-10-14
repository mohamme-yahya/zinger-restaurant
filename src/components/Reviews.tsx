import React from 'react';
import { Star } from 'lucide-react';
import type { RestaurantInfo } from '../types';

interface Props {
  restaurant: RestaurantInfo;
}

export const Reviews: React.FC<Props> = ({ restaurant }) => {
  return (
    <section className="reviews-section" id="reviews">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">ثقة أهالي العيينة</span>
          <h2 className="section-title">ماذا يقول عملاؤنا على خرائط جوجل؟</h2>
          <p className="section-desc">تقييم {restaurant.rating} من أكثر من {restaurant.reviews_count} عميل زاروا المحل وجربوا وجباتنا</p>
        </div>

        <div className="reviews-grid">
          
          <div className="review-card">
            <div className="review-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>
            <p className="review-quote">
              "أفضل منقذ في العيينة إذا جعت بآخر الليل! الكلوب زنجر عندهم لا يُعلى عليه، يوصلك حار والبطاطس مقرمشة وخدمتهم سريعة جداً عند السيارة."
            </p>
            <div className="reviewer-profile">
              <div className="reviewer-avatar">س</div>
              <div className="reviewer-info">
                <h5>سلطان القحطاني</h5>
                <span>عميل محلي - تقييم خرائط Google</span>
              </div>
            </div>
          </div>

          <div className="review-card">
            <div className="review-stars">
              {[...Array(4)].map((_, i) => (
                <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
              ))}
              <Star size={18} color="#f59e0b" />
            </div>
            <p className="review-quote">
              "الأسعار ممتازة جداً ومناسبة مقارنة بالكمية. صحن بطاطا زنجر بالجبن لذيذ للغاية وعصير الطبقات فريش. ميزة إنهم فاتحين للساعة 2:30 الفجر فرقت معنا كثير."
            </p>
            <div className="reviewer-profile">
              <div className="reviewer-avatar">ف</div>
              <div className="reviewer-info">
                <h5>فهد الدوسري</h5>
                <span>مرشد محلي - تقييم خرائط Google</span>
              </div>
            </div>
          </div>

          <div className="review-card">
            <div className="review-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>
            <p className="review-quote">
              "توصيلهم بريالين بس وسريع، طلبت بوكس التندر ووصل مقرمش وصوصاتهم غنية. تعامل العمال محترم ونظيف وأنصح بالتعامل معهم."
            </p>
            <div className="reviewer-profile">
              <div className="reviewer-avatar">ع</div>
              <div className="reviewer-info">
                <h5>عبدالله الشهري</h5>
                <span>عميل دائم - تقييم خرائط Google</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
