import { Component, OnInit } from '@angular/core';
import { ProductsService, ProductItem } from '../../services/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss'],
})
export class AdminProductsComponent implements OnInit {
  products: ProductItem[] = [];
  loading = true;
  error: string | null = null;

  newProduct = { name: '', price: 0 };
  editingId: string | null = null;
  editValues = { name: '', price: 0 };

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
      error: () => {
        this.error = 'Failed to load products';
        this.loading = false;
      },
    });
  }

  addProduct(): void {
    if (!this.newProduct.name.trim() || this.newProduct.price <= 0) return;
    this.productsService.addProduct(this.newProduct).subscribe({
      next: (product) => {
        this.products.push(product);
        this.newProduct = { name: '', price: 0 };
      },
      error: () => { this.error = 'Failed to add product'; },
    });
  }

  startEdit(product: ProductItem): void {
    this.editingId = product._id;
    this.editValues = { name: product.name, price: product.price };
  }

  cancelEdit(): void {
    this.editingId = null;
  }

  saveEdit(id: string): void {
    if (!this.editValues.name.trim() || this.editValues.price <= 0) return;
    this.productsService.updateProduct(id, this.editValues).subscribe({
      next: (updated) => {
        const idx = this.products.findIndex(p => p._id === id);
        if (idx !== -1) this.products[idx] = updated;
        this.editingId = null;
      },
      error: () => { this.error = 'Failed to update product'; },
    });
  }

  deleteProduct(id: string): void {
    this.productsService.deleteProduct(id).subscribe({
      next: () => { this.products = this.products.filter(p => p._id !== id); },
      error: () => { this.error = 'Failed to delete product'; },
    });
  }
}
