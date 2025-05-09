import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { PrimeIcons } from 'primeng/api';
import { AsideComponent } from "../shared/aside/aside.component";

@Component({
  selector: 'app-reports',
  imports: [CommonModule, ChartModule, TableModule, AsideComponent],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css',
})
export class ReportsComponent {
  salesChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        label: 'Sales (in ₹)',
        backgroundColor: ['rgba(249, 115, 22, 0.2)'],
        borderColor: ['rgb(249, 115, 22)'],
        borderWidth: 2,
        data: [40000, 55000, 30000, 60000],
      },
    ],
  };

  paymentChartData = {
    labels: ['Cash', 'UPI', 'Card'],
    datasets: [
      {
        data: [40000, 60000, 20000],
        backgroundColor: ['#22c55e', '#3b82f6', '#f59e0b'],
      },
    ],
  };

  mostOrdered = ['Burger', 'Pizza', 'Fries', 'Pasta', 'Coke'];

  inventoryData = [
    { name: 'Tomatoes', status: 'Low', stock: 10 },
    { name: 'Cheese', status: 'Low', stock: 5 },
    { name: 'Rice', status: 'Replenished', stock: 100 },
    { name: 'Chicken', status: 'Replenished', stock: 75 },
  ];

  chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };
}
