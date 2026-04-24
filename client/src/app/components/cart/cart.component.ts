import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, CartItem } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  public cart: CartItem[] = [];
  error: string | null = null;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe((items) => {
      this.cart = items;
    });
  }

  removeItem(productId: string): void {
    this.cartService.removeFromCart(productId);
  }

  updateQuantity(productId: string, quantity: any): void {
    const qty = parseInt(quantity, 10);
    this.cartService.updateQuantity(productId, qty);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  getTotalItems(): number {
    return this.cartService.getTotalItems();
  }

  checkout(): void {
    this.cartService.checkout().subscribe({
      next: () => {
        alert('Order placed successfully!');
        this.cartService.clearCart();
      },
      error: (err: any) => {
        this.error = 'Failed to place order'; 
        console.error("Error from checkout", err);
      },
    })
  }
}
