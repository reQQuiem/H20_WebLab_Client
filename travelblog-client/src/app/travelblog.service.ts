import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Travelblog } from './travelblog';

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

  create(blog: Travelblog): string {
    return ''
  }

  getAll(): Observable<Travelblog[]> {
    return this.http.get<Travelblog[]>(this.baseURL + '/travelblogs')
  }

  get(id: string): Observable<Travelblog> {
    return this.http.get<Travelblog>(this.baseURL + '/travelblog/' + id);
  }

  update(blog: Travelblog) {

  }

  delete(id: string) {

  }
}