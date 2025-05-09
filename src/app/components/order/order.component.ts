import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { Router, RouterLink } from '@angular/router';
import { AsideComponent } from '../shared/aside/aside.component';
import { OrderService } from '../../services/orderServices/order.service';

@Component({
  selector: 'app-order',
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule,
    AsideComponent,
  ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent implements OnInit {
  orders: any[] = [];

  ngOnInit(): void {
    this.getorders();
  }

  constructor(
    private route: Router,
    private placeOrdersService: OrderService
  ) {}

  getorders() {
    this.placeOrdersService.getOrderItems().subscribe((data) => {
      this.orders = data;
    });
  }

  updateOrderStatus(order: any) {
    const data = {
      status: order.status,
    };

    

    const requestData = { ...data, id: order._id };
    this.placeOrdersService
      .updateStatus(requestData, data)
      .subscribe((response) => {
        console.log("retuned",response);
      });
    console.log(requestData);
  }

  routersOrder() {
    this.route.navigate([`order`]);
  }
}
