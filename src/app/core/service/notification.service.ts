import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../../data/product.data';

export interface Toast {
  id: number;
  message: string;
  type: 'success' | 'info' | 'error';
}

export interface CartModalState {
  open: boolean;
  product: Product | null;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private _toasts = signal<Toast[]>([]);
  private _cartModal = signal<CartModalState>({ open: false, product: null, quantity: 1 });
  private _nextId = 0;

  readonly toasts = this._toasts.asReadonly();
  readonly cartModal = this._cartModal.asReadonly();
  readonly cartModalOpen = computed(() => this._cartModal().open);

  showToast(message: string, type: Toast['type'] = 'success', durationMs = 3000): void {
    const id = ++this._nextId;
    this._toasts.update(t => [...t, { id, message, type }]);
    setTimeout(() => this.removeToast(id), durationMs);
  }

  removeToast(id: number): void {
    this._toasts.update(t => t.filter(toast => toast.id !== id));
  }

  openCartModal(product: Product): void {
    this._cartModal.set({ open: true, product, quantity: 1 });
  }

  closeCartModal(): void {
    this._cartModal.update(s => ({ ...s, open: false, product: null, quantity: 1 }));
  }

  setCartModalQuantity(quantity: number): void {
    this._cartModal.update(s => ({ ...s, quantity: Math.max(1, quantity) }));
  }
}
