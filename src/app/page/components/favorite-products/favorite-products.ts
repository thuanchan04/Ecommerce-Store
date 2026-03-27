import { Component } from '@angular/core';
import { PRODUCTS, PRODUCTS_DISCOUNT } from '../home-page/home.data';
import { HeaderTop } from "../../../shared/components/header-top/header-top";
import { Subnav } from "../../../shared/components/subnav/subnav";
import { ProductCard } from "../../../shared/components/product-card/product-card";

@Component({
  selector: 'app-favorite-products',
  imports: [HeaderTop, Subnav, ProductCard],
  templateUrl: './favorite-products.html'
})
export class FavoriteProducts {

  allProducts = [...PRODUCTS,...PRODUCTS_DISCOUNT];
  uniqueProducts = Array.from(new Map(this.allProducts.map(p => [p.name, p])).values());
  favoriteProducts = this.uniqueProducts.filter(p => p.isFavorite);
  favoriteCount = this.favoriteProducts.length;
}
