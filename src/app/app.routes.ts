import { Routes } from '@angular/router';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminListComponent } from './pages/admin/admin-list/admin-list.component';
import { ShoppingCardComponent } from './pages/shopping-card/shopping-card.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';
import { guardGuard } from './admin/guard.guard';

export const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      { path: '', component: HomepageComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'shopping', component: ShoppingCardComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [guardGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'products', component: AdminListComponent },
      { path: 'add', component: AddProductComponent },
    ],
  },
];
