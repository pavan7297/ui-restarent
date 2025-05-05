import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-items',
  imports: [CommonModule,FormsModule],
  templateUrl: './add-items.component.html',
  styleUrl: './add-items.component.css'
})
export class AddItemsComponent {

  item: MenuItem = {
    name: '',
    description: '',
    price: 0,
    category: '',
    available: true
  };

  constructor(private router: Router) {}

  categories: string[] = ['Starter', 'Main Course', 'Dessert', 'Beverage'];

  addItem(): void {
    const items: MenuItem[] = JSON.parse(localStorage.getItem('menu') || '[]');

    // // Assign a new ID (auto-increment)
    // this.item.id = items.length ? items[items.length - 1].id + 1 : 1;

    items.push(this.item);
    localStorage.setItem('menu', JSON.stringify(items));

    alert('Item added successfully!');
    this.router.navigate(['/items']);
  }

}

interface MenuItem {
  name: string;
  description: string;
  price: number;
  category: string;
  available: boolean;
}