import { Component, inject, computed, signal, ChangeDetectionStrategy } from '@angular/core';
import { HeaderTop } from "../../../shared/components/header-top/header-top";
import { ImgProducts, ImgProductsTypes } from "../../../shared/components/img-products/img-products";
import { ProductCard } from "../../../shared/components/product-card/product-card";
import { Button } from "../../../shared/components/button/button";
import { Footer } from "../../../shared/components/footer/footer";
import { CategoryCard } from "../../../shared/components/category-card/category-card";
import { FeaturedCard } from "../../../shared/components/featured-card/featured-card";
import { CATEGORIES } from '../../../data/category.data';
import { FEATURED_BANNERS } from '../../../data/featured.data';
import { ProductService } from '../../../core/service/product.service';
import { Router, RouterLink } from '@angular/router';

type HomeTab = 'new-arrivals' | 'bestsellers' | 'featured';

@Component({
  selector: 'app-home-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeaderTop, ImgProducts, ProductCard, Button, Footer, CategoryCard, FeaturedCard, RouterLink],
  templateUrl: './home-page.html'
})
export class HomePage {
  categories = CATEGORIES;
  featuredProducts = FEATURED_BANNERS;

  activeTab = signal<HomeTab>('new-arrivals');

  ImgProductsTypes = ImgProductsTypes;

  private productService = inject(ProductService);
  private router = inject(Router);

  /** Reactive: auto-updates when ProductService signal changes */
  private readonly allNonDiscount = computed(() => this.productService.getNonDiscount());
  readonly productDiscount = computed(() => this.productService.getDiscount().slice(0, 4));

  readonly tabProducts = computed(() => {
    const tab = this.activeTab();
    const all = this.allNonDiscount();
    if (tab === 'new-arrivals') {
      return [...all]
        .sort((a, b) => (b.createdAt ?? '').localeCompare(a.createdAt ?? ''))
        .slice(0, 8);
    }
    if (tab === 'bestsellers') {
      return [...all]
        .sort((a, b) => (b.salesCount ?? 0) - (a.salesCount ?? 0))
        .slice(0, 8);
    }
    return all.filter(p => p.isFeatured).slice(0, 8);
  });

  setTab(tab: HomeTab): void {
    this.activeTab.set(tab);
  }

  goToCategory(categoryId: string): void {
    this.router.navigate(['/products'], {
      queryParams: { category: categoryId }
    });
  }

  onSearch(keyword: string): void {
    this.router.navigate(['/products'], {
      queryParams: { search: keyword }
    });
  }
}

