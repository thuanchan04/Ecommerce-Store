import { Component } from '@angular/core';
import { HeaderTop } from "../../../shared/components/header-top/header-top";
import { Subnav } from "../../../shared/components/subnav/subnav";
import { ProductCard } from "../../../shared/components/product-card/product-card";
import { PRODUCTS } from '../../../data/product.data';

@Component({
  selector: 'app-favorite-products',
  imports: [HeaderTop, Subnav, ProductCard],
  templateUrl: './favorite-products.html'
})
export class FavoriteProducts {

  allProducts = PRODUCTS;
  uniqueProducts = Array.from(new Map(this.allProducts.map(p => [p.id, p])).values());
  favoriteProducts = this.uniqueProducts.filter(p => p.isFavorite);
  favoriteCount = this.favoriteProducts.length;
}
