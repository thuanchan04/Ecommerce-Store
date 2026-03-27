import { Component } from '@angular/core';
import { HeaderTop } from "../../../shared/components/header-top/header-top";
import { ImgProducts, ImgProductsTypes } from "../../../shared/components/img-products/img-products";
import { Icon } from "../../../shared/components/icon/icon";
import { Icons } from '../../../shared/components/icon/icon.model';
import { ProductCard } from "../../../shared/components/product-card/product-card";
import { Button } from "../../../shared/components/button/button";
import { Footer } from "../../../shared/components/footer/footer";
import { CATEGORIES, FEATURED_PRODUCTS, PRODUCTS, PRODUCTS_DISCOUNT } from './home.data';
import { CategoryCard } from "../../../shared/components/category-card/category-card";
import { FeaturedCard } from "../../../shared/components/featured-card/featured-card";


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderTop, ImgProducts, Icon, ProductCard, Button, Footer, CategoryCard, FeaturedCard],
  templateUrl: './home-page.html'
})
export class HomePage {
  categories = CATEGORIES;
  products = PRODUCTS;
  featuredProducts = FEATURED_PRODUCTS;
  productDiscount = PRODUCTS_DISCOUNT; // 10% discount
  ImgProductsTypes = ImgProductsTypes;
  Icons = Icons;

  
}
