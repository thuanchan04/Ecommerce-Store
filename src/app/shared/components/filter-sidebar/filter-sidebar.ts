import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterGroup } from '../../../data/filter.data';
import { Checkbox } from "../checkbox/checkbox";
import { Product } from '../../../data/product.data';
import { Icon } from "../icon/icon";
import { Icons } from "../icon/icon.model";

@Component({
  selector: 'app-filter-sidebar',
  standalone: true,
  imports: [Checkbox, Icon],
  templateUrl: './filter-sidebar.html'
})
export class FilterSidebar {

  @Input() filters: FilterGroup[] = [];
  @Input() products: Product[] = [];

  @Output() filterChange = new EventEmitter<Record<string, string[]>>();

  selected: Record<string, string[]> = {};

  // 🔥 trạng thái mở/đóng
  isOpen: Record<string, boolean> = {};

  Icons = Icons;

  toggleGroup(groupId: string) {
    this.isOpen[groupId] = !this.isOpen[groupId];
  }

  toggleOption(groupId: string, value: string, checked: boolean) {
    if (!this.selected[groupId]) {
      this.selected[groupId] = [];
    }

    if (checked) {
      this.selected[groupId].push(value);
    } else {
      this.selected[groupId] =
        this.selected[groupId].filter(v => v !== value);
    }

    this.filterChange.emit(this.selected);
  }

  // 🔥 COUNT logic
  getCount(groupId: string, value: string): number {
    return this.products.filter(p => {
      if (groupId === 'brand') {
        return p.name.toLowerCase().includes(value.toLowerCase());
      }
      return true;
    }).length;
  }
}