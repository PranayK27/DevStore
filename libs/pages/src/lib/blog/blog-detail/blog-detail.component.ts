import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../blog-type';
import {filter} from "rxjs";

@Component({
  selector: 'lda-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  id: any;
  explore = "Explore";
  back = "back";
  blogDetail: Blog | null = null;
  infoPanelVisible = false;

  constructor(activatedRouter: ActivatedRoute,
              public service: BlogService,
              public router: Router
  ) {
    this.id = activatedRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.blogDetail = this.service.getBlogById(this.id);
  }

  toggleInfoPanel() {
    this.infoPanelVisible = !this.infoPanelVisible;
  }

  backToBlog() {
    this.router.navigate(['/tech/blog']);
  }

}
