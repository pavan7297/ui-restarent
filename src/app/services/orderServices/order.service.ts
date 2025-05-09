import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private url = 'http://localhost:5000/api/orders';

  headers_post: HttpHeaders = new HttpHeaders();
  error = new Subject<string>();

  constructor(private http: HttpClient) {
    this.headers_post ==
      new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      });
  }

  postOrder(data: any) {
    const options = {
      headers: this.headers_post,
    };

    return this.http.post<any>(this.url, data, options).pipe(
      map((responseData) => {
        if (responseData == 200) {
          console.log(JSON.stringify(responseData));
          return responseData.output;
        } else {
          return undefined;
        }
      }),
      catchError((errorRes) => {
        return throwError(errorRes);
      })
    );
  }

  getOrderItems(): Observable<any[]> {
    return this.http.get<any[]>(this.url).pipe(
      map((responseData) => {
        return responseData;
      }),
      catchError((errorRes) => {
        return throwError(errorRes);
      })
    );
  }

  getOrderItemById(id: any): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`).pipe(
      map((responseData) => {
        return responseData;
      }),
      catchError((errorRes) => {
        return throwError(errorRes);
      })
    );
  }

  updateStatus(data: any, status?: { status: string }) {
    const options = {
      headers: this.headers_post,
    };

    console.log('url', this.url + '/update/' + data.id);

    return this.http
      .put<any>(this.url + '/update/' + data.id, status, options)
      .pipe(
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
