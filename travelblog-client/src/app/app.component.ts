import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "./auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'travelblog-client';

  // TODO: implement with ngOnInit and subscription
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  constructor(private router: Router, private authService: AuthService) {
  }

  loginOut() {
    this.authService.logout();
    this.router.navigate(['/'])
  }
}
