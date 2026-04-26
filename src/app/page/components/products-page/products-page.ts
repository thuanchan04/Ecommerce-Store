import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../../data/product.data';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../core/service/product.service';
import { ProductCard } from "../../../shared/components/product-card/product-card";
import { HeaderTop } from "../../../shared/components/header-top/header-top";
import { FilterService } from '../../../core/service/filter.service';
import { FilterGroup } from '../../../data/filter.data';
import { CATEGORIES } from '../../../data/category.data';
import { FilterSidebar } from "../../../shared/components/filter-sidebar/filter-sidebar";
import { DropDown } from "../../../shared/components/drop-down/drop-down";

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [ProductCard, HeaderTop, FilterSidebar, DropDown],
  templateUrl: './products-page.html'
})
export class ProductsPage implements OnInit {

  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private filterService = inject(FilterService);

  isChecked = false;

  filters: FilterGroup[] = [];

  products: Product[] = [];
  filteredProducts: Product[] = [];

  selectedFilters: Record<string, string[]> = {};

  currentCategoryName = 'Products';
  sortOption = 'By rating';
  sortOptions: string[] = [
    'By rating',
    'Price: Low to High',
    'Price: High to Low'
  ];

  ngOnInit(): void {
    this.filters = this.filterService.getFilters();

    this.route.queryParams.subscribe(params => {
      const category = params['category'];
      const search = params['search'];

      if (category) {
        this.products = this.productService.getByCategory(category);

        const found = CATEGORIES.find(c => c.id === category);
        this.currentCategoryName = found ? found.name : 'Products';

      } else if (search) {
        this.products = this.productService
          .getAll()
          .filter(p =>
            p.name.toLowerCase().includes(search.toLowerCase())
          );

        this.currentCategoryName = `Search: ${search}`;

      } else {
        this.products = this.productService.getAll();
        this.currentCategoryName = 'Products';
      }

      this.filteredProducts = [...this.products];
    });
  }

  // 🔥 COUNT cho mỗi option
  getCount(groupId: string, value: string): number {
    return this.products.filter(p => {
      if (groupId === 'brand') {
        return p.name.toLowerCase().includes(value.toLowerCase());
      }
      return true;
    }).length;
  }

  // 🔥 FILTER
  onFilterChange(filters: Record<string, string[]>) {
    this.selectedFilters = filters;
    this.applyFilters();
  }

  applyFilters() {
    this.filteredProducts = this.products.filter(p => {

      // BRAND
      if (this.selectedFilters['brand']?.length) {
        const match = this.selectedFilters['brand'].some(b =>
          p.name.toLowerCase().includes(b)
        );
        if (!match) return false;
      }

      return true;
    });
  }
}