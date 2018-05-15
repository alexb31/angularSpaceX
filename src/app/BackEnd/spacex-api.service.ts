import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { CompanyInfo } from '../Models/CompanyInfo';
import {catchError} from 'rxjs/operators';
import { Launch } from '../Models/launch';

@Injectable({
  providedIn: 'root'
})
export class SpacexApiService {
  baseUrl = 'https://api.spacexdata.com/v2';

  constructor(private restClient: HttpClient) { }

  getCompanyInfo(): Observable<CompanyInfo> {
    const requestEndpoint = this.baseUrl + '/info';
    return this.restClient.get<CompanyInfo>(requestEndpoint)
    .pipe(
      catchError(this.handleError)
    );
  }

  getLatestLaunches(): Observable<Launch> {
    const requestEndpoint = this.baseUrl + '/launches/latest';
    return this.restClient.get<Launch>(requestEndpoint)
    .pipe(
      catchError(this.handleError)
    );
  }

  getPastLaunches(): Observable<Launch> {
    const requestEndpoint = this.baseUrl + '/launches';
    return this.restClient.get<Launch>(requestEndpoint)
    .pipe(
      catchError(this.handleError)
    );
  }

  getUpcomingLaunches(): Observable<Launch> {
    const requestEndpoint = this.baseUrl + '/launches/upcoming';
    return this.restClient.get<Launch>(requestEndpoint)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
