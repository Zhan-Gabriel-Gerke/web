import { Component, OnInit } from '@angular/core';
import { ProductsService, ProductItem } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: ProductItem[] = [];
  loading = true;
  error: string | null = null;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.loading = true;
    this.error = null;
    this.productsService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load products from API';
        this.loading = false;
        console.error('Error fetching products:', err);
      },
    });
  }
}
