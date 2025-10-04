import { Component, Input } from '@angular/core';
import {Icons } from './icon.model';

@Component({
  selector: 'app-icon',
  imports: [],
  templateUrl: './icon.html'
})
export class Icon {
  @Input() icon!: Icons;

  get folder(): string {
    return this.icon.split('/')[0] + 'px';
  }

  get name(): string {
    return this.icon.split('/')[1];
  }

  get size(): string {
    return this.icon.split('/')[0] + 'px';
  }
}

