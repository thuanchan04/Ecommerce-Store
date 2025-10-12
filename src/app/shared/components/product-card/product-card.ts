import { Component, Input } from '@angular/core';
import { Icons } from '../icon/icon.model';
import { Icon } from "../icon/icon";
import { ImgProducts, ImgProductsTypes } from "../img-products/img-products";
import { Button } from "../button/button";

@Component({
  selector: 'app-product-card',
  imports: [Icon, ImgProducts, Button],
  templateUrl: './product-card.html'
})
export class ProductCard {

  @Input() productName!: string;
  @Input() productImage!: ImgProductsTypes;
  @Input() isFavorite = false;
  @Input() price!: number;

  Icons = Icons;
  ImgProductsTypes = ImgProductsTypes;

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}
