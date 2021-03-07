import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Travelblog } from '../travelblog';
import { TravelblogService } from '../travelblog.service';

@Component({
  selector: 'app-travelblogs',
  templateUrl: './travelblogs.component.html',
  styleUrls: ['./travelblogs.component.css']
})
export class TravelblogsComponent implements OnInit {

  dataSource: Travelblog[];
  columnsToDisplay: string[] = [ 'title', 'destination', 'traveltime' ];


  constructor(private router: Router, private travelblogService: TravelblogService) {}

  ngOnInit(): void {
    this.getTravelblogs();
  }

  getTravelblogs() {
    this.travelblogService.getAll().subscribe(blogs => this.dataSource = blogs);
  }

  navigate(blog: Travelblog) {
    this.router.navigateByUrl(`/travelblog/${blog._id}`)
  }
}
