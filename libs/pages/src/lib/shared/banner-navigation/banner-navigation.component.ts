import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../../blog/toast-service.service';
import { Sources } from '../../blog/source-type';
import { ServiceblogService } from '../../blog/blog-service.service';
import {sourcesData} from "../../../../../../apps/lda-e2e/src/mock/sources-data";

@Component({
  selector: 'lda-banner-navigation',
  templateUrl: './banner-navigation.component.html',
  styleUrls: ['./banner-navigation.component.css']
})
export class BannerNavigationComponent implements OnInit {

  sourceData: Sources[] = sourcesData;
  navOptions = false;
  home = sourcesData.map(v=> v.home);
  blog = sourcesData.map(v=> v.blog);
  about = sourcesData.map(v=> v.about);
  login = sourcesData.map(v=> v.login);
  register = sourcesData.map(v=> v.register);
  currentPage: string;
  public isCollapsed = true;
  constructor(
    protected router: Router,
    private service: ServiceblogService,
    private toastService: ToastService,
    ) {
    this.currentPage = this.router.url;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit() {
    if (this.service.Sources.length === 0)
      this.service.getSources().subscribe((d: Sources) => (this.service.Sources=d));
  }

  sameUrlHome(){
    if (this.currentPage === this.home[0]){
      this.showToast('Home Page');
    }
  }

  sameUrlBlog(){
    if (this.currentPage === this.blog[0]){
      this.showToast('Blog Page');
    }
  }
  sameUrlAbout(){
    if (this.currentPage === this.about[0]){
      this.showToast('About Page');
    }
  }

  sameUrlLogin(){
    if (this.currentPage === this.login[0]){
      this.showToast('Login Page');
    }
  }

  sameUrlRegister(){
    if (this.currentPage === this.register[0]){
      this.showToast('Login Page');
    }
  }


  showToast(title: string) {
    this.toastService.showWarning('Click to close!', title);
    this.toastService.notificationTimeout();
  }

  toggleNavOptions(){
    this.navOptions = !this.navOptions;
  }
}
