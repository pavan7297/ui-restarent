import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrderComponent } from './components/order/order.component';
import { ItemsComponent } from './components/items/items.component';
import { AddItemsComponent } from './components/add-items/add-items.component';
import { TablesComponent } from './components/tables/tables.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { Error404Component } from './components/shared/error404';
import { StaffCreateComponent } from './components/staff-create/staff-create.component';
import { StaffComponent } from './components/staff/staff.component';
import { ReportsComponent } from './components/reports/reports.component';
import { TablereservationComponent } from './components/shared/tablereservation/tablereservation.component';

export const routes: Routes = [
  { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'order', component: OrderComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'add-items', component: AddItemsComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'Table-Reservation', component: TablereservationComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'staff-create', component: StaffCreateComponent },
  { path: 'reports', component: ReportsComponent },
  // {path: 'Table-Reservation/:id', component: TablesComponent},
  // {path: '404', component: PageNotFoundComponent},
  {path: '404', component: Error404Component},
  { path: '**', redirectTo: '404' },
];
