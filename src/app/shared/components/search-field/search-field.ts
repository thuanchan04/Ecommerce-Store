import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Icons } from '../icon/icon.model';
import { Icon } from "../icon/icon";
import { Product } from '../../../data/product.data';
import { CATEGORIES, Category } from '../../../data/category.data';
import { ProductService } from '../../../core/service/product.service';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search-field',
  standalone: true,
  imports: [Icon],
  templateUrl: './search-field.html'
})
export class SearchField {

  Icons = Icons;

  @Output() searchChange = new EventEmitter<string>();

  keyword = '';
  showDropdown = false;

  private productService = inject(ProductService);
 
  products: Product[] = [];
  categories = CATEGORIES;

  filteredProducts: Product[] = [];
  filteredCategories: Category[] = [];

  private searchSubject = new Subject<string>();

  constructor() {
    this.products = this.productService.getAll(); 

    this.searchSubject
      .pipe(debounceTime(300))
      .subscribe(value => this.handleSearch(value));
  }
  onInput(value: string) {
    this.keyword = value;
    this.showDropdown = !!value;

    this.searchSubject.next(value);
  }

  handleSearch(value: string) {
    const lower = value.toLowerCase();

    this.filteredProducts = this.products
      .filter(p => p.name.toLowerCase().includes(lower))
      .slice(0, 5);

    this.filteredCategories = this.categories
      .filter(c => c.name.toLowerCase().includes(lower))
      .slice(0, 3);
  }
  onSelectKeyword(value: string) {
    this.showDropdown = false;
    this.searchChange.emit(value);
  }

  highlight(text: string): string {
    if (!this.keyword) return text;

    const regex = new RegExp(`(${this.keyword})`, 'gi');
    return text.replace(regex, '<b class="text-black">$1</b>');
  }
}