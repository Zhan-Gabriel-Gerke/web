import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatesComponent } from './components/dates/dates.component';
import { ProductsComponent } from './components/products/product.component';
import { MonitorComponent } from './components/monitors/monitor.component';
import { CartComponent } from './components/cart/cart.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';

const routes: Routes = [
  { path: '', component: DatesComponent },
  { path: 'dates', component: DatesComponent },
  { path: 'products', component: ProductsComponent},
  { path: 'monitors', component: MonitorComponent},
  { path: 'cart', component: CartComponent},
  { path: 'admin/products', component: AdminProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
