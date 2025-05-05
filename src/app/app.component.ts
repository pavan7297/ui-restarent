import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { appConfig } from './app.config';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeaderComponent } from "./components/shared/header/header.component";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`
 
})
export class AppComponent {
  title = 'posui';
}
