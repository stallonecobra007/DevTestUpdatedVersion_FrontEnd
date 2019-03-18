import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { tap, catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class StatisticsService {
  private url: string = 'https://localhost:44355/api/Statistics/';
  
  statisticsType: string;
  computedVal: any;

  private statType = new BehaviorSubject<string>('');
  updatedStatType$ = this.statType.asObservable();

  private computeValues = new BehaviorSubject<string>('');
  updatedComputeValues$ = this.computeValues.asObservable();

  statsData: StatsData;

  constructor(private http: HttpClient) { }

  getStatistic(values: string): Observable<any> {

    this.statType.next(this.statisticsType);
    let val = {values}
    return this.http.get(this.url + this.statisticsType, { params: val }).pipe(
      tap(data => { data;
        console.log(data);
        this.computeValues.next(data.toString());
      }),
      catchError(this.handleError)
    );

  }

  addStatistic(values: string, result:string): Observable<any> {
    this.statsData = {
         UserEntry:values,
         Result: result
       }
      return this.http.post<any>(this.url, this.statsData, httpOptions)
       .pipe(
        tap((data) => console.log(`added product w/ id=${data.id}`)),
         catchError(this.handleError)
       );
  }
  
  handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}

export interface StatsData{
  UserEntry: string;
  Result: string;
}
