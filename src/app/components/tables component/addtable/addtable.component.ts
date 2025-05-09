import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AsideComponent } from "../../shared/aside/aside.component";

@Component({
  selector: 'app-addtable',
  imports: [FormsModule, CommonModule, AsideComponent],
  templateUrl: './addtable.component.html',
  styleUrl: './addtable.component.css',
})
export class AddtableComponent implements OnInit {

  tableName: string = '';

  

  selectedDate: string = '';
  selectedTable: any = null;

  tables: any[] = [];

  bookings: { [key: string]: { id: number; time: string; customer: string; order: string[] }[] } = {
    '2025-05-07': [
      {
        id: 1,
        time: '7:00 PM',
        customer: 'Ram Kumar',
        order: ['Paneer Butter Masala', 'Naan'],
      },
      {
        id: 3,
        time: '8:30 PM',
        customer: 'Sita Devi',
        order: ['Chicken Biryani', 'Soft Drink'],
      },
    ],
    '2025-05-08': [
      {
        id: 2,
        time: '6:00 PM',
        customer: 'John Doe',
        order: ['Veg Fried Rice', 'Lassi'],
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {
    const today = new Date();
    this.selectedDate = today.toISOString().split('T')[0];
    this.onDateChange();
  }

  onDateChange() {
    const booked = this.bookings[this.selectedDate] || [];
    const bookedIds = booked.map((b) => b.id);

    this.tables = Array.from({ length: 8 }, (_, i) => {
      const id = i + 1;
      const booking = booked.find((b) => b.id === id);
      return booking
        ? { id, status: 'booked', ...((({ id, ...rest }) => rest)(booking)) }
        : { id, status: 'available' };
    });

    this.selectedTable = null;
  }

  selectTable(table: any) {
    this.selectedTable = table;
  }
  addTABLE() {
    console.log('Table added:', this.tableName);
  }
}
