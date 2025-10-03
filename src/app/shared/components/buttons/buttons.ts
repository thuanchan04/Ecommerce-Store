import { Component, Input } from '@angular/core';
import { Icons } from '../icon/icon.model';
import { ButtonVariant } from './button.model';
import { Icon } from "../icon/icon";

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [Icon],
  templateUrl: './buttons.html',
  styleUrl: './buttons.css'
})
export class Button {
  @Input() variant: ButtonVariant = ButtonVariant.PRIMARY;
  @Input() label!: string;
  @Input() iconLeft?: Icons;
  @Input() iconRight?: Icons;

  ButtonVariant = ButtonVariant; // expose enum
  Icons = Icons
}
export { ButtonVariant };

