import { ImgProductsTypes } from "../shared/components/img-products/img-products";

export interface ProductSpec {
  screenSize?: string;
  screenResolution?: string;
  screenRefreshRate?: string;
  pixelDensity?: string;
  screenType?: string;
  screenAdditional?: string[];
  cpu?: string;
  cores?: number;
  mainCamera?: string;
  frontCamera?: string;
  battery?: string;
}

export interface Product {
  id: number;
  name: string;
  image: ImgProductsTypes;
  price: number;
  originalPrice?: number;
  sku?: string;
  isFavorite: boolean;
  category: string;
  brand: string;
  isFeatured: boolean;
  isDiscount: boolean;
  colors?: string[];
  storageOptions?: string[];
  specs?: ProductSpec;
  description?: string;
  gallery?: ImgProductsTypes[];
  rating?: number;
  salesCount?: number;
  createdAt?: string;
}

export const PRODUCTS: Product[] = [
  // 🔥 NORMAL + FEATURED
  {
    id: 1,
    name: 'Apple iPhone 14 Pro Max 128GB Deep Purple',
    image: ImgProductsTypes.IP14PRO1,
    price: 1399,
    originalPrice: 1499,
    sku: '25139526913884',
    isFavorite: false,
    category: 'phone',
    brand: 'Apple',
    isFeatured: true,
    isDiscount: false,
    colors: ['#1a1a1a', '#7B2FBE', '#C0392B', '#D4A017', '#C0C0C0'],
    storageOptions: ['128GB', '256GB', '512GB', '1TB'],
    specs: {
      screenSize: '6.7"',
      screenResolution: '2796×1290',
      screenRefreshRate: '120 Hz',
      pixelDensity: '460 ppi',
      screenType: 'OLED',
      screenAdditional: ['Dynamic Island', 'Always-On display', 'HDR display', 'True Tone', 'Wide color (P3)'],
      cpu: 'Apple A16 Bionic',
      cores: 6,
      mainCamera: '48-12 -12 MP',
      frontCamera: '12 MP',
      battery: '4323 mAh'
    },
    description: 'Enhanced capabilities thanks to an enlarged display of 6.7 inches and work without recharging throughout the day. Incredible photoas in weak, yesand in bright lightusing the new systemwith two cameras.',
    gallery: [ImgProductsTypes.IP14PRO1, ImgProductsTypes.IP14PRo512, ImgProductsTypes.IP14PRO1T, ImgProductsTypes.IP],
    rating: 4.9,
    salesCount: 1800,
    createdAt: '2024-03-01'
  },
  {
    id: 2,
    name: 'Blackmagic Pocket Cinema Camera 6K',
    image: ImgProductsTypes.CAMERA6K,
    price: 2535,
    sku: '11234567890001',
    isFavorite: false,
    category: 'camera',
    brand: 'Blackmagic',
    isFeatured: true,
    isDiscount: false,
    rating: 4.5,
    salesCount: 150,
    createdAt: '2024-01-20'
  },
  {
    id: 3,
    name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium',
    image: ImgProductsTypes.APPLE_WATCH9GPS,
    price: 399,
    sku: '63632324000003',
    isFavorite: true,
    category: 'watch',
    brand: 'Apple',
    isFeatured: false,
    isDiscount: false,
    rating: 4.7,
    salesCount: 800,
    createdAt: '2024-02-15'
  },
  {
    id: 4,
    name: 'AirPods Max Silver Starlight Aluminium',
    image: ImgProductsTypes.AIR_PODS,
    price: 549,
    sku: '53459358345000',
    isFavorite: false,
    category: 'headphone',
    brand: 'Apple',
    isFeatured: false,
    isDiscount: false,
    rating: 4.6,
    salesCount: 600,
    createdAt: '2024-01-10'
  },
  {
    id: 5,
    name: 'Samsung Galaxy Watch6 Classic 47mm Black',
    image: ImgProductsTypes.WATCH6,
    price: 369,
    isFavorite: false,
    category: 'watch',
    brand: 'Samsung',
    isFeatured: false,
    isDiscount: false,
    rating: 4.3,
    salesCount: 400,
    createdAt: '2024-03-10'
  },
  {
    id: 6,
    name: 'Galaxy Z Fold5 | 256GB | Phantom Black',
    image: ImgProductsTypes.ZFOLD5,
    price: 1799,
    isFavorite: true,
    category: 'phone',
    brand: 'Samsung',
    isFeatured: true,
    isDiscount: false,
    rating: 4.8,
    salesCount: 1200,
    createdAt: '2024-02-20'
  },
  {
    id: 7,
    name: 'Galaxy Buds FE Graphite',
    image: ImgProductsTypes.BUDS_FE,
    price: 99.99,
    isFavorite: false,
    category: 'headphone',
    brand: 'Samsung',
    isFeatured: false,
    isDiscount: false,
    rating: 4.2,
    salesCount: 500,
    createdAt: '2024-01-05'
  },
  {
    id: 8,
    name: 'Apple iPad 9 10.2 64GB Wi-Fi Silver',
    image: ImgProductsTypes.IPAD9,
    price: 398,
    isFavorite: false,
    category: 'tablet',
    brand: 'Apple',
    isFeatured: true,
    isDiscount: false,
    rating: 4.4,
    salesCount: 900,
    createdAt: '2024-03-15'
  },

  // 🔥 DISCOUNT PRODUCTS
  {
    id: 9,
    name: 'Apple iPhone 14 Pro 512GB Gold',
    image: ImgProductsTypes.IP14PRo512,
    price: 1437,
    isFavorite: false,
    category: 'phone',
    brand: 'Apple',
    isFeatured: false,
    isDiscount: true,
    rating: 4.7
  },
    {
    id: 10,
    name: 'Apple Watch Series 9 GPS 41mm',
    image: ImgProductsTypes.APPLE_WATCH9GPS,
    price: 399,
    isFavorite: true,
    category: 'watch',
    brand: 'Apple',
    isFeatured: false,
    isDiscount: true,
    rating: 4.6
  },
  {
    id: 11,
    name: 'AirPods Max Silver Starlight Aluminium',
    image: ImgProductsTypes.AIR_PODS,
    price: 500,
    isFavorite: false,
    category: 'headphone',
    brand: 'Apple',
    isFeatured: false,
    isDiscount: true,
    rating: 4.4
  },
  {
    id: 12,
    name: 'Apple iPhone 14 Pro 1TB Gold',
    image: ImgProductsTypes.IP14PRO1T,
    price: 1200,
    isFavorite: false,
    category: 'phone',
    brand: 'Apple',
    isFeatured: false,
    isDiscount: true,
    rating: 4.3
  },
  {
    id: 13,
    name: 'Apple iPhone 11 64GB Black',
    image: ImgProductsTypes.IP11,
    price: 599,
    isFavorite: false,
    category: 'phone',
    brand: 'Apple',
    isFeatured: false,
    isDiscount: false,
    rating: 4.1
  },
  {
    id: 14,
    name: 'Apple iPhone 13 Mini 128GB Pink',
    image: ImgProductsTypes.IP13MINI,
    price: 699,
    isFavorite: false,
    category: 'phone',
    brand: 'Apple',
    isFeatured: false,
    isDiscount: false,
    rating: 4.5
  },
  {
    id: 15,
    name: 'Apple iPhone 14 128GB Blue',
    image: ImgProductsTypes.IP14,
    price: 1399,
    isFavorite: false,
    category: 'phone',
    brand: 'Apple',
    isFeatured: false,
    isDiscount: false,
    rating: 4.3
  },
  {
    id: 16,
    name: 'Apple iPhone 11 256GB White',
    image: ImgProductsTypes.IP11,
     price: 550,
    isFavorite: false,
    category: 'phone',
    brand: 'Apple',
    isFeatured: false,
    isDiscount: false,
    rating: 4.0
  },
  {
    id: 17,
    name: 'Apple iPhone 14 Pro 256GB Silver',
    image: ImgProductsTypes.IP14PRO1,
     price: 1399,
    isFavorite: false,
    category: 'phone',
    brand: 'Apple',
    isFeatured: false,
    isDiscount: false,
    rating: 4.6
  }

];