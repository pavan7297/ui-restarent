import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/shared/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, RouterOutlet],
  template: `<div class="">
    <nav class="bg-white shadow">
      <app-header></app-header>
    </nav>
    <router-outlet></router-outlet>
  </div>`,
})
export class AppLayoutComponent {}
