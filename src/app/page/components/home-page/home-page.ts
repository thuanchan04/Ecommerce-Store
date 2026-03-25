import { Component, ElementRef, inject } from '@angular/core';
import { HeaderTop } from "../../../shared/components/header-top/header-top";
import { ImgProducts, ImgProductsTypes } from "../../../shared/components/img-products/img-products";
import { Icon } from "../../../shared/components/icon/icon";
import { Icons } from '../../../shared/components/icon/icon.model';
import { CategoryCard } from "../../../shared/components/category-card/category-card";
import { ProductCard } from "../../../shared/components/product-card/product-card";
import { Button } from "../../../shared/components/button/button";
import { Footer } from "../../../shared/components/footer/footer";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderTop, ImgProducts, Icon, CategoryCard, ProductCard, Button, Footer],
  templateUrl: './home-page.html'
})
export class HomePage {
  ImgProductsTypes = ImgProductsTypes;
  Icons = Icons;

  private readonly el = inject(ElementRef);
  private observer?: IntersectionObserver;
  showProductTabs = false;

  ngOnInit() {
    const section = this.el.nativeElement.querySelector('#products-section');
    if (!section) return;

    this.observer = new IntersectionObserver(([entry]) => {
      this.showProductTabs = entry.isIntersecting;
    }, { threshold: 0.3 });

    this.observer.observe(section);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
