import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Travelblog } from './travelblog';
import { ParamMap, Params } from "@angular/router";

//TODO: Fehlerhandling bei HTTP Calls
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

  getAll(queryParams: Params): Observable<Travelblog[]> {
    let url = `${this.baseURL}/travelblogs`
    if (queryParams) {
      let isFirst = true;
      for (let key in queryParams) {
        url += isFirst ? '?' : '&';
        isFirst = false;
        url += `${key}=${queryParams[key]}`;
      }
    }
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
