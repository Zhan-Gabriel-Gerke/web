import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatesComponent } from './components/dates/dates.component';
import { ProductsComponent } from './components/products/product.component';
import { MonitorComponent } from './components/monitors/monitor.component';

const routes: Routes = [
  { path: '', component: DatesComponent },
  { path: 'dates', component: DatesComponent },
  { path: 'products', component: ProductsComponent},
  { path: 'monitors', component: MonitorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
