import React, { useState } from 'react';
import { 
  ShoppingBag, X, Plus, Minus, Trash2, 
  Bike, Car, Store, MessageCircle 
} from 'lucide-react';
import type { CartItem, RestaurantInfo, OrderFormDetails } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  restaurant: RestaurantInfo;
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
}

export const CartDrawer: React.FC<Props> = ({
  isOpen,
  onClose,
  cart,
  restaurant,
  onUpdateQuantity,
  onRemoveItem
}) => {
  const [form, setForm] = useState<OrderFormDetails>({
    customerName: '',
    customerPhone: '',
    deliveryType: 'delivery',
    addressOrCar: '',
    notes: ''
  });

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = form.deliveryType === 'delivery' ? restaurant.delivery_fee_sar : 0;
  const total = subtotal + deliveryFee;

  const handleSendWhatsApp = () => {
    if (cart.length === 0) return;

    let deliveryLabel = "توصيل للبيت (العيينة - 2 ر.س)";
    if (form.deliveryType === 'car') deliveryLabel = "إيصال للسيارة عند الفرع 🚗";
    else if (form.deliveryType === 'pickup') deliveryLabel = "استلام مباشر من الفرع 🍽️";

    let message = `السلام عليكم ورحمة الله، أود طلب وجبة من مطعم زنجر كينج 👑🍔:\n\n`;
    message += `📋 *تفاصيل الطلب:*\n`;
    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.name_ar}* × ${item.quantity} = ${(item.price * item.quantity).toFixed(2)} ر.س\n`;
    });

    message += `\n💰 *الحساب:*`;
    message += `\n- قيمة الأصناف: ${subtotal.toFixed(2)} ر.س`;
    if (deliveryFee > 0) {
      message += `\n- رسوم التوصيل: ${deliveryFee.toFixed(2)} ر.س`;
    }
    message += `\n- *الإجمالي النهائي: ${total.toFixed(2)} ر.س*\n\n`;

    message += `🛵 *نوع الاستلام:* ${deliveryLabel}\n`;
    if (form.customerName.trim()) message += `👤 *اسم العميل:* ${form.customerName.trim()}\n`;
    if (form.customerPhone.trim()) message += `📱 *رقم التواصل:* ${form.customerPhone.trim()}\n`;
    if (form.addressOrCar.trim()) message += `📍 *العنوان / وصف السيارة:* ${form.addressOrCar.trim()}\n`;
    if (form.notes.trim()) message += `📝 *ملاحظات خاصة:* ${form.notes.trim()}\n`;

    message += `\nشكرًا لكم! أرجو تأكيد الطلب وسرعة التجهيز.`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${restaurant.whatsapp_number}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div 
      className={`cart-drawer-overlay ${isOpen ? 'active' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="cart-drawer">
        
        {/* Cart Header */}
        <div className="cart-header">
          <h3>
            <ShoppingBag size={20} color="var(--primary)" />
            <span>سلة طلبك السريع</span>
          </h3>
          <button type="button" className="btn-close-cart" onClick={onClose} aria-label="إغلاق السلة">
            <X size={20} />
          </button>
        </div>

        {/* Cart Body */}
        <div className="cart-body">
          {cart.length === 0 ? (
            <div className="cart-empty-state">
              <div className="icon"><ShoppingBag size={48} /></div>
              <h4>سلة الطلب فارغة حالياً</h4>
              <p>تصفح قائمتنا اللذيذة واختر وجبتك المفضلة لتصلك ساخنة ومقرمشة في دقائق!</p>
              <button 
                type="button" 
                className="btn-primary" 
                style={{ marginTop: '1.5rem', fontSize: '0.95rem', padding: '10px 20px' }}
                onClick={onClose}
              >
                تصفح قائمة الطعام
              </button>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">
                <img 
                  src={item.img} 
                  alt={item.name_ar} 
                  className="cart-item-img" 
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/images/zingerking/1-1.jpg';
                  }}
                />
                <div className="cart-item-details">
                  <div className="cart-item-title">{item.name_ar}</div>
                  <div className="cart-item-price">{(item.price * item.quantity).toFixed(2)} ر.س</div>
                </div>
                <div className="cart-item-controls">
                  <button 
                    type="button" 
                    className="btn-qty" 
                    onClick={() => onUpdateQuantity(item.id, 1)}
                    aria-label="زيادة"
                  >
                    <Plus size={14} />
                  </button>
                  <span className="cart-item-qty">{item.quantity}</span>
                  <button 
                    type="button" 
                    className="btn-qty" 
                    onClick={() => onUpdateQuantity(item.id, -1)}
                    aria-label="إنقاص"
                  >
                    <Minus size={14} />
                  </button>
                </div>
                <button 
                  type="button" 
                  className="btn-remove-item" 
                  onClick={() => onRemoveItem(item.id)}
                  aria-label="حذف"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Checkout Form */}
        {cart.length > 0 && (
          <div style={{ padding: '0 1.5rem 1rem' }}>
            <div className="cart-checkout-form">
              
              <div className="form-group">
                <label>طريقة الاستلام:</label>
                <div className="delivery-options-grid">
                  
                  <label className={`delivery-radio-label ${form.deliveryType === 'delivery' ? 'selected' : ''}`}>
                    <input 
                      type="radio" 
                      name="deliveryType" 
                      value="delivery" 
                      checked={form.deliveryType === 'delivery'} 
                      onChange={() => setForm(f => ({ ...f, deliveryType: 'delivery' }))}
                      style={{ display: 'none' }}
                    />
                    <Bike size={18} />
                    <span>توصيل (2 ر.س)</span>
                  </label>

                  <label className={`delivery-radio-label ${form.deliveryType === 'car' ? 'selected' : ''}`}>
                    <input 
                      type="radio" 
                      name="deliveryType" 
                      value="car" 
                      checked={form.deliveryType === 'car'} 
                      onChange={() => setForm(f => ({ ...f, deliveryType: 'car' }))}
                      style={{ display: 'none' }}
                    />
                    <Car size={18} />
                    <span>إيصال للسيارة</span>
                  </label>

                  <label className={`delivery-radio-label ${form.deliveryType === 'pickup' ? 'selected' : ''}`}>
                    <input 
                      type="radio" 
                      name="deliveryType" 
                      value="pickup" 
                      checked={form.deliveryType === 'pickup'} 
                      onChange={() => setForm(f => ({ ...f, deliveryType: 'pickup' }))}
                      style={{ display: 'none' }}
                    />
                    <Store size={18} />
                    <span>استلام فرع</span>
                  </label>

                </div>
              </div>

              <div className="form-group">
                <label htmlFor="customer-name">الاسم الكريم:</label>
                <input 
                  type="text" 
                  id="customer-name" 
                  className="form-input" 
                  placeholder="مثال: فهد"
                  value={form.customerName}
                  onChange={(e) => setForm(f => ({ ...f, customerName: e.target.value }))}
                />
              </div>

              <div className="form-group">
                <label htmlFor="customer-phone">رقم الجوال:</label>
                <input 
                  type="tel" 
                  id="customer-phone" 
                  className="form-input" 
                  placeholder="05xxxxxxxx"
                  value={form.customerPhone}
                  onChange={(e) => setForm(f => ({ ...f, customerPhone: e.target.value }))}
                />
              </div>

              <div className="form-group">
                <label htmlFor="customer-address">العنوان أو وصف السيارة ولونها:</label>
                <input 
                  type="text" 
                  id="customer-address" 
                  className="form-input" 
                  placeholder="الحي / الشارع أو كامري فضية رقم..."
                  value={form.addressOrCar}
                  onChange={(e) => setForm(f => ({ ...f, addressOrCar: e.target.value }))}
                />
              </div>

              <div className="form-group">
                <label htmlFor="customer-notes">ملاحظات على الوجبة (اختياري):</label>
                <input 
                  type="text" 
                  id="customer-notes" 
                  className="form-input" 
                  placeholder="مثال: بدون بصل، ثوم زيادة، حار جداً..."
                  value={form.notes}
                  onChange={(e) => setForm(f => ({ ...f, notes: e.target.value }))}
                />
              </div>

            </div>
          </div>
        )}

        {/* Footer & Totals */}
        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary-row">
              <span>قيمة الوجبات:</span>
              <span>{subtotal.toFixed(2)} ر.س</span>
            </div>
            <div className="cart-summary-row">
              <span>رسوم التوصيل:</span>
              <span>
                {deliveryFee > 0 ? `${deliveryFee.toFixed(2)} ر.س (توصيل العيينة)` : 'مجاني'}
              </span>
            </div>
            <div className="cart-summary-row total">
              <span>الإجمالي النهائي:</span>
              <span>{total.toFixed(2)} ر.س</span>
            </div>

            <button type="button" className="btn-send-whatsapp-order" onClick={handleSendWhatsApp}>
              <MessageCircle size={20} />
              <span>إرسال الطلب فوراً عبر واتساب</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
