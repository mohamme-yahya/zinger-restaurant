/**
 * Zinker King (زنجر كينج) - Restaurant Web App Logic
 * Real-time Cart, Category Filter, Search, Live Opening Status & WhatsApp Order Engine
 */

// --- Restaurant & Menu Data ---
const RESTAURANT_DATA = {
  name_ar: "زنجر كينج",
  name_en: "Zinker King",
  phone: "053 104 9883",
  whatsapp_number: "966531049883",
  address: "5762، طريق الملك عبد العزيز، العيينة",
  maps_url: "https://maps.app.goo.gl/AQpWh5NDiUZzUmfa7",
  closing_hour_am: 2.5, // 2:30 AM
  delivery_fee: 2.00
};

const MENU_ITEMS = [
  // --- Zinger & Burgers ---
  {
    id: "burger-zinger-special",
    name_ar: "برجر زنجر كينج سوبريم",
    name_en: "Zinker King Supreme Burger",
    category: "burgers",
    price: 18.00,
    calories: "540 Kcal",
    img: "images/zingerking/1-1.jpg",
    desc: "صدر دجاج زنجر مقرمش ومتبل بالخلطة السرية مع جبنة شيدر ذائبة وصوص خاص وخس وطماطم طازجة.",
    tag: "bestseller"
  },
  {
    id: "burger-spicy-zinger",
    name_ar: "برجر زنجر سبايسي حار",
    name_en: "Spicy Zinker Burger",
    category: "burgers",
    price: 16.00,
    calories: "510 Kcal",
    img: "images/zingerking/1-1.jpg",
    desc: "لمحبي الحرارة والقرمشة المضاعفة، مع صوص الشطة الخاصة وهالبينو وجبنة ذائبة.",
    tag: "spicy"
  },
  {
    id: "burger-beef-classic",
    name_ar: "برجر لحم كلاسيك",
    name_en: "Classic Beef Burger",
    category: "burgers",
    price: 15.00,
    calories: "490 Kcal",
    img: "images/zingerking/shot.jpg.jpeg",
    desc: "شريحة لحم بقري مشوية على اللهب مع شرائح جبنة وصوص الماسترد والمايونيز.",
    tag: null
  },
  {
    id: "kids-meal-burger",
    name_ar: "وجبة أطفال مع لعبة",
    name_en: "Kids Meal Box",
    category: "burgers",
    price: 14.00,
    calories: "594 Kcal",
    img: "images/zingerking/8.webp",
    desc: "برجر دجاج ميني لذيذ + بطاطس مقلية ذهبية + عصير للأطفال مع علبة المرح.",
    tag: null
  },

  // --- Club Sandwiches ---
  {
    id: "club-zinker",
    name_ar: "كلوب زنجر الخاص",
    name_en: "Zinker Club Sandwich",
    category: "clubs",
    price: 18.00,
    calories: "527 Kcal",
    img: "images/zingerking/8.webp",
    desc: "طبقات التوست المحمص مع قطع زنجر مقرمشة، بيض، جبنة، مخلل، وبطاطس مقلية مع علبة بيبسي بارد.",
    tag: "bestseller"
  },
  {
    id: "club-lulu",
    name_ar: "كلوب لولو الشهير",
    name_en: "Club Lulu",
    category: "clubs",
    price: 15.00,
    calories: "586 Kcal",
    img: "images/zingerking/8.webp",
    desc: "مزيج مميز من الدجاج والبيض والخضار الطازجة مع شرائح التوست الهش وبطاطس مقلية.",
    tag: null
  },
  {
    id: "club-beef",
    name_ar: "كلوب لحم بقر",
    name_en: "Beef Club Sandwich",
    category: "clubs",
    price: 16.00,
    calories: "453 Kcal",
    img: "images/zingerking/8.webp",
    desc: "طبقات من اللحم البقري الشهي مع صوص خاص وخضروات وبطاطس مقلية.",
    tag: null
  },
  {
    id: "club-emarath",
    name_ar: "كلوب الإمارات",
    name_en: "Emarath Club",
    category: "clubs",
    price: 15.00,
    calories: "585 Kcal",
    img: "images/zingerking/8.webp",
    desc: "نكهة فريدة وخاصة مع الخضار والدجاج المشوي مع بطاطس مقرمشة.",
    tag: null
  },
  {
    id: "club-spicy",
    name_ar: "كلوب حار سبايسي",
    name_en: "Spicy Club Sandwich",
    category: "clubs",
    price: 16.00,
    calories: "594 Kcal",
    img: "images/zingerking/8.webp",
    desc: "طبقات ساندوتش كلوب غنية بالنكهة الحارة المشعلة مع صلصة السيراتشا والبطاطس.",
    tag: "spicy"
  },
  {
    id: "club-bahariya",
    name_ar: "كلوب بحرية روبيان",
    name_en: "Bahariya Seafood Club",
    category: "clubs",
    price: 16.00,
    calories: "438 Kcal",
    img: "images/zingerking/8.webp",
    desc: "ساندوتش كلوب بمذاق بحري منعش مع صوص التارتار والبطاطس.",
    tag: null
  },
  {
    id: "club-tuna",
    name_ar: "كلوب تونا خفيف",
    name_en: "Tuna Club Sandwich",
    category: "clubs",
    price: 14.00,
    calories: "438 Kcal",
    img: "images/zingerking/8.webp",
    desc: "تونا فاخرة متبلة مع المايونيز والخس والطماطم في خبز توست مقرمش.",
    tag: null
  },

  // --- Large Club Platters & Family ---
  {
    id: "club-supreme-platter",
    name_ar: "صحن كلوب سوبريم كبير",
    name_en: "Supreme Club Platter",
    category: "clubs",
    price: 33.00,
    calories: "797 Kcal",
    img: "images/zingerking/9.webp",
    desc: "تشكيلة من سندوتشات الكلوب المقطعة + برجر ميني + رولات زنجر مقرمشة + بطاطس وثوم.",
    tag: "bestseller"
  },
  {
    id: "club-majlis-platter",
    name_ar: "صحن كلوب مجلس للمناسبات",
    name_en: "Majlis Club Platter",
    category: "clubs",
    price: 46.00,
    calories: "797 Kcal",
    img: "images/zingerking/9.webp",
    desc: "وليمة متكاملة للشباب والجمعات تحتوي على برجر، كلوب، رولات شاورما، وبطاطس وفيرة.",
    tag: "family"
  },
  {
    id: "club-family-platter",
    name_ar: "صحن كلوب عائلة سوبر",
    name_en: "Family Club Platter",
    category: "clubs",
    price: 49.00,
    calories: "797 Kcal",
    img: "images/zingerking/9.webp",
    desc: "صينية عائلية فاخرة تغذي 4-6 أشخاص من تشكيلة الكلوب الفاخر والبطاطس والصوصات.",
    tag: "family"
  },

  // --- Chicken Meals & Tenders ---
  {
    id: "tenders-chicken-meal",
    name_ar: "وجبة دجاج تندر (4 قطع)",
    name_en: "Tenders Chicken Meal (4 Pcs)",
    category: "chicken",
    price: 19.00,
    calories: "1530 Kcal",
    img: "images/zingerking/1-5.png",
    desc: "4 أصابع تندر دجاج كرسبي طازج مع خبز طري، بطاطس مقلية مقرمشة، صوص ثوم، وكاتشب.",
    tag: "bestseller"
  },
  {
    id: "chicken-broast-crispy",
    name_ar: "وجبة بروستد كرسبي مقرمش",
    name_en: "Crispy Fried Chicken Broast",
    category: "chicken",
    price: 22.00,
    calories: "1450 Kcal",
    img: "images/zingerking/1-2.jpg",
    desc: "قطع دجاج مقرمشة وذهبية متبلة ببهارات زنجر كينج الأصلية مع صوص الثوم والبطاطس والخبز.",
    tag: "bestseller"
  },
  {
    id: "chicken-family-12pcs",
    name_ar: "بوكس وجبة عائلة دجاج (12 قطعة)",
    name_en: "Family Chicken Box (12 Pcs)",
    category: "chicken",
    price: 59.00,
    calories: "2800 Kcal",
    img: "images/zingerking/1-5.png",
    desc: "12 قطعة دجاج مقرمش + لتر بيبسي + بطاطس عائلي كبير + كول سلو + 3 صوصات ثوم وخبز.",
    tag: "family"
  },
  {
    id: "jumbo-prawns-plate",
    name_ar: "صحن جمبو روبيان مقلي",
    name_en: "Jumbo Prawns Plate",
    category: "chicken",
    price: 17.00,
    calories: "368 Kcal",
    img: "images/zingerking/8.webp",
    desc: "قطع روبيان جمبو مقلية بالبقسماط الذهبي تقدم مع البطاطس المقلية والصلصة الخاصة.",
    tag: null
  },
  {
    id: "spring-roll-plate",
    name_ar: "صحن سبرينغ رول مقرمش",
    name_en: "Spring Roll Plate",
    category: "chicken",
    price: 12.00,
    calories: "368 Kcal",
    img: "images/zingerking/8.webp",
    desc: "لفائف السبرينغ رول الخفيفة والمقرمشة المحشوة بالخضار والدجاج.",
    tag: null
  },

  // --- Loaded Fries & Cheesy Items ---
  {
    id: "fries-zinker-chicken",
    name_ar: "بطاطا زنجر دجاج بالجبن",
    name_en: "Zinker Chi. Loaded Fries",
    category: "fries",
    price: 20.00,
    calories: "876 Kcal",
    img: "images/zingerking/1-5.png",
    desc: "طبق بطاطس مقلية مغطى بقطع دجاج الزنجر الحار المقرمش مع غرق من صوص الجبنة الذائبة والرانش.",
    tag: "bestseller"
  },
  {
    id: "fries-zinker-prawns",
    name_ar: "بطاطا زنجر روبيان شيدر",
    name_en: "Zinker Prawns Loaded Fries",
    category: "fries",
    price: 22.00,
    calories: "876 Kcal",
    img: "images/zingerking/1-5.png",
    desc: "مزيج فاخر من قطع الروبيان الذهبي مع البطاطس وصلصة الشيدر والهالبينو الحار.",
    tag: "spicy"
  },
  {
    id: "fries-with-cheese",
    name_ar: "صحن بطاطا مغطى بالجبن",
    name_en: "Fries With Melted Cheese",
    category: "fries",
    price: 11.00,
    calories: "620 Kcal",
    img: "images/zingerking/1-5.png",
    desc: "بطاطس مقرمشة ساخنة غارقة بصوص جبنة الشيدر الصفراء الغنية.",
    tag: null
  },
  {
    id: "french-fries-plain",
    name_ar: "صحن بطاطس مقلية ذهبية",
    name_en: "Golden French Fries",
    category: "fries",
    price: 7.00,
    calories: "274 Kcal",
    img: "images/zingerking/8.webp",
    desc: "أصابع بطاطس مقلية ومملحة بطريقة مثالية ومقرمشة من الخارج وهشة من الداخل.",
    tag: null
  },
  {
    id: "potato-wedges",
    name_ar: "بطاطا ودجيز متبلة",
    name_en: "Seasoned Potato Wedges",
    category: "fries",
    price: 8.00,
    calories: "274 Kcal",
    img: "images/zingerking/8.webp",
    desc: "أجنحة بطاطا سميكة بتتبيلة الأعشاب والبابريكا المقرمشة.",
    tag: null
  },
  {
    id: "onion-rings",
    name_ar: "حلقات بصل مقرمشة",
    name_en: "Crispy Onion Rings",
    category: "fries",
    price: 8.00,
    calories: "276 Kcal",
    img: "images/zingerking/8.webp",
    desc: "حلقات بصل مغلفة بخلطة مقرمشة ذهبية تقدم مع صوص الكاتشب.",
    tag: null
  },
  {
    id: "potato-net",
    name_ar: "بطاطا شبكية (وافل)",
    name_en: "Potato Net / Waffle",
    category: "fries",
    price: 9.00,
    calories: "276 Kcal",
    img: "images/zingerking/8.webp",
    desc: "شبكات بطاطس مقرمشة وممتعة تناسب التغميس بصوصات الجبن والثوم.",
    tag: null
  },

  // --- Fresh Juices & Mojitos ---
  {
    id: "juice-zinker-special",
    name_ar: "عصير زنجر كينج الخاص",
    name_en: "Zinker King Special Cocktail",
    category: "juices",
    price: 12.00,
    calories: "260 Kcal",
    img: "images/zingerking/11_1.webp",
    desc: "طبقات من الفواكه الطبيعية الطازجة مع الكريمة والمكسرات اللذيذة.",
    tag: "bestseller"
  },
  {
    id: "juice-thabakath",
    name_ar: "عصير طبقات ملون",
    name_en: "Thabakath Layered Juice",
    category: "juices",
    price: 12.00,
    calories: "240 Kcal",
    img: "images/zingerking/11_1.webp",
    desc: "طبقات من المانجو والأفوكادو والفراولة الطازجة في إبريق كلاسيكي.",
    tag: "bestseller"
  },
  {
    id: "mojito-blue-lagoon",
    name_ar: "موهيتو بلو لاجون أزرق",
    name_en: "Blue Lagoon Mojito",
    category: "juices",
    price: 9.00,
    calories: "140 Kcal",
    img: "images/zingerking/12.webp",
    desc: "انتعاش الصودا مع نكهة البلو كوراكاو والليمون والنعناع المنعش وقطع الثلج المجروش.",
    tag: null
  },
  {
    id: "mojito-pomegranate-berry",
    name_ar: "موهيتو رمان وتوت أحمر",
    name_en: "Berry & Pomegranate Mojito",
    category: "juices",
    price: 9.00,
    calories: "150 Kcal",
    img: "images/zingerking/1-3.jpg",
    desc: "موهيتو الرمان المثلج مع شرائح الليمون وأوراق النعناع الفريش.",
    tag: null
  },
  {
    id: "juice-avocado-nuts",
    name_ar: "عصير أفوكادو بالمكسرات والعسل",
    name_en: "Fresh Avocado Shake",
    category: "juices",
    price: 12.00,
    calories: "320 Kcal",
    img: "images/zingerking/10.webp",
    desc: "أفوكادو كريمي طازج مع العسل والمكسرات المقرمشة.",
    tag: null
  },
  {
    id: "juice-mango-fresh",
    name_ar: "عصير مانجو طبيعي",
    name_en: "Fresh Mango Juice",
    category: "juices",
    price: 9.00,
    calories: "180 Kcal",
    img: "images/zingerking/10.webp",
    desc: "عصير مانجو استوائي مركز وطبيعي 100%.",
    tag: null
  },
  {
    id: "juice-lemon-mint",
    name_ar: "عصير ليمون بالنعناع المنعش",
    name_en: "Lemon Mint Refresher",
    category: "juices",
    price: 8.00,
    calories: "110 Kcal",
    img: "images/zingerking/10.webp",
    desc: "المشروب الكلاسيكي المنعش مع كل وجبة زنجر حارة.",
    tag: null
  },
  {
    id: "juice-falooda-royal",
    name_ar: "فالودة ملكية بالآيسكريم",
    name_en: "Royal Falooda Shake",
    category: "juices",
    price: 13.00,
    calories: "340 Kcal",
    img: "images/zingerking/11_1.webp",
    desc: "مشروب الحلى الهندي الفاخر مع شعيرية الفالودة وبذور الشيا والمكسرات وكرة آيسكريم.",
    tag: null
  }
];

// --- Cart State Management ---
let cart = [];

function loadCart() {
  try {
    const saved = localStorage.getItem("zinker_cart");
    if (saved) {
      cart = JSON.parse(saved);
    }
  } catch (e) {
    console.warn("Could not read cart from localStorage", e);
    cart = [];
  }
  updateCartUI();
}

function saveCart() {
  try {
    localStorage.setItem("zinker_cart", JSON.stringify(cart));
  } catch (e) {
    console.warn("Could not write cart to localStorage", e);
  }
  updateCartUI();
}

function addToCart(productId) {
  const product = MENU_ITEMS.find(item => item.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name_ar: product.name_ar,
      name_en: product.name_en,
      price: product.price,
      img: product.img,
      quantity: 1
    });
  }

  saveCart();
  showToast(`تمت إضافة "${product.name_ar}" إلى سلتك 🛒`);
}

function updateQuantity(productId, delta) {
  const item = cart.find(item => item.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== productId);
    showToast(`تم حذف المنتج من السلة`);
  }
  saveCart();
}

function removeItem(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  showToast("تم إزالة الصنف من السلة");
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function getCartSubtotal() {
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// --- Render Functions ---

function renderProducts(itemsToRender) {
  const container = document.getElementById("products-container");
  if (!container) return;

  if (itemsToRender.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <i class="bi bi-search" style="font-size: 2.5rem; color: var(--text-dim); display: block; margin-bottom: 1rem;"></i>
        <h4 style="color: #fff; margin-bottom: 0.5rem;">عفواً، لا توجد وجبة تطابق بحثك!</h4>
        <p>جرّب البحث باسم آخر أو تصفح الأقسام من الأعلى.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = itemsToRender.map(item => {
    let tagBadge = "";
    if (item.tag === "spicy") {
      tagBadge = `<span class="product-tag-badge badge-spicy">🔥 سبايسي حار</span>`;
    } else if (item.tag === "bestseller") {
      tagBadge = `<span class="product-tag-badge badge-bestseller">⭐ الأكثر طلباً</span>`;
    } else if (item.tag === "family") {
      tagBadge = `<span class="product-tag-badge badge-family">👨‍👩‍👦 للجمعات</span>`;
    }

    return `
      <article class="product-card" data-category="${item.category}">
        <div class="product-thumb-wrap">
          <img src="${item.img}" alt="${item.name_ar}" class="product-thumb" loading="lazy" onerror="this.src='images/zingerking/1-1.jpg'">
          ${tagBadge}
          <span class="product-calories-badge">${item.calories}</span>
        </div>
        <div class="product-content">
          <div class="product-title-row">
            <h3 class="product-title">${item.name_ar}</h3>
          </div>
          <span class="product-title-en">${item.name_en}</span>
          <p class="product-desc">${item.desc}</p>
          <div class="product-footer">
            <div class="product-price-box">
              <span class="price-number">${item.price.toFixed(2)}</span>
              <span class="price-currency">ر.س</span>
            </div>
            <button type="button" class="btn-add-to-cart" onclick="addToCart('${item.id}')" aria-label="أضف ${item.name_ar} إلى السلة">
              <i class="bi bi-plus-lg"></i>
              <span>أضف للطلب</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function updateCartUI() {
  const count = getCartCount();
  const subtotal = getCartSubtotal();

  // Header & Floating bar counter badges
  const headerCounter = document.getElementById("header-cart-count");
  if (headerCounter) {
    headerCounter.textContent = count;
    headerCounter.style.display = count > 0 ? "flex" : "none";
  }

  const floatCounter = document.getElementById("float-cart-count");
  if (floatCounter) {
    floatCounter.textContent = count;
    floatCounter.style.display = count > 0 ? "inline-flex" : "none";
  }

  // Cart body
  const cartBody = document.getElementById("cart-body");
  const cartSubtotalEl = document.getElementById("cart-subtotal");
  const cartDeliveryFeeEl = document.getElementById("cart-delivery-fee");
  const cartTotalEl = document.getElementById("cart-total");

  if (!cartBody) return;

  if (cart.length === 0) {
    cartBody.innerHTML = `
      <div class="cart-empty-state">
        <div class="icon"><i class="bi bi-bag-x"></i></div>
        <h4>سلة الطلب فارغة حالياً</h4>
        <p>تصفح قائمتنا اللذيذة واختر وجبتك المفضلة لتصلك ساخنة ومقرمشة في دقائق!</p>
        <button type="button" class="btn-primary" style="margin-top: 1.5rem; font-size: 0.95rem; padding: 10px 20px;" onclick="closeCart()">
          تصفح قائمة الطعام
        </button>
      </div>
    `;
    if (cartSubtotalEl) cartSubtotalEl.textContent = "0.00 ر.س";
    if (cartDeliveryFeeEl) cartDeliveryFeeEl.textContent = "0.00 ر.س";
    if (cartTotalEl) cartTotalEl.textContent = "0.00 ر.س";
    return;
  }

  // Delivery method determination
  let deliveryMethod = "delivery";
  const selectedRadio = document.querySelector('input[name="delivery_type"]:checked');
  if (selectedRadio) {
    deliveryMethod = selectedRadio.value;
  }

  const deliveryFee = deliveryMethod === "delivery" ? RESTAURANT_DATA.delivery_fee : 0.00;
  const total = subtotal + deliveryFee;

  cartBody.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.img}" alt="${item.name_ar}" class="cart-item-img" onerror="this.src='images/zingerking/1-1.jpg'">
      <div class="cart-item-details">
        <div class="cart-item-title">${item.name_ar}</div>
        <div class="cart-item-price">${(item.price * item.quantity).toFixed(2)} ر.س</div>
      </div>
      <div class="cart-item-controls">
        <button type="button" class="btn-qty" onclick="updateQuantity('${item.id}', 1)" aria-label="زيادة">+</button>
        <span class="cart-item-qty">${item.quantity}</span>
        <button type="button" class="btn-qty" onclick="updateQuantity('${item.id}', -1)" aria-label="إنقاص">-</button>
      </div>
      <button type="button" class="btn-remove-item" onclick="removeItem('${item.id}')" aria-label="حذف">
        <i class="bi bi-trash3"></i>
      </button>
    </div>
  `).join("");

  if (cartSubtotalEl) cartSubtotalEl.textContent = `${subtotal.toFixed(2)} ر.س`;
  if (cartDeliveryFeeEl) cartDeliveryFeeEl.textContent = `${deliveryFee.toFixed(2)} ر.س ${deliveryFee > 0 ? '(توصيل العيينة)' : '(مجاني)'}`;
  if (cartTotalEl) cartTotalEl.textContent = `${total.toFixed(2)} ر.س`;
}

// --- Cart Drawer Controls ---
function openCart() {
  const overlay = document.getElementById("cart-drawer-overlay");
  if (overlay) {
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeCart() {
  const overlay = document.getElementById("cart-drawer-overlay");
  if (overlay) {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// --- Toast Feedback ---
function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="bi bi-check-circle-fill" style="color: var(--primary);"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(-50px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

// --- Live Restaurant Status Engine ---
function updateLiveStatus() {
  // Saudi Arabia is UTC+3
  const now = new Date();
  const utcHours = now.getUTCHours();
  const utcMinutes = now.getUTCMinutes();
  const saudiHours = (utcHours + 3) % 24;
  const currentDecimalHour = saudiHours + (utcMinutes / 60);

  // Restaurant is open e.g. from 12:00 PM (12.0) through 2:30 AM (2.5)
  // Which means: currentDecimalHour >= 12.0 OR currentDecimalHour < 2.5
  const isOpen = (currentDecimalHour >= 12.0 || currentDecimalHour < 2.5);

  const statusElements = document.querySelectorAll(".live-status-target");
  statusElements.forEach(el => {
    if (isOpen) {
      el.innerHTML = `
        <span class="pulsing-dot"></span>
        <span>مفتوح الآن ويغلق عند الساعة <strong>2:30 فجراً</strong> 🌙</span>
      `;
    } else {
      el.innerHTML = `
        <span style="width: 8px; height: 8px; background: #fbbf24; border-radius: 50%; display: inline-block;"></span>
        <span>نفتح يومياً من 12 ظهراً حتى <strong>2:30 فجراً</strong> (نستقبل الطلبات المسائية)</span>
      `;
    }
  });
}

// --- WhatsApp Order Message Builder ---
function sendWhatsAppOrder() {
  if (cart.length === 0) {
    showToast("سلتك فارغة! أضف وجبات للطلب أولاً.");
    return;
  }

  const nameInput = document.getElementById("customer-name");
  const phoneInput = document.getElementById("customer-phone");
  const addressInput = document.getElementById("customer-address");
  const notesInput = document.getElementById("customer-notes");

  const name = nameInput ? nameInput.value.trim() : "";
  const phone = phoneInput ? phoneInput.value.trim() : "";
  const address = addressInput ? addressInput.value.trim() : "";
  const notes = notesInput ? notesInput.value.trim() : "";

  let deliveryMethod = "delivery";
  let deliveryLabel = "توصيل للبيت (العيينة - 2 ر.س)";
  const selectedRadio = document.querySelector('input[name="delivery_type"]:checked');
  if (selectedRadio) {
    deliveryMethod = selectedRadio.value;
    if (deliveryMethod === "car") deliveryLabel = "إيصال للسيارة عند الفرع 🚗";
    else if (deliveryMethod === "pickup") deliveryLabel = "استلام مباشر من الفرع 🍽️";
  }

  const subtotal = getCartSubtotal();
  const deliveryFee = deliveryMethod === "delivery" ? RESTAURANT_DATA.delivery_fee : 0.00;
  const total = subtotal + deliveryFee;

  // Format the WhatsApp message nicely with emojis
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
  if (name) message += `👤 *اسم العميل:* ${name}\n`;
  if (phone) message += `📱 *رقم التواصل:* ${phone}\n`;
  if (address) message += `📍 *العنوان / وصف السيارة:* ${address}\n`;
  if (notes) message += `📝 *ملاحظات خاصة:* ${notes}\n`;

  message += `\nشكرًا لكم! أرجو تأكيد الطلب وسرعة التجهيز.`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${RESTAURANT_DATA.whatsapp_number}?text=${encodedMessage}`;

  // Open WhatsApp in new tab
  window.open(whatsappUrl, "_blank");
  closeCart();
}

// --- Filter & Search Handlers ---
function initFilters() {
  const categoryBtns = document.querySelectorAll(".category-btn");
  const searchInput = document.getElementById("menu-search");

  let activeCategory = "all";
  let searchQuery = "";

  function applyFilters() {
    let filtered = MENU_ITEMS;

    if (activeCategory === "bestsellers") {
      filtered = filtered.filter(item => item.tag === "bestseller");
    } else if (activeCategory !== "all") {
      filtered = filtered.filter(item => item.category === activeCategory);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(item => 
        item.name_ar.toLowerCase().includes(q) || 
        item.name_en.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q)
      );
    }

    renderProducts(filtered);
  }

  categoryBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      categoryBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-category") || "all";
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      applyFilters();
    });
  }
}

// --- Delivery Type Toggle (Radio labels visual style) ---
function initDeliveryRadios() {
  const radios = document.querySelectorAll('input[name="delivery_type"]');
  radios.forEach(radio => {
    radio.addEventListener("change", () => {
      document.querySelectorAll(".delivery-radio-label").forEach(label => {
        label.classList.remove("selected");
      });
      const parentLabel = radio.closest(".delivery-radio-label");
      if (parentLabel) parentLabel.classList.add("selected");
      updateCartUI();
    });
  });
}

// --- Document Ready Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(MENU_ITEMS);
  loadCart();
  initFilters();
  initDeliveryRadios();
  updateLiveStatus();
  setInterval(updateLiveStatus, 60000); // refresh every minute

  // Drawer overlay outside click to close
  const overlay = document.getElementById("cart-drawer-overlay");
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeCart();
      }
    });
  }

  // Keyboard escape key to close cart
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCart();
    }
  });
});
