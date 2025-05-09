import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private menuUrl = 'assets/data/menu.json';

  private url = 'http://localhost:5000/api/menu';

  headers_post: HttpHeaders = new HttpHeaders();
  error = new Subject<string>();

  constructor(private http: HttpClient) {
    this.headers_post ==
      new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      });
  }

  // getMenuItems(): Observable<any> {
  //   return this.http.get<any>(this.menuUrl); // ✅ Correct: make HTTP GET request
  // }

  getMenuItems() {
    const options = {
      headers: this.headers_post,
    };

    return this.http.get<any>(this.url, options).pipe(
      map((responseData) => {
        if (responseData) {
          console.log(JSON.stringify(responseData));
          return responseData;
        } else {
          return undefined;
        }
      }),
      catchError((errorRes) => {
        return throwError(errorRes);
      })
    );
  }

  availableStatus(data: any, status?: { available: boolean; }) {
    const options = {
      headers: this.headers_post,
    };

    return this.http.put<any>(this.url + '/'+ data.id, status, options).pipe(
      map((responseData) => {
        if (responseData) {
          console.log(JSON.stringify(responseData));
          return responseData;
        } else {
          return undefined;
        }
      }),
      catchError((errorRes) => {
        return throwError(errorRes);
      })
    );
  }
}
