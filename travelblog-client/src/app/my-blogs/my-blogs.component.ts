import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-blogs',
  templateUrl: './my-blogs.component.html',
  styleUrls: ['./my-blogs.component.css']
})
export class MyBlogsComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    const owner = localStorage.getItem('name');
    this.router.navigateByUrl(`/travelblogs?owner=${owner}`);
  }
}
