import {Injectable} from '@angular/core';
import {catchError, Observable, throwError} from 'rxjs';
import {Blog} from "../model/blog-type";
import {Sources} from "../model/source-type";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private blogAPIUrl = 'api/blogs';
  private sourcesAPIUrl = 'api/sources';


  constructor(private http: HttpClient) {}

  showEdit = false;

  // Replaces above structure totally, slow and steadily

  getAllBlogs() {
    return this.http
      .get<Blog[]>(this.blogAPIUrl)
      .pipe(catchError(this.handleError));
  }

  getAllSources() {
    return this.http
      .get<Sources[]>(this.sourcesAPIUrl)
      .pipe(catchError(this.handleError));
  }

  getByBlogId(id: number): Observable<Blog>{
    return this.http
      .get<Blog>(`${this.blogAPIUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  add({ heading, blogDetail }: Blog): Observable<Blog> {
    return this.http
      .post<Blog>(this.blogAPIUrl, { heading, blogDetail })
      .pipe(catchError(this.handleError));
  }

  update(blog: Blog): Observable<Blog> {
    return this.http
      .put<Blog>(this.blogAPIUrl, blog)
      .pipe(catchError(this.handleError));
  }

  delete(id: number): Observable<unknown> {
    const url = `${this.blogAPIUrl}/${id}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  private handleError({ status }: HttpErrorResponse) {
    return throwError(
      () => `${status}: Something bad happened.`
    );
  }

}
