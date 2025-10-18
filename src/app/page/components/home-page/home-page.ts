import { Component } from '@angular/core';
import { HeaderTop } from "../../../shared/components/header-top/header-top";
import { ImgProducts, ImgProductsTypes } from "../../../shared/components/img-products/img-products";
import { Icon } from "../../../shared/components/icon/icon";
import { Icons } from '../../../shared/components/icon/icon.model';
import { CategoryCard } from "../../../shared/components/category-card/category-card";
import { ProductCard } from "../../../shared/components/product-card/product-card";
import { Button } from "../../../shared/components/button/button";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderTop, ImgProducts, Icon, CategoryCard, ProductCard, Button],
  templateUrl: './home-page.html'
})
export class HomePage {
  ImgProductsTypes = ImgProductsTypes;
  Icons = Icons;
}
