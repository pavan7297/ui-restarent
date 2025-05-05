import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu/menu.service';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AsideComponent } from "../shared/aside/aside.component";

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule,
    AsideComponent
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  menu: any[] = [];
  cart: any[] = [];
  name: string = '';
  phone: string = '';
  email: string = '';
  paymentMethod: string = 'cash';

  constructor(private menus: MenuService, private route: Router) {}

  ngOnInit(): void {
    // Load menu items
    this.menus.getMenuItems().subscribe((data) => {
      this.menu = data;
    });

    // Load cart from localStorage
    const storedCart = localStorage.getItem('cart');
    this.cart = storedCart ? JSON.parse(storedCart) : [];

    // Initialize quantity for items in the cart
    this.cart.forEach((item) => {
      if (!item.quantity) {
        item.quantity = 1; // Default quantity to 1 if not present
      }
    });
  }

  addToCart(item: any): void {
    // Check if item already exists in the cart
    const existingItem = this.cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity += 1; // Increase quantity if item exists
    } else {
      item.quantity = 1; // Set quantity to 1 if item is new
      this.cart.push(item);
    }

    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  updateQuantity(item: any, change: number): void {
    // Update the quantity, ensuring it doesn't go below 1
    item.quantity = Math.max(1, item.quantity + change);

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  removeItem(index: number): void {
    // Remove item from cart
    this.cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cart)); // Update localStorage
  }

  getTotalPrice(): number {
    return this.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  placeOrder() {
    if (!this.cart || this.cart.length === 0) {
      console.log('Cart is empty.');
      return;
    }

    // Apply default values if fields are empty
    const customerName = this.name?.trim() || 'Guest';
    const customerPhone = this.phone?.trim() || '0000000000';
    const customerEmail = this.email?.trim() || 'guest@example.com';

    const orderData = {
      customer: {
        name: customerName,
        phone: customerPhone,
        email: customerEmail,
      },
      items: this.cart,
      paymentMethod: this.paymentMethod || 'cash',
      total: this.getTotalPrice(),
      timestamp: new Date().toISOString(),
    };

    let previousOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    previousOrders.push(orderData);

    localStorage.setItem('orders', JSON.stringify(previousOrders));

    console.log('Order placed successfully:', orderData);

    // Clear cart and form fields
    this.cart = [];
    this.name = '';
    this.phone = '';
    this.email = '';
    this.paymentMethod = 'cash';
    localStorage.removeItem('cart');
  }

  // Rouuters

  routersOrder() {
    this.route.navigate([`order`])
  }
}
