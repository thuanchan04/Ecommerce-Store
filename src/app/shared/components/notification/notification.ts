import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { NotificationService } from '../../../core/service/notification.service';
import { CartService } from '../../../core/service/cart.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <!-- Toast container -->
    <div class="fixed top-24 right-6 z-[9999] flex flex-col gap-3 pointer-events-none" aria-live="polite">
      @for (toast of notifService.toasts(); track toast.id) {
        <div
          class="pointer-events-auto flex items-center gap-3 px-5 py-3 rounded-xl shadow-lg text-white text-sm font-medium min-w-60 max-w-xs"
          [class.bg-green-600]="toast.type === 'success'"
          [class.bg-blue-600]="toast.type === 'info'"
          [class.bg-red-600]="toast.type === 'error'"
          role="alert"
        >
          <span class="flex-1">{{ toast.message }}</span>
          <button
            type="button"
            class="ml-2 text-white opacity-70 hover:opacity-100 cursor-pointer"
            (click)="notifService.removeToast(toast.id)"
            aria-label="Dismiss"
          >✕</button>
        </div>
      }
    </div>

    <!-- Cart Quantity Modal -->
    @if (notifService.cartModalOpen()) {
      <div
        class="fixed inset-0 z-[9998] flex items-center justify-center bg-black/40"
        role="dialog"
        aria-modal="true"
        aria-label="Add to cart"
        (click)="onOverlayClick($event)"
      >
        <div class="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm flex flex-col gap-6" (click)="$event.stopPropagation()">
          <div class="flex justify-between items-center">
            <h2 class="text-xl font-bold">Add to Cart</h2>
            <button type="button" class="text-gray-400 hover:text-gray-700 cursor-pointer" (click)="notifService.closeCartModal()" aria-label="Close">✕</button>
          </div>

          @if (notifService.cartModal().product; as product) {
            <p class="text-gray-600 text-sm line-clamp-2">{{ product.name }}</p>

            <!-- Quantity controls -->
            <div class="flex items-center justify-center gap-4">
              <button
                type="button"
                class="w-10 h-10 rounded-full border-2 border-gray-300 text-xl font-bold flex items-center justify-center hover:bg-gray-100 cursor-pointer disabled:opacity-30"
                (click)="decrement()"
                [disabled]="notifService.cartModal().quantity <= 1"
                aria-label="Decrease quantity"
              >−</button>
              <span class="text-2xl font-semibold w-8 text-center">{{ notifService.cartModal().quantity }}</span>
              <button
                type="button"
                class="w-10 h-10 rounded-full border-2 border-gray-300 text-xl font-bold flex items-center justify-center hover:bg-gray-100 cursor-pointer"
                (click)="increment()"
                aria-label="Increase quantity"
              >+</button>
            </div>

            <div class="flex gap-3">
              <button
                type="button"
                class="flex-1 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 cursor-pointer text-sm"
                (click)="notifService.closeCartModal()"
              >Cancel</button>
              <button
                type="button"
                class="flex-1 bg-black text-white rounded-lg py-2 hover:bg-gray-800 cursor-pointer text-sm font-medium"
                (click)="confirmAddToCart()"
              >Add to Cart</button>
            </div>
          }
        </div>
      </div>
    }
  `
})
export class NotificationComponent {
  readonly notifService = inject(NotificationService);
  private readonly cartService = inject(CartService);

  increment(): void {
    this.notifService.setCartModalQuantity(this.notifService.cartModal().quantity + 1);
  }

  decrement(): void {
    this.notifService.setCartModalQuantity(this.notifService.cartModal().quantity - 1);
  }

  confirmAddToCart(): void {
    const { product, quantity } = this.notifService.cartModal();
    if (!product) return;
    for (let i = 0; i < quantity; i++) {
      this.cartService.addToCart(product);
    }
    this.notifService.closeCartModal();
    this.notifService.showToast(`🛒 Added ${quantity}× ${product.name.slice(0, 30)}... to cart!`);
  }

  onOverlayClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.notifService.closeCartModal();
    }
  }
}
