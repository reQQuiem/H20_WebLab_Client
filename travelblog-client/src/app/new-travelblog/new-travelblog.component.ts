import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Travelblog } from '../travelblog';
import { TravelblogService } from '../travelblog.service';

@Component({
  selector: 'app-new-travelblog',
  templateUrl: './new-travelblog.component.html',
  styleUrls: ['./new-travelblog.component.css']
})
export class NewTravelblogComponent implements OnInit {

  constructor(private router: Router, private travelblogService: TravelblogService) {}

  ngOnInit(): void {
    this.travelblogService.create(new Travelblog()).subscribe(x => this.router.navigate([`/travelblog/${x._id}`]));
  }
}
