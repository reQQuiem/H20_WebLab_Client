import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Travelblog } from './travelblog';

//TODO: Fehlerhandling
@Injectable({
  providedIn: 'root'
})
export class TravelblogService {

  private baseURL: string = 'http://localhost:4444'

  httpOptions: any = { headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })};

  constructor(private http: HttpClient) {
  }

  create(blog: Travelblog): Observable<Travelblog>  {
    const url = `${this.baseURL}/travelblog`;
    return this.http.post<Travelblog>(url, blog);
  }

  getAll(): Observable<Travelblog[]> {
    const url = `${this.baseURL}/travelblogs`;
    return this.http.get<Travelblog[]>(url);
  }

  get(id: string): Observable<Travelblog> {
    const url = `${this.baseURL}/travelblog/${id}`;
    return this.http.get<Travelblog>(url);
  }

  update(blog: Travelblog) {
    const url = `${this.baseURL}/travelblog`;
    return this.http.put<Travelblog>(url, blog);
  }

  delete(id: string) {
    const url = `${this.baseURL}/travelblog/${id}`;
    return this.http.delete<Travelblog>(url);
  }
}
