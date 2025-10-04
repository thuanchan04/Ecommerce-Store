import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Icons } from '../icon/icon.model';
import { Icon } from "../icon/icon";

@Component({
  selector: 'app-checkbox',
  imports: [Icon],
  templateUrl: './checkbox.html'
})
export class Checkbox {
  @Input() checked = false;
  @Input() text?: string;
  
  @Output() checkedChange = new EventEmitter<boolean>();

  Icons = Icons;

  toggle() {
    this.checkedChange.emit(!this.checked);
  }
}
