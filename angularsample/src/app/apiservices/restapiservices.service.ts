
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = 'https://jsonplaceholder.typicode.com/';
@Injectable({
    providedIn: 'root'
})
export class RestapiservicesService {

  constructor(private http: HttpClient) { }

  public get(url:any): Observable<any> {
    return this.http.get(API_URL + 'todos/' + url).pipe(map(res => res));
  }
}
// /api/users