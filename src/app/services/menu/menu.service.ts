import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private menuUrl = 'assets/data/menu.json';

  constructor(private http: HttpClient) {}

  getMenuItems(): Observable<any> {
    return this.http.get<any>(this.menuUrl); // ✅ Correct: make HTTP GET request
  }
}
