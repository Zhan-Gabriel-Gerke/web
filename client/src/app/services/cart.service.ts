import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductItem } from './product.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CartItem extends ProductItem {
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  public cart$ = this.cartItems.asObservable();

  private apiUrl = 'http://localhost:3000/api/orders';

  constructor(private http: HttpClient) {}

  getCart(): CartItem[] {
    return this.cartItems.value;
  }

  addToCart(product: ProductItem, quantity: number = 1): void {
    const currentCart = this.cartItems.value;
    const existingItem = currentCart.find(item => item._id === product._id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      currentCart.push({ ...product, quantity });
    }

    this.cartItems.next([...currentCart]);
  }

  removeFromCart(productId: string): void {
    const filteredCart = this.cartItems.value.filter(item => item._id !== productId);
    this.cartItems.next(filteredCart);
  }

  updateQuantity(productId: string, quantity: number): void {
    const currentCart = this.cartItems.value;
    const item = currentCart.find(item => item._id === productId);

    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        item.quantity = quantity;
        this.cartItems.next([...currentCart]);
      }
    }
  }

  clearCart(): void {
    this.cartItems.next([]);
  }

  getTotalPrice(): number {
    return this.cartItems.value.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getTotalItems(): number {
    return this.cartItems.value.reduce((total, item) => total + item.quantity, 0);
  }

  checkout(): Observable<any> {
    const orderData = {
      totalPrice: this.getTotalPrice(),
      products: this.cartItems.value
    };
    return this.http.post(this.apiUrl, orderData);
  }
}
