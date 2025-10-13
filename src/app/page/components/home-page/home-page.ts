import { Component } from '@angular/core';
import { HeaderTop } from "../../../shared/components/header-top/header-top";
import { ImgProducts, ImgProductsTypes } from "../../../shared/components/img-products/img-products";
import { Icon } from "../../../shared/components/icon/icon";
import { Icons } from '../../../shared/components/icon/icon.model';
import { CategoryCard } from "../../../shared/components/category-card/category-card";

@Component({
  selector: 'app-home-page',
  imports: [HeaderTop, ImgProducts, Icon, CategoryCard],
  templateUrl: './home-page.html'
})
export class HomePage {
  ImgProductsTypes = ImgProductsTypes;
  Icons = Icons;
}
