import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Icons } from '../icon/icon.model';
import { Icon } from "../icon/icon";

@Component({
  selector: 'app-radio-button',
  standalone: true,
  imports: [Icon],
  templateUrl: './radio-button.html'
})
export class RadioButton {
  @Input() value!: string;              
  @Input() model!: string;              
  @Input() text?: string;               

  @Output() modelChange = new EventEmitter<string>();

  Icons = Icons;

  select() {
    this.modelChange.emit(this.value);
  }

  get isChecked(): boolean {
    return this.model === this.value;
  }
}
