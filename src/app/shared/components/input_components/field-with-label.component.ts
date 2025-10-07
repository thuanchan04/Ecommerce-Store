import { Component, Input } from '@angular/core';
import { Button } from "../button/button";

@Component({
  selector: 'app-field-with-label',
  templateUrl: './field-with-label.component.html',
  imports: [Button],
})
export class FieldWithLabelComponent {
  @Input() label = '';
  @Input() placeholder = '';
}