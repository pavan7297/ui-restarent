import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-create',
  imports: [CommonModule,FormsModule],
  templateUrl: './staff-create.component.html',
  styleUrl: './staff-create.component.css'
})
export class StaffCreateComponent {
  name = '';
  role = '';
  phone = '';

  constructor(private router: Router) {}

  submit() {
    alert(`Added: ${this.name}, ${this.role}, ${this.phone}`);
    this.router.navigate(['/staff']);
  }
}
