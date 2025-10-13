import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Logo, LogoTypes } from './shared/components/logo/logo';
import { Icon } from './shared/components/icon/icon';
import { Icons } from './shared/components/icon/icon.model';
import { InputField } from './shared/components/input-field/input-field';
import { InputFieldType } from './shared/components/input-field/input-field';
import { HeaderTop } from "./shared/components/header-top/header-top";
import { Subnav } from "./shared/components/subnav/subnav";
import { Footer } from "./shared/components/footer/footer";
import { ProductCard } from "./shared/components/product-card/product-card";
import { ImgProductsTypes } from './shared/components/img-products/img-products';
import { Review } from "./shared/components/review/review";
import { Comment } from "./shared/components/comment/comment";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Logo, Icon, InputField, HeaderTop, Subnav, Footer, ProductCard, Review, Comment],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('e-store');
  LogoTypes = LogoTypes;
  Icons = Icons;
  InputFieldType = InputFieldType;
  ImgProductsTypes = ImgProductsTypes;
}
