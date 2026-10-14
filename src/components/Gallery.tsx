import React from 'react';

export const Gallery: React.FC = () => {
  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">الجودة والنظافة أولاً</span>
          <h2 className="section-title">شاهد تحضير الوجبات من داخل زنجر كينج</h2>
          <p className="section-desc">خبز طازج يومياً، زيت نقي، ودجاج متبل بأعلى معايير السلامة الغذائية</p>
        </div>

        <div className="gallery-grid">
          
          <div className="gallery-item">
            <img src="/images/zingerking/1-4.jpg" alt="نظافة المطبخ وخبز كودو الطازج" loading="lazy" />
            <div className="gallery-overlay">
              <h5>تحضير فوري ونظافة تامة</h5>
              <span>خبز توست وبرجر طازج مع تشكيلة الصوصات الخاصة</span>
            </div>
          </div>

          <div className="gallery-item">
            <img src="/images/zingerking/1-2.jpg" alt="دجاج زنجر وبروستد مقرمش وذهبي" loading="lazy" />
            <div className="gallery-overlay">
              <h5>قرمشة ذهبية حقيقية</h5>
              <span>قطع تندر وبروستد مقرمشة مع صوص الثوم والبطاطس</span>
            </div>
          </div>

          <div className="gallery-item">
            <img src="/images/zingerking/1-3.jpg" alt="موهيتو الرمان والليمون البارد" loading="lazy" />
            <div className="gallery-overlay">
              <h5>مشروبات وموهيتو منعش</h5>
              <span>تحضير بارد مع قطع الليمون والنعناع الفريش داخل المحل</span>
            </div>
          </div>

          <div className="gallery-item">
            <img src="/images/zingerking/12.webp" alt="بوستر الموهيتو والميلك شيك" loading="lazy" />
            <div className="gallery-overlay">
              <h5>عصائر طبيعية وميلك شيك</h5>
              <span>ميلك شيك فستق وموهيتو بلو لاجون المنعش</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
