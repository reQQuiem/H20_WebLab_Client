import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Travelblog } from '../travelblog';

@Component({
  selector: 'app-travelblogs',
  templateUrl: './travelblogs.component.html',
  styleUrls: ['./travelblogs.component.css']
})
export class TravelblogsComponent implements OnInit {

  dataSource: Travelblog[];
  columnsToDisplay: string[] = [ 'title', 'destination', 'traveltime' ];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.createTable();
  }

  createTable() {
    let blog1 = new Travelblog('Titel1', 'Destination1', 1, 'Abstract1');
    blog1.id = '1';
    let blog2 = new Travelblog('Titel2', 'Destination2', 2, 'Abstract2');
    blog2.id = '2';

    this.dataSource = [ blog1, blog2 ];
  }

  navigate(blog: Travelblog) {
    this.router.navigate([`/travelblog/${blog.id}`])
  }
}
