import { Injectable, computed, signal } from '@angular/core';
import { Product, PRODUCTS } from '../../data/product.data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly _products = signal<Product[]>(PRODUCTS.map(p => ({ ...p })));

  readonly products = this._products.asReadonly();
  readonly favorites = computed(() => this._products().filter(p => p.isFavorite));

  getAll(): Product[] {
    return this._products();
  }

  getNonDiscount(): Product[] {
    return this._products().filter(p => !p.isDiscount);
  }

  getFeatured(): Product[] {
    return this._products().filter(p => p.isFeatured);
  }

  getDiscount(): Product[] {
    return this._products().filter(p => p.isDiscount);
  }

  getByCategory(category: string): Product[] {
    return this._products().filter(p => p.category === category);
  }

  getFavorites(): Product[] {
    return this._products().filter(p => p.isFavorite);
  }

  getById(id: number): Product | undefined {
    return this._products().find(p => p.id === id);
  }

  toggleFavorite(id: number): void {
    this._products.update(products =>
      products.map(p => p.id === id ? { ...p, isFavorite: !p.isFavorite } : p)
    );
  }
}