import {
  Component,
  ChangeDetectionStrategy,
  inject,
  signal,
  computed
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HeaderTop } from '../../../shared/components/header-top/header-top';
import { Footer } from '../../../shared/components/footer/footer';
import { Icon } from '../../../shared/components/icon/icon';
import { Icons } from '../../../shared/components/icon/icon.model';
import { Button } from '../../../shared/components/button/button';
import { CartService } from '../../../core/service/cart.service';

export interface Address {
  id: number;
  label: string;
  fullAddress: string;
  recipient: string;
  phone: string;
}

const SAMPLE_ADDRESSES: Address[] = [
  {
    id: 1,
    label: 'Home',
    fullAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    recipient: 'Jane Cooper',
    phone: '(704) 555-0127'
  },
  {
    id: 2,
    label: 'Office',
    fullAddress: '4517 Washington Ave. Manchester, Kentucky 39495',
    recipient: 'Jane Cooper',
    phone: '(219) 555-0114'
  }
];

@Component({
  selector: 'app-checkout',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeaderTop, Footer, Icon, Button, FormsModule, RouterModule],
  templateUrl: './checkout.html'
})
export class Checkout {
  private cartService = inject(CartService);
  private router = inject(Router);

  Icons = Icons;

  currentStep = signal<1 | 2 | 3>(1);

  // Step 1 — Address
  addresses = signal<Address[]>(SAMPLE_ADDRESSES);
  selectedAddressId = signal(1);

  // Step 2 — Shipping
  selectedShipping = signal<'free' | 'express' | 'schedule'>('free');
  scheduleDate = signal('');

  // Step 3 — Payment
  paymentTab = signal<'card' | 'paypal' | 'paypal-credit'>('card');
  cardHolder = signal('');
  cardNumber = signal('');
  expDate = signal('');
  cvv = signal('');
  sameAsBilling = signal(true);
  showCvv = signal(false);

  // Cart summary
  readonly items = this.cartService.items;
  readonly subtotal = this.cartService.subtotal;
  readonly estimatedTax = computed(() => 50);
  readonly shippingCost = computed(() => this.selectedShipping() === 'express' ? 8.5 : 0);
  readonly total = computed(() => this.subtotal() + this.estimatedTax() + this.shippingCost());

  goTo(step: 1 | 2 | 3): void {
    this.currentStep.set(step);
  }

  next(): void {
    const current = this.currentStep();
    if (current < 3) this.currentStep.set((current + 1) as 1 | 2 | 3);
  }

  back(): void {
    const current = this.currentStep();
    if (current > 1) this.currentStep.set((current - 1) as 1 | 2 | 3);
  }

  pay(): void {
    this.cartService.clear();
    this.router.navigate(['/home']);
  }

  toggleShowCvv(): void {
    this.showCvv.set(!this.showCvv());
  }

  toggleSameAsBilling(): void {
    this.sameAsBilling.set(!this.sameAsBilling());
  }

  formatCardNumber(val: string): string {
    return val.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
  }

  onCardNumberInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const raw = input.value.replace(/\D/g, '').substring(0, 16);
    const formatted = raw.replace(/(.{4})/g, '$1 ').trim();
    this.cardNumber.set(formatted);
    input.value = formatted;
  }

  getStepClass(step: number): string {
    const current = this.currentStep();
    if (step === current) return 'flex flex-col items-center gap-1 text-black font-semibold';
    if (step < current) return 'flex flex-col items-center gap-1 text-green-600';
    return 'flex flex-col items-center gap-1 text-gray-400';
  }

  getStepLineClass(step: number): string {
    return step < this.currentStep() ? 'h-0.5 flex-1 bg-black' : 'h-0.5 flex-1 bg-gray-200';
  }

  // ── Address Form Modal ──
  showAddressForm = signal(false);
  nextAddressId = signal(3);
  newAddress = {
    label: '',
    fullAddress: '',
    recipient: '',
    phone: '',
  };

  openAddressForm(): void {
    this.newAddress = { label: '', fullAddress: '', recipient: '', phone: '' };
    this.showAddressForm.set(true);
  }

  saveAddress(): void {
    if (!this.newAddress.label || !this.newAddress.fullAddress) return;
    const id = this.nextAddressId();
    this.addresses.update(list => [
      ...list,
      {
        id,
        label: this.newAddress.label,
        fullAddress: this.newAddress.fullAddress,
        recipient: this.newAddress.recipient,
        phone: this.newAddress.phone,
      }
    ]);
    this.selectedAddressId.set(id);
    this.nextAddressId.update(n => n + 1);
    this.showAddressForm.set(false);
  }

  deleteAddress(id: number): void {
    this.addresses.update(list => list.filter(a => a.id !== id));
    if (this.selectedAddressId() === id && this.addresses().length > 0) {
      this.selectedAddressId.set(this.addresses()[0].id);
    }
  }

  cancelAddressForm(): void {
    this.showAddressForm.set(false);
  }
}
