import { ImgProductsTypes } from "../shared/components/img-products/img-products";


export interface Product {
  id: number;
  name: string;
  image: ImgProductsTypes;
  price: number;
  isFavorite: boolean;
  category: string;
  brand: string;
  isFeatured: boolean;
  isDiscount: boolean;
}

export const PRODUCTS: Product[] = [
  // 🔥 NORMAL + FEATURED
  {
    id: 1,
    name: 'Apple iPhone 14 Pro Max 128GB Deep Purple',
    image: ImgProductsTypes.IP14PRO1,
    price: 900,
    isFavorite: false,
    category: 'phone',
    brand: 'Apple',
    isFeatured: true,
    isDiscount: false
  },
  {
    id: 2,
    name: 'Blackmagic Pocket Cinema Camera 6K',
    image: ImgProductsTypes.CAMERA6K,
    price: 2535,
    isFavorite: false,
    category: 'camera',
    brand: 'Blackmagic',
    isFeatured: true,
    isDiscount: false
  },
  {
    id: 3,
    name: 'Apple Watch Series 9 GPS 41mm',
    image: ImgProductsTypes.APPLE_WATCH9GPS,
    price: 399,
    isFavorite: true,
    category: 'watch',
    brand: 'Apple',
    isFeatured: false,
    isDiscount: false
  },
  {
    id: 4,
    name: 'AirPods Max Silver Starlight Aluminium',
    image: ImgProductsTypes.AIR_PODS,
    price: 549,
    isFavorite: false,
    category: 'headphone',
    brand: 'Apple',
    isFeatured: false,
    isDiscount: false
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
    isDiscount: false
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
    isDiscount: false
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
    isDiscount: false
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
    isDiscount: false
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
    isDiscount: true
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
    isDiscount: true
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
    isDiscount: true
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
    isDiscount: true
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
    isDiscount: false
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
    isDiscount: false
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
    isDiscount: false
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
    isDiscount: false
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
    isDiscount: false
  }

];