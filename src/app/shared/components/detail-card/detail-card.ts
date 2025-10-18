import { Component, Input } from '@angular/core';
import { Icons } from '../icon/icon.model';
import { Icon } from "../icon/icon";

@Component({
  selector: 'app-detail-card',
  standalone: true,
  imports: [Icon],
  templateUrl: './detail-card.html'
})
export class DetailCard {
@Input() title!: string;
@Input() value!: string;
@Input() iconUrl!: Icons;

Icons = Icons;

}
