import React from 'react';

interface Props {
  isOpen: boolean;
}

export const TopAnnouncement: React.FC<Props> = ({ isOpen }) => {
  return (
    <aside className="top-announcement" aria-label="شريط الإعلانات وحالة المطعم">
      <div className="live-pill">
        <span className="pulsing-dot" />
        <span>
          {isOpen ? (
            <>مفتوح الآن ويغلق عند الساعة <strong>2:30 فجراً</strong> 🌙</>
          ) : (
            <>نفتح يومياً من 12 ظهراً حتى <strong>2:30 فجراً</strong> (نستقبل الطلبات المسائية)</>
          )}
        </span>
      </div>
      <span>•</span>
      <span>🚀 توصيل بـ <strong>2 ريال فقط</strong> داخل العيينة!</span>
    </aside>
  );
};
