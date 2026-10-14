import React, { useState, useMemo } from 'react';
import { 
  Grid, Star, Sandwich, Flame, 
  Box, CupSoda, Search, Plus 
} from 'lucide-react';
import type { MenuItem, CategoryId } from '../types';

interface Props {
  items: MenuItem[];
  onAddToCart: (item: MenuItem) => void;
}

export const MenuSection: React.FC<Props> = ({ items, onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    let result = items;

    if (activeCategory === 'bestsellers') {
      result = result.filter(item => item.tag === 'bestseller');
    } else if (activeCategory !== 'all') {
      result = result.filter(item => item.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(item => 
        item.name_ar.toLowerCase().includes(q) || 
        item.name_en.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q)
      );
    }

    return result;
  }, [items, activeCategory, searchQuery]);

  return (
    <section className="menu-section" id="menu">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">قائمة الطعام الطازجة</span>
          <h2 className="section-title">اختر وجبتك المقرمشة المفضلة</h2>
          <p className="section-desc">مكونات طازجة يومياً، تتبيلة زنجر خاصة، وعصائر وموهيتو طبيعي ينعشك</p>
        </div>

        {/* Menu Controls */}
        <div className="menu-controls">
          
          <div className="category-tabs" role="tablist" aria-label="أقسام المنيو">
            <button 
              type="button" 
              className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              <Grid size={16} />
              <span>الكل</span>
            </button>

            <button 
              type="button" 
              className={`category-btn ${activeCategory === 'bestsellers' ? 'active' : ''}`}
              onClick={() => setActiveCategory('bestsellers')}
            >
              <Star size={16} />
              <span>⭐ الأكثر طلباً</span>
            </button>

            <button 
              type="button" 
              className={`category-btn ${activeCategory === 'burgers' ? 'active' : ''}`}
              onClick={() => setActiveCategory('burgers')}
            >
              <Flame size={16} />
              <span>برجر وزنجر</span>
            </button>

            <button 
              type="button" 
              className={`category-btn ${activeCategory === 'clubs' ? 'active' : ''}`}
              onClick={() => setActiveCategory('clubs')}
            >
              <Sandwich size={16} />
              <span>كلوب وساندوتشات</span>
            </button>

            <button 
              type="button" 
              className={`category-btn ${activeCategory === 'chicken' ? 'active' : ''}`}
              onClick={() => setActiveCategory('chicken')}
            >
              <Flame size={16} />
              <span>تندر ودجاج مقرمش</span>
            </button>

            <button 
              type="button" 
              className={`category-btn ${activeCategory === 'fries' ? 'active' : ''}`}
              onClick={() => setActiveCategory('fries')}
            >
              <Box size={16} />
              <span>بطاطس وشيزيز</span>
            </button>

            <button 
              type="button" 
              className={`category-btn ${activeCategory === 'juices' ? 'active' : ''}`}
              onClick={() => setActiveCategory('juices')}
            >
              <CupSoda size={16} />
              <span>عصائر وموهيتو</span>
            </button>
          </div>

          {/* Search Box */}
          <div className="menu-search-wrap">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              className="menu-search-input" 
              placeholder="ابحث عن وجبة، كلوب، صوص، موهيتو..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="بحث في قائمة الطعام"
            />
          </div>

        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredItems.length === 0 ? (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
              <Search size={40} color="var(--text-dim)" style={{ display: 'block', margin: '0 auto 1rem' }} />
              <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>عفواً، لا توجد وجبة تطابق بحثك!</h4>
              <p>جرّب البحث باسم آخر أو تصفح الأقسام من الأعلى.</p>
            </div>
          ) : (
            filteredItems.map(item => {
              let tagBadge = null;
              if (item.tag === 'spicy') {
                tagBadge = <span className="product-tag-badge badge-spicy">🔥 سبايسي حار</span>;
              } else if (item.tag === 'bestseller') {
                tagBadge = <span className="product-tag-badge badge-bestseller">⭐ الأكثر طلباً</span>;
              } else if (item.tag === 'family') {
                tagBadge = <span className="product-tag-badge badge-family">👨‍👩‍👦 للجمعات</span>;
              }

              return (
                <article key={item.id} className="product-card">
                  <div className="product-thumb-wrap">
                    <img 
                      src={item.img} 
                      alt={item.name_ar} 
                      className="product-thumb" 
                      loading="lazy" 
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = '/images/zingerking/1-1.jpg';
                      }}
                    />
                    {tagBadge}
                    <span className="product-calories-badge">{item.calories}</span>
                  </div>
                  <div className="product-content">
                    <h3 className="product-title">{item.name_ar}</h3>
                    <span className="product-title-en">{item.name_en}</span>
                    <p className="product-desc">{item.desc}</p>
                    <div className="product-footer">
                      <div className="product-price-box">
                        <span className="price-number">{item.price.toFixed(2)}</span>
                        <span className="price-currency">ر.س</span>
                      </div>
                      <button 
                        type="button" 
                        className="btn-add-to-cart" 
                        onClick={() => onAddToCart(item)}
                        aria-label={`أضف ${item.name_ar} إلى السلة`}
                      >
                        <Plus size={16} />
                        <span>أضف للطلب</span>
                      </button>
                    </div>
                  </div>
                </article>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};
