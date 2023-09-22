import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from '../core/guards/auth.guard';
import { signningGuard } from 'src/core/guards/signning.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: "full"},
  {path: 'home', canActivate:[authGuard], component: HomeComponent, title: 'Home'},
  {path: 'products',canActivate:[authGuard], component: ProductsComponent, title: 'Products'},
  {path: 'categories', canActivate:[authGuard],component: CategoriesComponent, title: 'Categories'},
  {path: 'brands', canActivate:[authGuard],component: BrandsComponent, title: 'Brands'},
  {path: 'setting', canActivate:[authGuard],loadChildren: () => import('./setting/setting.module').then(com => com.SettingModule), title: 'Brands'},
  {path: 'productDetails/:id', canActivate:[authGuard],component: ProductDetailsComponent, title: 'Detaisl'},
  {path: 'signup', canActivate:[signningGuard], component: RegisterComponent, title: 'Signup'},
  {path: 'login',canActivate:[signningGuard], component: LoginComponent, title: 'Login'},
  { path: 'cart',canActivate:[authGuard], loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  
  {path: '**', canActivate:[authGuard],component: NotFoundComponent, title: 'This page is not found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
