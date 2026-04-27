import { Routes } from '@angular/router';
import { Login } from './page/components/login/login';
import { Register } from './page/components/register/register';
import { HomePage } from './page/components/home-page/home-page';
import { About } from './page/components/about/about';
import { Contact } from './page/components/contact/contact';
import { Blog } from './page/components/blog/blog';
import { FavoriteProducts } from './page/components/favorite-products/favorite-products';
import { ShoppingCart } from './page/components/shopping-cart/shopping-cart';
import { UserProfile } from './page/components/user-profile/user-profile';
import { ProductsPage } from './page/components/products-page/products-page';
import { ProductDetails } from './page/components/product-details/product-details';
import { Checkout } from './page/components/checkout/checkout';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'register', component: Register },

  { path: 'home', component: HomePage },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'blog', component: Blog },
  { path: 'favorites', component: FavoriteProducts },
  { path: 'cart', component: ShoppingCart },
  { path: 'shopping-cart', redirectTo: 'cart', pathMatch: 'full' },
  { path: 'user', component: UserProfile },
  { path: 'profile', component: UserProfile },
  { path: 'products', component: ProductsPage },
  { path: 'product/:id', component: ProductDetails },
  { path: 'checkout', component: Checkout }
];

