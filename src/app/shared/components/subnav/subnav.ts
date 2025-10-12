import { Component } from '@angular/core';
import { Icon } from "../icon/icon";
import { Icons } from '../icon/icon.model';

@Component({
  selector: 'app-subnav',
  imports: [Icon],
  templateUrl: './subnav.html'
})
export class Subnav {
  Icons = Icons;

  columnRatios = [1, 0.2, 0.5, 0.3, 0.2, 0.5, 0.3, 0.2, 0.8, 0.3, 0.2, 0.5, 0.3, 0.2, 0.8, 0.3, 0.2, 1, 1 ];

  gridTemplateColumns = this.columnRatios.map(r => `${r}fr`).join(' ');
}
