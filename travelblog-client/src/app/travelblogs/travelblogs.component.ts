import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Travelblog } from '../travelblog';
import { TravelblogService } from '../travelblog.service';

@Component({
  selector: 'app-travelblogs',
  templateUrl: './travelblogs.component.html',
  styleUrls: ['./travelblogs.component.css']
})
export class TravelblogsComponent implements OnInit {

  dataSource: Travelblog[];
  columnsToDisplay: string[] = [ 'title', 'destination', 'departure', 'arrival' ];


  constructor(private router: Router, private route: ActivatedRoute, private travelblogService: TravelblogService) {
    route.queryParams.subscribe(_ => this.getTravelblogs());
  }

  ngOnInit(): void {
    this.getTravelblogs();
  }

  getTravelblogs() {
    const queryParams = this.route.snapshot.queryParams;
    this.travelblogService.getAll(queryParams).subscribe(blogs => this.dataSource = blogs);
  }

  navigate(blog: Travelblog) {
    this.router.navigateByUrl(`/travelblog/${blog._id}`)
  }
}
