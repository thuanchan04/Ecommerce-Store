import { Component, inject, Input, Renderer2 } from '@angular/core';
import { Icon } from "../icon/icon";
import { Icons } from '../icon/icon.model';
import { Button } from "../button/button";

export enum InputFieldType {
  TEXT,
  PASSWORD,
  TEXT_WITH_BUTTON
}

@Component({
  selector: 'app-input-field',
  imports: [Icon, Button],
  templateUrl: './input-field.html'
})
export class InputField {
  @Input() label!: string;
  @Input() placeholder = '';
  @Input() type: InputFieldType = InputFieldType.TEXT;

  showPassword = false;

  private renderer = inject(Renderer2);


  togglePassword(input: HTMLInputElement) {
    this.showPassword = !this.showPassword;
    this.renderer.setAttribute(input, 'type', this.showPassword ? 'text' : 'password');
  }

  InputFieldType = InputFieldType;
  Icons = Icons;
}
