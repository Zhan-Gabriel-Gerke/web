import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService, OrderItem } from '../../services/order.service';

@Component({
  selector: 'app-admin-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-orders.component.html',
  styleUrl: './admin-orders.component.scss'
})
export class AdminOrdersComponent implements OnInit {
  orders: OrderItem[] = [];
  loading = true;
  error: string | null = null;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.loading = true;
    this.error = null;
    this.orderService.getOrders().subscribe({
      next: (data: any[]) => {
        this.orders = data;
        this.loading = false;
      },
      error: (err: any) => {
        this.error = 'Failed to load orders';
        this.loading = false;
        console.error(err);
      }
    });
  }

  deleteOrder(id: string): void {
    if (!confirm('Are you sure you want to delete this order?')) return;
    this.orderService.deleteOrder(id).subscribe({
      next: () => {
        this.orders = this.orders.filter(o => o._id !== id);
      },
      error: (err: any) => {
        this.error = 'Failed to delete order';
        console.error(err);
      }
    });
  }
}
