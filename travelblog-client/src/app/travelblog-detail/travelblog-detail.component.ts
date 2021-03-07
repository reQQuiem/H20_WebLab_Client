import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogEntry } from '../blog-entry';
import { Travelblog } from '../travelblog';
import { TravelblogService } from '../travelblog.service';

@Component({
  selector: 'app-travelblog-detail',
  templateUrl: './travelblog-detail.component.html',
  styleUrls: ['./travelblog-detail.component.css']
})
export class TravelblogDetailComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private travelblogService: TravelblogService) { }

  _blog: Travelblog;
  public get blog() {
    return this._blog;
  }
  public set blog(value: Travelblog) {
    this._blog = value;
    this.refresh();
  }


  width: number = 400;
  editable: boolean = false;

  ngOnInit(): void {
    this.getTravelblog();
  }

  refresh() {
    this.editable = (localStorage.getItem('name') === this.blog.owner)
  }

  getTravelblog() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.travelblogService.get(id).subscribe(blog => { this.blog = blog });
    }
  }

  addBlogEntry() {
    this.blog.entries.push(new BlogEntry())
  }

  deleteBlogEntry(name: string) {
    // TODO: deleteBlogEntry()
  }

  save() {
    this.travelblogService.update(this.blog).subscribe(_ => this.getTravelblog());
  }

  delete() {
    this.travelblogService.delete(this.blog._id).subscribe(_ => this.router.navigateByUrl('/my-blogs'));
  }
}
