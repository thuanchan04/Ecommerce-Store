import { Component, ChangeDetectionStrategy, inject, signal, computed } from '@angular/core';
import { HeaderTop } from "../../../shared/components/header-top/header-top";
import { Footer } from "../../../shared/components/footer/footer";
import { ImgProducts } from "../../../shared/components/img-products/img-products";
import { Icon } from "../../../shared/components/icon/icon";
import { Icons } from "../../../shared/components/icon/icon.model";
import { CartService } from '../../../core/service/cart.service';
import { NotificationService } from '../../../core/service/notification.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeaderTop, Footer, ImgProducts, Icon, FormsModule],
  templateUrl: './shopping-cart.html'
})
export class ShoppingCart {
  private cartService = inject(CartService);
  private router = inject(Router);
  private notifService = inject(NotificationService);

  Icons = Icons;

  readonly items = this.cartService.items;
  readonly count = this.cartService.count;
  readonly subtotal = this.cartService.subtotal;
  readonly isEmpty = computed(() => this.items().length === 0);

  readonly estimatedTax = computed(() => 50);
  readonly shipping = computed(() => 29);
  readonly total = computed(() => this.subtotal() + this.estimatedTax() + this.shipping());

  promoCode = signal('');
  bonusCard = signal('');

  increment(productId: number): void {
    const item = this.items().find(i => i.product.id === productId);
    if (item) {
      this.cartService.updateQuantity(productId, item.quantity + 1);
    }
  }

  decrement(productId: number): void {
    const item = this.items().find(i => i.product.id === productId);
    if (item) {
      this.cartService.updateQuantity(productId, item.quantity - 1);
    }
  }

  remove(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  applyBonus(): void {
    // Bonus card logic placeholder
  }

  checkout(): void {
    if (this.isEmpty()) {
      this.notifService.showToast('⚠️ Your cart is empty. Add products before checkout!', 'info', 3000);
      return;
    }
    this.router.navigate(['/checkout']);
  }
}
