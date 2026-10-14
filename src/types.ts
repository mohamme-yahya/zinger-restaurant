export type CategoryId = 'all' | 'bestsellers' | 'burgers' | 'clubs' | 'chicken' | 'fries' | 'juices';

export type DeliveryType = 'delivery' | 'car' | 'pickup';

export interface MenuItem {
  id: string;
  name_ar: string;
  name_en: string;
  category: 'burgers' | 'clubs' | 'chicken' | 'fries' | 'juices';
  price: number;
  calories: string;
  img: string;
  desc: string;
  tag?: 'spicy' | 'bestseller' | 'family' | null;
}

export interface CartItem {
  id: string;
  name_ar: string;
  name_en: string;
  price: number;
  img: string;
  quantity: number;
}

export interface OrderFormDetails {
  customerName: string;
  customerPhone: string;
  deliveryType: DeliveryType;
  addressOrCar: string;
  notes: string;
}

export interface RestaurantInfo {
  name_ar: string;
  name_en: string;
  phone: string;
  phone_international: string;
  whatsapp_number: string;
  address: string;
  plus_code: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  delivery_fee_sar: number;
  rating: number;
  reviews_count: number;
  instagram: string;
  maps_url: string;
}
