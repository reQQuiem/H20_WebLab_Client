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

  private baseURL: string = 'http://localhost:5555'

  constructor(private http: HttpClient) {
  }

  login(name:string, password:string ): Observable<any> {
    return this.http.post<any>(this.baseURL + '/login', {name: name, password}).pipe(
        tap(res => {  this.setSession(res) }),
        shareReplay());
  }

  private setSession(authResult: any) {
    const expiresAt = moment.unix(authResult.expiresAt);
    localStorage.setItem('accessToken', authResult.accessToken);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }

  logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    let expiresAt = null;
    if (expiration != null) {
      expiresAt = JSON.parse(expiration);
    }
    return moment(expiresAt);
  }
}
