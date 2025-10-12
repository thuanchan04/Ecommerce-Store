import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img-products',
  imports: [],
  templateUrl: './img-products.html'
})
export class ImgProducts {
  @Input() ImgProductsType = ImgProductsTypes.IP14PRO1;
}
export enum ImgProductsTypes {
  IP14PRO1 = 'assets/products/ip14pro1.svg'
}
