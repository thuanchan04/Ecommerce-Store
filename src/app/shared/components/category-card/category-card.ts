import { Component, Input } from '@angular/core';
import { Icons } from '../icon/icon.model';
import { Icon } from "../icon/icon";

@Component({
  selector: 'app-category-card',
  imports: [Icon],
  templateUrl: './category-card.html'
})
export class CategoryCard {
@Input() categoryName!: string;
@Input() imageUrl!: Icons;
Icons = Icons;
}
