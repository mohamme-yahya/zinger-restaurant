import React from 'react';
import { Bike, Car, Utensils, ShieldCheck } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">خيارات الخدمة المرنة</span>
          <h2 className="section-title">كيف تفضّل تستلم وجبتك اليوم؟</h2>
          <p className="section-desc">صممنا تجربة الطلب لتكون الأسهل والأسرع، اختر الطريقة المناسبة لك</p>
        </div>

        <div className="services-grid">
          
          <div className="service-card">
            <div className="service-icon-wrap"><Bike size={26} /></div>
            <h4>توصيل للمنازل بالعيينة</h4>
            <p>توصيل سريع ومباشر حتى باب منزلك برسوم رمزية 2 ريال فقط لجميع أحياء العيينة.</p>
          </div>

          <div className="service-card">
            <div className="service-icon-wrap"><Car size={26} /></div>
            <h4>الإيصال إلى السيارة</h4>
            <p>وقف سيارتك أمام المحل وراسلنا بالواتساب أو اتصل، وسيوصل العامل طلبك إلى نافذة سيارتك.</p>
          </div>

          <div className="service-card">
            <div className="service-icon-wrap"><Utensils size={26} /></div>
            <h4>جلسات داخلية بالمطعم</h4>
            <p>استمتع بتناول وجبتك ساخنة وطازجة مباشرة في صالتنا النظيفة والمكيفة مع خدمة ممتازة.</p>
          </div>

          <div className="service-card">
            <div className="service-icon-wrap"><ShieldCheck size={26} /></div>
            <h4>تسليم سريع بدون تلامس</h4>
            <p>أعلى معايير النظافة والتعقيم في تغليف الوجبات والتسليم لضمان راحتك وسلامتك.</p>
          </div>

        </div>
      </div>
    </section>
  );
};
