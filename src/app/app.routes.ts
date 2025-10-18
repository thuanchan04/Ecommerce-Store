import { Routes } from '@angular/router';
import { Login } from './page/components/login/login';
import { HomePage } from './page/components/home-page/home-page';
import { Register } from './page/components/register/register';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'home', component: HomePage },
  { path: 'register', component: Register },
];
