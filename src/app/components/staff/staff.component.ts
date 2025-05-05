import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-staff',
  imports: [CommonModule],
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.css',
})
export class StaffComponent {
  constructor(private route: Router) {}

  staffList = [
    { name: 'Alice', role: 'Chef', phone: '1234567890' },
    { name: 'Bob', role: 'Waiter', phone: '9876543210' },
    { name: 'Eve', role: 'Manager', phone: '5551234567' },
  ];

  addStaff() {
    this.route.navigate(['/staff-create']);
  }
}
