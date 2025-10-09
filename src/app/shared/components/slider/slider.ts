import { Component, signal, computed, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  templateUrl: './slider.html'
})
export class Slider {
  @Input() min = 0;
  @Input() max = 1000;

  minValue = signal(this.min);
  maxValue = signal(this.max);

  // Tính phần trăm để hiển thị
  minPercent = computed(() => (this.minValue() / this.max) * 100);
  maxPercent = computed(() => (this.maxValue() / this.max) * 100);

  // === Xử lý kéo slider (giữ nguyên logic hiện tại) ===
  activeHandle: 'min' | 'max' | null = null;

  startDrag(handle: 'min' | 'max') {
    this.activeHandle = handle;
    const move = (e: PointerEvent) => this.onDrag(e);
    const stop = () => {
      this.activeHandle = null;
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', stop);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', stop);
  }

  onDrag(event: PointerEvent) {
    if (!this.activeHandle) return;
    const track = document.querySelector('.relative.h-2.bg-gray-200.rounded') as HTMLElement;
    const rect = track.getBoundingClientRect();
    const percent = ((event.clientX - rect.left) / rect.width) * 100;
    const value = Math.round((percent / 100) * this.max);

    if (this.activeHandle === 'min') {
      if (value <= this.maxValue()) this.minValue.set(Math.max(this.min, value));
    } else {
      if (value >= this.minValue()) this.maxValue.set(Math.min(this.max, value));
    }
  }

  // === Xử lý khi người dùng nhập vào ô input ===
  handleMinInput(event: Event) {
    const value = Number((event.target as HTMLInputElement).value);
    if (value <= this.maxValue() && value >= this.min) {
      this.minValue.set(value);
    } else if (value > this.maxValue()) {
      this.minValue.set(this.maxValue());
    } else {
      this.minValue.set(this.min);
    }
  }

  handleMaxInput(event: Event) {
    const value = Number((event.target as HTMLInputElement).value);
    if (value >= this.minValue() && value <= this.max) {
      this.maxValue.set(value);
    } else if (value < this.minValue()) {
      this.maxValue.set(this.minValue());
    } else {
      this.maxValue.set(this.max);
    }
  }

  blockNonNumeric(event: KeyboardEvent) {
    if (['e', 'E', '+', '-', '.'].includes(event.key)) {
      event.preventDefault();
    }
  }
}
