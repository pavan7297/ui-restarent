import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-404-error',
  standalone: true,
  imports: [CommonModule,RouterLink],
  template: `
    <div class="flex flex-col items-center justify-center min-h-screen bg-yellow-50 text-center">
      <div class="animate-wiggle text-yellow-600 text-6xl mb-4">🤷‍♂️</div>
      <h1 class="text-4xl font-bold mb-2">404</h1>
      <p class="text-lg text-gray-800 mb-4">Oops! This page wandered off like a lost waiter.</p>
      <a routerLink="/" class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
        Take Me Home 🍔
      </a>
    </div>
  `,
  styles: [`
    @keyframes wiggle {
      0%, 100% { transform: rotate(-10deg); }
      50% { transform: rotate(10deg); }
    }
    .animate-wiggle {
      animation: wiggle 1s infinite;
    }
  `]
})
export class Error404Component {}