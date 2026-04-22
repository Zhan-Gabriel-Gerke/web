import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DatesComponent } from './components/dates/dates.component';
import { ProductsComponent } from './components/products/product.component';
import { MonitorComponent } from './components/monitors/monitor.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, DatesComponent, ProductsComponent, MonitorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
