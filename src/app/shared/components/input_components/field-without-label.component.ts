import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-field-without-label',
  templateUrl: './field-without-label.component.html'
})
export class FieldWithoutLabelComponent {
  @Input() placeholder = '';
}