import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { MultiSelectModule } from 'primeng/multiselect';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AddItemService } from '../../services/add-ITEM/add-item.service';

@Component({
  selector: 'app-add-items',
  imports: [
    CommonModule,
    FormsModule,
    FormsModule,
    ToastModule,
    InputTextModule,
    TextareaModule,
    InputNumberModule,
    MultiSelectModule,
    CheckboxModule,
    ButtonModule,
    CardModule,
  ],
  templateUrl: './add-items.component.html',
  styleUrl: './add-items.component.css',
  providers: [MessageService],
})
export class AddItemsComponent {
  item: MenuItem = {
    name: '',
    description: '',
    price: 0,
    category: [],
    available: true,
    // image: '',
    author: 'pavan',
  };

  // item = {
  //   name: '',
  //   description: '',
  //   price: 0,
  //   category: [],
  //   available: false,
  // };

  categories = [
    { label: 'Tiffens', value: 'Tiffens' },
    { label: 'Birany', value: 'Birany' },
    { label: 'Snaks', value: 'Snaks' },
    { label: 'Drinks', value: 'Drinks' },
    { label: 'Dessert', value: 'Dessert' },
  ];

  // addItem(): void {
  //   const items: MenuItem[] = JSON.parse(localStorage.getItem('menu') || '[]');

  //   // // Assign a new ID (auto-increment)
  //   // this.item.id = items.length ? items[items.length - 1].id + 1 : 1;

  //   items.push(this.item);
  //   localStorage.setItem('menu', JSON.stringify(items));

  //   alert('Item added successfully!');
  //   this.router.navigate(['/items']);
  // }

  constructor(
    private messageService: MessageService,
    private router: Router,
    private addItemServices : AddItemService
  ) {}

  addItem() {
    // if (this.item.name) {
    //   this.messageService.add({
    //     severity: 'error',
    //     summary: 'Failed',
    //     detail: 'Please fill the name.',
    //   });
    //   return;
    // }
    // if (this.item.description) {
    //   this.messageService.add({
    //     severity: 'error',
    //     summary: 'Failed',
    //     detail: 'Please fill the description.',
    //   });
    //   return;
    // }
    // if (this.item.price) {
    //   this.messageService.add({
    //     severity: 'error',
    //     summary: 'Failed',
    //     detail: 'Please fill the price.',
    //   });
    //   return;
    // }
    // if (this.item.category) {
    //   this.messageService.add({
    //     severity: 'error',
    //     summary: 'Failed',
    //     detail: 'Please fill the category.',
    //   });
    //   return;
    // }

    this.addItemServices.postAddItem(this.item).subscribe(
      (response) => {
        console.log('Item added successfully:', response);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Item added successfully!',
        });
        this.router.navigate(['/items']);
      }
    );  

    // fake API success simulation
    if (this.item.name && this.item.description) {
      this.messageService.add({
        severity: 'success',
        summary: 'Item Added',
        detail: 'Your food item was successfully stored!',
      });
      console.log('Saved item:', this.item);
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Failed',
        detail: 'Please fill out the form correctly.',
      });
    }
  }
}

interface MenuItem {
  name: string;
  description: string;
  price: number;
  category: Array<string>;
  // image: string;
  available: boolean;
  author: string;
}
