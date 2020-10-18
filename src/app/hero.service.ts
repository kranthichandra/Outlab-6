
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { getLocaleDateFormat } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class HeroService {
private heroesUrl = ' https://cs251-outlab-6.herokuapp.com/initial_values/';
private heroUrl = ' https://cs251-outlab-6.herokuapp.com/add_new_feedback/';
httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };
 constructor(
  private http: HttpClient) { }

getData() : Observable<any>{
  return this.http.get<any>(this.heroesUrl)
  .pipe(
    tap(_ => this.log('fetched data')),
        catchError(this.handleError<any>('getData'))
  );
  }

postData(form) : Observable<any>{

  return this.http.post<any>(this.heroUrl,form, this.httpOptions)
  .pipe(
    tap(_ => this.log('posting data')),
        catchError(this.handleError<any>('postData'))
  );
}
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };

}
private log(message: string) {

}
}
