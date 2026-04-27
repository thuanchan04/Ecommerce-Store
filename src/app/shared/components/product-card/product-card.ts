import { Component, ChangeDetectionStrategy, inject, computed, input } from '@angular/core';
import { Icons } from '../icon/icon.model';
import { Icon } from "../icon/icon";
import { ImgProducts, ImgProductsTypes } from "../img-products/img-products";
import { Button } from "../button/button";
import { Router } from '@angular/router';
import { CartService } from '../../../core/service/cart.service';
import { ProductService } from '../../../core/service/product.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, ImgProducts, Button],
  templateUrl: './product-card.html'
})
export class ProductCard {

  productName = input<string>('');
  productImage = input<ImgProductsTypes>(ImgProductsTypes.IP14PRO1);
  price = input<number>(0);
  productId = input<number>();

  Icons = Icons;
  ImgProductsTypes = ImgProductsTypes;

  private router = inject(Router);
  private cartService = inject(CartService);
  private productService = inject(ProductService);

  /** Reactive favorite state — derived from ProductService signal */
  readonly isFavorite = computed(() => {
    const id = this.productId();
    return id != null ? (this.productService.getById(id)?.isFavorite ?? false) : false;
  });

  /** Reactive cart quantity — derived from CartService signal */
  readonly quantity = computed(() => {
    const id = this.productId();
    if (id == null) return 0;
    return this.cartService.items().find(i => i.product.id === id)?.quantity ?? 0;
  });

  readonly showControls = computed(() => this.quantity() > 0);

  toggleFavorite(): void {
    const id = this.productId();
    if (id != null) this.productService.toggleFavorite(id);
  }

  goToDetails(): void {
    const id = this.productId();
    if (id != null) this.router.navigate(['/product', id]);
  }

  startAdding(event: Event): void {
    event.stopPropagation();
    const id = this.productId();
    if (id == null) return;
    const product = this.productService.getById(id);
    if (!product) return;
    const inCart = this.cartService.items().find(i => i.product.id === id);
    if (inCart) {
      this.cartService.updateQuantity(id, inCart.quantity + 1);
    } else {
      this.cartService.addToCart(product);
    }
  }

  increment(event: Event): void {
    event.stopPropagation();
    const id = this.productId();
    if (id == null) return;
    this.cartService.updateQuantity(id, this.quantity() + 1);
  }

  decrement(event: Event): void {
    event.stopPropagation();
    const id = this.productId();
    if (id == null) return;
    this.cartService.updateQuantity(id, this.quantity() - 1);
  }

  buyNow(event: Event): void {
    event.stopPropagation();
    const id = this.productId();
    if (id == null) return;
    const product = this.productService.getById(id);
    if (!product) return;
    if (this.quantity() === 0) {
      this.cartService.addToCart(product);
    }
    this.router.navigate(['/cart']);
  }
}

