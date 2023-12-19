import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologiesRoutingModule } from './technologies-routing.module';
import { CategoryDetailsComponent } from './technologies/category-details/category-details.component';
import {MatCardModule} from "@angular/material/card";
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {PagesModule} from "@lda/pages";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {ListComponent} from "./technologies/list/list.component";
import {TechnologiesComponent} from "./technologies/technologies.component";
import {HttpClientModule} from "@angular/common/http";
import { SimpleNotificationsModule } from 'angular2-notifications';

@NgModule({
  imports: [
    CommonModule,
    TechnologiesRoutingModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    PagesModule,
    HttpClientModule,
    SimpleNotificationsModule
  ],
  declarations: [
    TechnologiesComponent,
    ListComponent,
    CategoryDetailsComponent,
  ],
  exports: [],
})
export class TechnologiesModule {}
