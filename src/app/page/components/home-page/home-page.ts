import { Component, OnInit, inject } from '@angular/core';
import { HeaderTop } from "../../../shared/components/header-top/header-top";
import { ImgProducts, ImgProductsTypes } from "../../../shared/components/img-products/img-products";
import { Icon } from "../../../shared/components/icon/icon";
import { Icons } from '../../../shared/components/icon/icon.model';
import { ProductCard } from "../../../shared/components/product-card/product-card";
import { Button } from "../../../shared/components/button/button";
import { Footer } from "../../../shared/components/footer/footer";
import { CategoryCard } from "../../../shared/components/category-card/category-card";
import { FeaturedCard } from "../../../shared/components/featured-card/featured-card";
import { CATEGORIES } from '../../../data/category.data';
import { FEATURED_BANNERS } from '../../../data/featured.data';
import { Product } from '../../../data/product.data';
import { ProductService } from '../../../core/service/product.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ HeaderTop, ImgProducts, Icon, ProductCard, Button, Footer, CategoryCard, FeaturedCard ],
  templateUrl: './home-page.html'
})
export class HomePage implements OnInit {
  categories = CATEGORIES;
  featuredProducts = FEATURED_BANNERS;

  products: Product[] = [];
  productDiscount: Product[] = [];

  ImgProductsTypes = ImgProductsTypes;
  Icons = Icons;

  private productService = inject(ProductService);
  private router = inject(Router);

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.products = this.productService.getNonDiscount();
    this.productDiscount = this.productService.getDiscount();
  }
  onToggleFavorite(id: number) {
    this.productService.toggleFavorite(id);
    this.loadData(); // reload lại
  }
  goToCategory(categoryId: string) {
    this.router.navigate(['/products'], {
      queryParams: { category: categoryId }
    });
  }
  onSearch(keyword: string) {
    this.router.navigate(['/products'], {
      queryParams: { search: keyword }
    });
  }
  
}