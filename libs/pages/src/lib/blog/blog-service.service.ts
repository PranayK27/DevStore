import {EventEmitter, Injectable, Input, Output} from '@angular/core';
import { Observable, of } from 'rxjs';
import { blogs } from '../../../../../apps/lda-e2e/src/mock/blog-data';
import { sourcesData } from '../../../../../apps/lda-e2e/src/mock/sources-data';


@Injectable({
  providedIn: 'root'
})
export class ServiceblogService {

  @Input() showTechUsage: boolean | null = false;
  @Output() toggleTechSubHeading = new EventEmitter<void>();

  Blogs: any[] = [];
  Sources: any = '';
  loginStatusService = false;

  detailId: number = -1;
  showEdit = false;


  constructor() {
  }

  public getBlog(): Observable<any> {
    return of(blogs);
  }

  public addPost(bl: any) {
    this.Blogs.splice(0, 0, bl);
  }

  public deletePost(id: number) {
    this.Blogs = this.Blogs.filter(b => b.id !== id);
  }

  public getSources(): Observable<any> {
    return of(sourcesData);
  }

}
