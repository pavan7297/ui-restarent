import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { Route, Router, RouterLink } from '@angular/router';
import { MenuService } from '../../services/menu/menu.service';
import { AsideComponent } from "../shared/aside/aside.component";

@Component({
  selector: 'app-items',
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule,
    AsideComponent
],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css',
})
export class ItemsComponent implements OnInit {
  menu: MenuItem[] = [];

  constructor(private router: Router,private datas:MenuService) {}

  ngOnInit(): void {

    this.datas.getMenuItems().subscribe((data) => {
      this.menu = data;
    });

  }

  addItem(): void {
    this.router.navigate(['/add-item']);
  }

  editItem(item: MenuItem): void {
    // Save item to local/session storage or pass via state management
    localStorage.setItem('editItem', JSON.stringify(item));
    this.router.navigate(['/edit-item']);
  }

  deleteItem(item: MenuItem): void {
    this.menu = this.menu.filter(i => i.id !== item.id);
    localStorage.setItem('menu', JSON.stringify(this.menu));
  }

  toggleAvailability(item: MenuItem): void {
    item.available = !item.available;
    localStorage.setItem('menu', JSON.stringify(this.menu));
  }

  routersOrder(){
    
  }

}

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  available: boolean; // 👈 this must be defined
}
