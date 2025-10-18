import { Component, Input } from '@angular/core';
import { Icons } from '../icon/icon.model';
import { Icon } from '../icon/icon';

type ButtonVariant = 'white' | 'fill' | 'black';
type ButtonSize = 'M' | 'S' | 'I';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [Icon],
  templateUrl: './button.html'
})
export class Button {
  @Input() label = '';
  @Input() variant: ButtonVariant = 'white';
  @Input() size: ButtonSize = 'M';
  @Input() icon = false;
  @Input() disabled = false;
  @Input() customSizeClass?: string;


  Icons = Icons;

  getButtonClass(): string {
    const BASE =
      'inline-flex items-center justify-center rounded-md font-medium transition duration-150 disabled:opacity-50 disabled:pointer-events-none';

    const VARIANTS = {
      white:
        'cursor-pointer border border-white text-white whitespace-nowrap bg-transparent hover:bg-gray-500',
      fill: 'cursor-pointer bg-black text-white whitespace-nowrap hover:bg-gray-500',
      black:
        'cursor-pointer border border-black text-black whitespace-nowrap bg-transparent hover:bg-gray-300 hover:border-gray-500',
    };

    // ✅ Kích thước chính xác theo yêu cầu (px)
    const SIZES = {
      M: 'px-8 py-2',
      S: 'px-8 py-2',
      I: this.customSizeClass || '',
    };

    return `${BASE} ${SIZES[this.size]} ${VARIANTS[this.variant]}`;
  }
}
