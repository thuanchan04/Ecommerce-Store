import { Component } from '@angular/core';
import { Icons } from '../icon/icon.model';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-checkboxes',
  imports: [Icon],
  templateUrl: './checkboxes.html'
})
export class Checkboxes {
  radioValue = '1';
  check1 = true;
  check2 = false;
  apple = true;

  setRadio(value: string) {
    this.radioValue = value;
  }

  toggle(prop: 'check1' | 'check2' | 'apple') {
    this[prop] = !this[prop];
  }

   // Hàm hỗ trợ để dùng trong template
  onKey(event: KeyboardEvent, prop: 'check1' | 'check2' | 'apple') {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      this.toggle(prop);
    }
  }

  onKeyRadio(event: KeyboardEvent, value: string) {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      this.setRadio(value);
    }
  }

  Icons = Icons;
}
