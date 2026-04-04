import { Injectable } from '@angular/core';
import { Product, PRODUCTS } from '../../data/product.data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getAll(): Product[] {
    return PRODUCTS;
  }
  getNonDiscount(): Product[] {
    return PRODUCTS.filter(p => !p.isDiscount);
  }

  getFeatured(): Product[] {
    return PRODUCTS.filter(p => p.isFeatured);
  }

  getDiscount(): Product[] {
    return PRODUCTS.filter(p => p.isDiscount);
  }

  getByCategory(category: string): Product[] {
    return PRODUCTS.filter(p => p.category === category);
  }

  getFavorites(): Product[] {
    return PRODUCTS.filter(p => p.isFavorite);
  }

  getById(id: number): Product | undefined {
    return PRODUCTS.find(p => p.id === id);
  }
}