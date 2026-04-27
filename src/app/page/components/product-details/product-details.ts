import {
  Component,
  ChangeDetectionStrategy,
  inject,
  signal,
  computed,
  OnInit
} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Product } from '../../../data/product.data';
import { ProductService } from '../../../core/service/product.service';
import { CartService } from '../../../core/service/cart.service';
import { NotificationService } from '../../../core/service/notification.service';
import { HeaderTop } from '../../../shared/components/header-top/header-top';
import { Footer } from '../../../shared/components/footer/footer';
import { ImgProducts, ImgProductsTypes } from '../../../shared/components/img-products/img-products';
import { Icon } from '../../../shared/components/icon/icon';
import { Icons } from '../../../shared/components/icon/icon.model';
import { Button } from '../../../shared/components/button/button';
import { DetailCard } from '../../../shared/components/detail-card/detail-card';
import { Review } from '../../../shared/components/review/review';
import { Comment } from '../../../shared/components/comment/comment';
import { ProductCard } from '../../../shared/components/product-card/product-card';
import { TabsComponent } from '../../../shared/components/tabs/tabs';

@Component({
  selector: 'app-product-details',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeaderTop, Footer, ImgProducts, Icon, Button,
    DetailCard, Review, Comment, ProductCard, RouterModule, TabsComponent
  ],
  templateUrl: './product-details.html'
})
export class ProductDetails implements OnInit {

  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private cartService = inject(CartService);
  private notifService = inject(NotificationService);

  Icons = Icons;
  ImgProductsTypes = ImgProductsTypes;

  product = signal<Product | undefined>(undefined);
  selectedImageIndex = signal(0);
  selectedColor = signal('');
  selectedStorage = signal('');
  showFullDescription = signal(false);
  isAddedToCart = signal(false);

  galleryImages = computed<ImgProductsTypes[]>(() => {
    const p = this.product();
    if (!p) return [];
    return p.gallery?.length ? p.gallery : [p.image];
  });

  relatedProducts = computed<Product[]>(() => {
    const p = this.product();
    if (!p) return [];
    return this.productService.getAll()
      .filter(x => x.category === p.category && x.id !== p.id)
      .slice(0, 4);
  });

  storageTabs = computed(() => {
    const p = this.product();
    if (!p?.storageOptions?.length) return [];
    return p.storageOptions.map(opt => ({ id: opt, label: opt, available: true }));
  });

  isFavorite = computed(() => this.product()?.isFavorite ?? false);

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      const found = this.productService.getById(id);
      this.product.set(found);
      if (found) {
        this.selectedColor.set(found.colors?.[0] ?? '');
        this.selectedStorage.set(found.storageOptions?.[0] ?? '');
      }
      this.selectedImageIndex.set(0);
      this.isAddedToCart.set(false);
    });
  }

  selectImage(index: number): void {
    this.selectedImageIndex.set(index);
  }

  selectColor(color: string): void {
    this.selectedColor.set(color);
  }

  onStorageTabChange(id: string): void {
    this.selectedStorage.set(id);
  }

  toggleDescription(): void {
    this.showFullDescription.update(v => !v);
  }

  toggleWishlist(): void {
    const p = this.product();
    if (!p) return;
    this.productService.toggleFavorite(p.id);
    const updated = this.productService.getById(p.id);
    this.product.set(updated);
    if (updated?.isFavorite) {
      this.notifService.showToast('❤️ Added to wishlist successfully!');
    } else {
      this.notifService.showToast('💔 Removed from wishlist.', 'info');
    }
  }

  openCartModal(): void {
    const p = this.product();
    if (!p) return;
    this.notifService.openCartModal(p);
  }

  toggleCart(): void {
    const p = this.product();
    if (!p) return;
    if (this.isAddedToCart()) {
      this.cartService.removeFromCart(p.id);
      this.isAddedToCart.set(false);
    } else {
      this.openCartModal();
    }
  }
}

