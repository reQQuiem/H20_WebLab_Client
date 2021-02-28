import { Component, Input, OnInit } from '@angular/core';
import { BlogEntry } from '../blog-entry';

@Component({
  selector: 'app-blogentry-detail',
  templateUrl: './blogentry-detail.component.html',
  styleUrls: ['./blogentry-detail.component.css']
})
export class BlogentryDetailComponent implements OnInit {

  @Input() entry: BlogEntry;

  constructor() { }

  ngOnInit(): void {
    this.entry = new BlogEntry('Titel', new Date())
    this.entry.location = 'location';
    this.entry.text = 'test here';
  }
}
