import { Component } from '@angular/core';
import { HeaderTop } from "../../../shared/components/header-top/header-top";
import { Subnav } from "../../../shared/components/subnav/subnav";

@Component({
  selector: 'app-shopping-cart',
  imports: [HeaderTop, Subnav],
  templateUrl: './shopping-cart.html'
})
export class ShoppingCart {

}
