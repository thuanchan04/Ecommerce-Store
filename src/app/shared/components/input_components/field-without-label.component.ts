import { Component, Input } from '@angular/core';
import { Icon } from '../icon/icon';
import { Icons } from '../icon/icon.model';

@Component({
  selector: 'app-field-without-label',
  templateUrl: './field-without-label.component.html',
  imports: [Icon],
})
export class FieldWithoutLabelComponent {
  @Input() placeholder = '';
  Icons = Icons;
}