import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../../data/product.data';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../core/service/product.service';
import { ProductCard } from "../../../shared/components/product-card/product-card";

@Component({
  selector: 'app-products-page',
  imports: [ProductCard],
  templateUrl: './products-page.html'
})
export class ProductsPage implements OnInit {

   products: Product[] = [];
   private route = inject(ActivatedRoute);
   private productService = inject(ProductService);
  ngOnInit(): void {
       this.route.queryParams.subscribe(params => {

      const category = params['category'];
      const search = params['search'];

      if (category) {
        this.products = this.productService.getByCategory(category);
      } else if (search) {
        this.products = this.productService
          .getAll()
          .filter(p =>
            p.name.toLowerCase().includes(search.toLowerCase())
          );
      } else {
        this.products = this.productService.getAll();
      }

    });
  }

}
