import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Blog} from "../blog-type";
import {BlogService} from "../blog-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'lda-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {
  @Input() blogs: Blog[] = [];
  @Input() showTechUsage= false;
  @Output() toggleTechUsage= new EventEmitter<void>();

  constructor(
    protected service: BlogService,
    private router: Router,
  ) {}

  viewDetail(id: number) {
    this.service.detailId = id;
    this.router.navigate(['/blogDetail', id]);
  }
}
