import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {BlogService} from "../blog/blog-service.service";
import {loadTech, techLoadFail, techLoadedSuccess} from "./techUsage.actions";
import {catchError, concatMap, map, of} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class TechUsageEffects {

  ngrxOnInitEffects() {
    return loadTech();
  }

  loadTechs$ = createEffect(() =>
    // listens to all actions in our product
    this.actions$.pipe(
      // pass action which you want to filter
      ofType(loadTech),
      // map over the emitted actions and return the result for calling service
      concatMap(() =>
        this.service.getAllBlogs().pipe(
          // map over the result of blog service
          map((data) => techLoadedSuccess({ blogs: data })),
          // catch-error for returning error for blog service returning an error
          catchError(
            (error) => of(techLoadFail({ message: error }))
          )
        )
      ),
    ));

  // TODO: for future, observes an action when completed then redirect to blog
  // redirectToBlogsPage = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(
  //        techLoadedSuccess
  //       ),
  //       tap(() =>  this.router.navigate(['/tech/blog']))
  //     ),
  //   { dispatch: false }
  // );


  constructor(private actions$: Actions, private service: BlogService, private router: Router) {}

}
