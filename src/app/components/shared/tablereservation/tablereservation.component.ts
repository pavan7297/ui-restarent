import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tablereservation',
  imports: [CommonModule,FormsModule],
  templateUrl: './tablereservation.component.html',
  styleUrl: './tablereservation.component.css'
})
export class TablereservationComponent {
  @Output() reserved = new EventEmitter<any>();

  name = '';
  phone = '';
  guests = 1;
  time = '';

  submitReservation() {
    if (this.name && this.phone && this.guests && this.time) {
      this.reserved.emit({ name: this.name, phone: this.phone, guests: this.guests, time: this.time });
    }
  }
}
