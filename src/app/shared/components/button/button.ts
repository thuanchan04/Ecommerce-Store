import { Component, Input } from '@angular/core';
import { Icons } from '../icon/icon.model';
import { Icon } from '../icon/icon';

type ButtonVariant = 'white' | 'fill' | 'black';
type ButtonSize = 'M' | 'S';

@Component({
  selector: 'app-button',
  imports: [Icon],
  templateUrl: './button.html'
})
export class Button {
  @Input() label = '';
  @Input() variant: ButtonVariant = 'white';
  @Input() size: ButtonSize = 'M';
  @Input() icon = false;
  @Input() disabled = false;

  Icons = Icons;

  getButtonClass(): string {
    const BASE =
      'inline-flex items-center justify-center rounded-md font-medium transition duration-150 disabled:opacity-50 disabled:pointer-events-none';

    const VARIANTS = {
      white:
        'border border-white text-white bg-gray-200 hover:bg-blue-400',
      fill: 'bg-black text-white hover:bg-blue-400',
      black:
        'border border-black text-black hover:bg-blue-400 hover:border-blue-400',
    };

    // ✅ Kích thước chính xác theo yêu cầu (px)
    const SIZES = {
      M: this.icon ? 'w-[182px] h-[56px]' : 'w-[150px] h-[56px]',
      S: this.icon ? 'w-[178px] h-[48px]' : 'w-[162px] h-[48px]',
    };

    return `${BASE} ${SIZES[this.size]} ${VARIANTS[this.variant]}`;
  }
}
