import { Component, Input } from '@angular/core';
import { Icon } from "../icon/icon";
import { Icons } from '../icon/icon.model';

@Component({
  selector: 'app-category-filter',
  imports: [Icon],
  templateUrl: './category-filter.html'
})
export class CategoryFilter {
  @Input() categories!: Record<string, string[]>;

  isHidden: Record<string, boolean> = {};
  Icons = Icons;
  Object = Object;

  showAndHideItems(category: string) {
    if (this.isHidden[category] === undefined || this.isHidden[category]) {
      for (const c in this.categories) {
        if (this.isHidden[c] === false) {
          this.isHidden[c] = true;
        }
      }
      this.isHidden[category] = false;
    }
    else {
      this.isHidden[category] = true;
    }
  }
}
