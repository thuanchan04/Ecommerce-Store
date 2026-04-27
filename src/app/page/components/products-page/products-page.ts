import { Component, ChangeDetectionStrategy, inject, OnInit, signal, computed } from '@angular/core';
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
import { Footer } from "../../../shared/components/footer/footer";
import { Pagination } from "../../../shared/components/pagination/pagination";

const PAGE_SIZE = 9;

@Component({
  selector: 'app-products-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProductCard, HeaderTop, FilterSidebar, DropDown, Footer, Pagination],
  templateUrl: './products-page.html'
})
export class ProductsPage implements OnInit {

  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private filterService = inject(FilterService);

  filters: FilterGroup[] = [];

  products = signal<Product[]>([]);
  filteredProducts = signal<Product[]>([]);
  currentPage = signal(1);

  readonly totalPages = computed(() => Math.max(1, Math.ceil(this.filteredProducts().length / PAGE_SIZE)));
  readonly pagedProducts = computed<Product[]>(() => {
    const start = (this.currentPage() - 1) * PAGE_SIZE;
    return this.filteredProducts().slice(start, start + PAGE_SIZE);
  });

  selectedFilters: Record<string, string[]> = {};

  currentCategoryName = signal('Products');
  sortOption = signal('By rating');
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

      let base: Product[];
      if (category) {
        base = this.productService.getByCategory(category);
        const found = CATEGORIES.find(c => c.id === category);
        this.currentCategoryName.set(found ? found.name : 'Products');
      } else if (search) {
        base = this.productService.getAll().filter(p =>
          p.name.toLowerCase().includes(search.toLowerCase())
        );
        this.currentCategoryName.set(`Search: ${search}`);
      } else {
        base = this.productService.getAll();
        this.currentCategoryName.set('Products');
      }

      this.products.set(base);
      this.selectedFilters = {};
      this.currentPage.set(1);
      this.applyFilters();
    });
  }

  onFilterChange(filters: Record<string, string[]>): void {
    this.selectedFilters = filters;
    this.currentPage.set(1);
    this.applyFilters();
  }

  onSortChange(option: string): void {
    this.sortOption.set(option);
    this.currentPage.set(1);
    this.applyFilters();
  }

  onPageChange(page: number): void {
    this.currentPage.set(page);
  }

  applyFilters(): void {
    let result = this.products().filter(p => {
      if (this.selectedFilters['brand']?.length) {
        const brandMatch = this.selectedFilters['brand'].some(b =>
          p.brand.toLowerCase() === b.toLowerCase()
        );
        if (!brandMatch) return false;
      }
      if (this.selectedFilters['rating']?.length) {
        const minRating = Math.min(...this.selectedFilters['rating'].map(Number));
        if ((p.rating ?? 0) < minRating) return false;
      }
      return true;
    });

    const sort = this.sortOption();
    if (sort === 'Price: Low to High') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sort === 'Price: High to Low') {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sort === 'By rating') {
      result = [...result].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
    }

    this.filteredProducts.set(result);
  }

  getCount(groupId: string, value: string): number {
    return this.products().filter(p => {
      if (groupId === 'brand') {
        return p.brand.toLowerCase() === value.toLowerCase();
      }
      return true;
    }).length;
  }
}
