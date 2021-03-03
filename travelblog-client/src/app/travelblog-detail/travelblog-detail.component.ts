import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Travelblog } from '../travelblog';
import { TravelblogService } from '../travelblog.service';

@Component({
  selector: 'app-travelblog-detail',
  templateUrl: './travelblog-detail.component.html',
  styleUrls: ['./travelblog-detail.component.css']
})
export class TravelblogDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private travelblogService: TravelblogService) { }

  blog: Travelblog;
  width: number = 400;

  ngOnInit(): void {
    this.getTravelblogs();
  }

  getTravelblogs() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.travelblogService.get(id).subscribe(blog => { this.blog = blog; console.log(this.blog); } );
    }
  }
}
