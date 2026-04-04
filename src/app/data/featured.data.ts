import { ImgProductsTypes } from "../shared/components/img-products/img-products";

export interface FeaturedBanner {
  id: number;
  image: ImgProductsTypes;
  title: string;
  description: string;
}

export const FEATURED_BANNERS: FeaturedBanner[] = [
  {
    id: 1,
    image: ImgProductsTypes.GR1,
    title: 'Popular Products',
    description: 'Top trending products this week'
  },
  {
    id: 2,
    image: ImgProductsTypes.GR2,
    title: 'iPad Pro',
    description: 'Powerful and portable tablet'
  },
  {
    id: 3,
    image: ImgProductsTypes.GR3,
    title: 'Samsung Galaxy',
    description: 'Latest Android flagship devices'
  },
  {
    id: 4,
    image: ImgProductsTypes.GR4,
    title: 'Macbook Pro',
    description: 'High performance for professionals'
  }
];