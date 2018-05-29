import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Trip } from './models/trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  // private baseUrl = 'http://localhost:8080/';
  // private baseUrl = '18.188.37.170:8080/TripPlanner/';
  private baseUrl = '/TripPlanner/';
  private url = this.baseUrl + 'api/trips';

  index() {
    return this.http.get<Trip[]>(this.url)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('Error in Service: index()');
        })
      );
  }

  create(trip) {
    return this.http.post<Trip>(this.url, trip)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('Error in Service: create()');
        })
      );
  }

  update(trip) {
    return this.http.put<Trip>(this.url + '/' + trip.id, trip)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('Error in Service: create()');
        })
      );
  }

  delete(id) {
    return this.http.delete<Boolean>(this.url + '/' + id)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('Error in Service: create()');
        })
      );
  }

  constructor(private http: HttpClient) { }
}
