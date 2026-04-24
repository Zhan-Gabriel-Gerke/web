import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/product.component';
import { MonitorComponent } from './components/monitors/monitor.component';
import { CartComponent } from './components/cart/cart.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, ProductsComponent, MonitorComponent, AdminProductsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CartComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
