import { Icons } from "../../../shared/components/icon/icon.model";
import { ImgProductsTypes } from "../../../shared/components/img-products/img-products";

export const CATEGORIES = [
  { name: 'Phone', icon: Icons.PHONES_BIG },
  { name: 'Smart Watches', icon: Icons.SMART_WATCHES_BIG },
  { name: 'Cameras', icon: Icons.CAMERAS },
  { name: 'Headphones', icon: Icons.HEADPHONES_BIG },
  { name: 'Computers', icon: Icons.COMPUTERS_BIG },
  { name: 'Gaming', icon: Icons.GAMING_BIG }
];

export const PRODUCTS = [
  {
    isFavorite: false,
    image: ImgProductsTypes.IP14PRO1,
    name: 'Apple iPhone 14 Pro Max 128GB Deep Purple',
    price: 900
  },
  {
    isFavorite: false,
    image: ImgProductsTypes.CAMERA6K,
    name: 'Blackmagic Pocket Cinema Camera 6K',
    price: 2535
  },
  {
    isFavorite: true,
    image: ImgProductsTypes.APPLE_WATCH9GPS,
    name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium',
    price:399
  },
  {
    isFavorite: false,
    image: ImgProductsTypes.AIR_PODS,
    name: 'AirPods Max Silver Starlight Aluminium',
    price:549
  },
  {
    isFavorite: false,
    image: ImgProductsTypes.WATCH6,
    name: 'Samsung Galaxy Watch6 Classic 47mm Black',
    price: 369
  },
  {
    isFavorite: true,
    image: ImgProductsTypes.ZFOLD5,
    name: 'Galaxy Z Fold5 Unclocked | 256GB | Phantom Black',
    price: 1799
  },
  {
    isFavorite: false,
    image: ImgProductsTypes.BUDS_FE,
    name: 'Galaxy Buds FE\nGraphite',
    price: 99.99
  },
  {
    isFavorite: false,
    image: ImgProductsTypes.IPAD9,
    name: 'Apple iPad 9 10.2 64GB Wi-Fi Silver (MK2L3) 2021',
    price: 398
  },
  
];

export const FEATURED_PRODUCTS = [
  {
    image: ImgProductsTypes.GR1,
    name: 'Popular Products',
    description: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.'
  },
  {
    image: ImgProductsTypes.GR2,
    name: 'Ipad Pro',
    description: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.'
  },
  {
    image: ImgProductsTypes.GR3,
    name: 'Samsung Galaxy ',
    description: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.'
  },
  {
    image: ImgProductsTypes.GR4,
    name: 'Macbook Pro ',
    description: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.'
  }
];

export const PRODUCTS_DISCOUNT = [
  {
    isFavorite: false,
    image: ImgProductsTypes.IP14PRo512,
    name: 'Apple iPhone 14 Pro 512GB Gold (MQ233)',
    price: 1437
  },
  {
    isFavorite: true,
    image: ImgProductsTypes.AIR_PODS,
    name: 'AirPods Max Silver Starlight Aluminium',
    price: 549
  },
  {
    isFavorite: false,
    image: ImgProductsTypes.APPLE_WATCH9GPS,
    name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium',
    price:399
  },
  {
    isFavorite: false,
    image: ImgProductsTypes.IP14PRO1T,
    name: 'Apple iPhone 14 Pro 1TB Gold (MQ2V3)',
    price: 1499
  }
];