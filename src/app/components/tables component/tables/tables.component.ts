import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TablereservationComponent } from '../../shared/tablereservation/tablereservation.component';
import { Route, Router } from '@angular/router';
import { AsideComponent } from "../../shared/aside/aside.component";

@Component({
  selector: 'app-tables',
  imports: [CommonModule, AsideComponent],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css',
})
export class TablesComponent {
  constructor(private route: Router) {}

  tables = [
    { id: 1, name: 'T1' },
    { id: 2, name: 'T2' },
    { id: 3, name: 'T3' },
    { id: 4, name: 'T4' },
  ];

  selectedTable: { id: number; name: string } | null = null;

  selectTable(table: { id: number; name: string }) {
    this.selectedTable = table;
  }

  reserveTable() {
    // alert(`Reserving ${this.selectedTable?.name}`);
    // this.selectedTable = null;
    this.route.navigate(['Table-Reservation']);
  }

  orderForTable() {
    alert(`Ordering for ${this.selectedTable?.name}`);
    this.selectedTable = null;
  }

  handleReservation(details: any) {
    console.log('Reserved:', { ...details, table: this.selectedTable });
    this.selectedTable = null;
  }
}
