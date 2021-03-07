import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import * as moment from "moment";
import {tap} from "rxjs/operators";
import {shareReplay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private expiration = 'expires_at';
  private name = 'name';
  private access = 'accessToken';

  private baseURL: string = 'http://localhost:5555';

  constructor(private http: HttpClient) {
  }

  login(name:string, password:string ): Observable<any> {
    return this.http.post<any>(this.baseURL + '/login', {name: name, password}).pipe(
        tap(res => {  this.setSession(res) }),
        shareReplay());
  }

  private setSession(authResult: any) {
    const expiresAt = moment.unix(authResult.expiresAt);
    localStorage.setItem(this.access, authResult.accessToken);
    localStorage.setItem(this.name, authResult.name);
    localStorage.setItem(this.expiration, JSON.stringify(expiresAt.valueOf()) );
  }

  logout() {
    localStorage.removeItem(this.access);
    localStorage.removeItem(this.name);
    localStorage.removeItem(this.expiration);
  }

  public isLoggedIn(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem(this.expiration);
    let expiresAt = null;
    if (expiration != null) {
      expiresAt = JSON.parse(expiration);
    }
    return moment(expiresAt);
  }
}
