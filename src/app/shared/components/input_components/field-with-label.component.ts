import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-field-with-label',
  templateUrl: './field-with-label.component.html'
})
export class FieldWithLabelComponent {
  @Input() label = '';
  @Input() placeholder = '';
}