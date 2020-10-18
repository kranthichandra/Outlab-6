
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

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

  }

postData(form) : Observable<any>{

  return this.http.post<any>(this.heroUrl,form, this.httpOptions)

}


}
