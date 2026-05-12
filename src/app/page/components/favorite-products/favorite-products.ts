import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderTop } from "../../../shared/components/header-top/header-top";
import { Footer } from "../../../shared/components/footer/footer";
import { ProductCard } from "../../../shared/components/product-card/product-card";
import { ProductService } from '../../../core/service/product.service';

@Component({
  selector: 'app-favorite-products',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeaderTop, Footer, ProductCard, RouterLink],
  templateUrl: './favorite-products.html'
})
export class FavoriteProducts {
  private productService = inject(ProductService);

  /** Reactive: auto-updates when any product's isFavorite changes */
  readonly favorites = this.productService.favorites;
  readonly count = computed(() => this.favorites().length);
}
