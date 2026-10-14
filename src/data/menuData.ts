import type { MenuItem, RestaurantInfo } from '../types';

export const RESTAURANT_DATA: RestaurantInfo = {
  name_ar: "زنجر كينج",
  name_en: "Zinker King",
  phone: "053 104 9883",
  phone_international: "+966531049883",
  whatsapp_number: "966531049883",
  address: "5762، طريق الملك عبد العزيز، العيينة",
  plus_code: "W94J+88 العيينة",
  coordinates: {
    lat: 24.9057668,
    lng: 46.3808459
  },
  delivery_fee_sar: 2.00,
  rating: 3.9,
  reviews_count: 466,
  instagram: "https://instagram.com/zinkerking",
  maps_url: "https://maps.app.goo.gl/AQpWh5NDiUZzUmfa7"
};

export const MENU_ITEMS: MenuItem[] = [
  // --- Zinger & Burgers ---
  {
    id: "burger-zinger-special",
    name_ar: "برجر زنجر كينج سوبريم",
    name_en: "Zinker King Supreme Burger",
    category: "burgers",
    price: 18.00,
    calories: "540 Kcal",
    img: "/images/zingerking/1-1.jpg",
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
    img: "/images/zingerking/1-1.jpg",
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
    img: "/images/zingerking/shot.jpg.jpeg",
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
    img: "/images/zingerking/8.webp",
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
    img: "/images/zingerking/8.webp",
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
    img: "/images/zingerking/8.webp",
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
    img: "/images/zingerking/8.webp",
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
    img: "/images/zingerking/8.webp",
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
    img: "/images/zingerking/8.webp",
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
    img: "/images/zingerking/8.webp",
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
    img: "/images/zingerking/8.webp",
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
    img: "/images/zingerking/9.webp",
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
    img: "/images/zingerking/9.webp",
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
    img: "/images/zingerking/9.webp",
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
    img: "/images/zingerking/1-5.png",
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
    img: "/images/zingerking/1-2.jpg",
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
    img: "/images/zingerking/1-5.png",
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
    img: "/images/zingerking/8.webp",
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
    img: "/images/zingerking/8.webp",
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
    img: "/images/zingerking/1-5.png",
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
    img: "/images/zingerking/1-5.png",
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
    img: "/images/zingerking/1-5.png",
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
    img: "/images/zingerking/8.webp",
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
    img: "/images/zingerking/8.webp",
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
    img: "/images/zingerking/8.webp",
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
    img: "/images/zingerking/8.webp",
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
    img: "/images/zingerking/11_1.webp",
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
    img: "/images/zingerking/11_1.webp",
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
    img: "/images/zingerking/12.webp",
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
    img: "/images/zingerking/1-3.jpg",
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
    img: "/images/zingerking/10.webp",
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
    img: "/images/zingerking/10.webp",
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
    img: "/images/zingerking/10.webp",
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
    img: "/images/zingerking/11_1.webp",
    desc: "مشروب الحلى الهندي الفاخر مع شعيرية الفالودة وبذور الشيا والمكسرات وكرة آيسكريم.",
    tag: null
  }
];
