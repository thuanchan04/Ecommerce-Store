import { Component, Input } from '@angular/core';
import { Icons } from '../icon/icon.model';
import { Icon } from '../icon/icon';

type ButtonVariant = 'white' | 'fill' | 'black';
type ButtonSize = 'M' | 'S' | 'I';

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
  @Input() customSizeClass?: string;


  Icons = Icons;

  getButtonClass(): string {
    const BASE =
      'inline-flex items-center justify-center rounded-md font-medium transition duration-150 disabled:opacity-50 disabled:pointer-events-none';

    const VARIANTS = {
      white:
        'cursor-pointer border border-white text-white bg-transparent hover:bg-gray-500',
      fill: 'cursor-pointer bg-black text-white hover:bg-gray-500',
      black:
        'cursor-pointer border border-black text-black bg-transparent hover:bg-gray-300 hover:border-gray-500',
    };

    // ✅ Kích thước chính xác theo yêu cầu (px)
    const SIZES = {
      M: this.icon ? 'w-[182px] h-[56px]' : 'w-[150px] h-[56px]',
      S: this.icon ? 'w-[178px] h-[48px]' : 'w-[162px] h-[48px]',
      I: this.customSizeClass || '',
    };

    return `${BASE} ${SIZES[this.size]} ${VARIANTS[this.variant]}`;
  }
}
