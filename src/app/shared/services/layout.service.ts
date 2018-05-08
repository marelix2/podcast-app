import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";

@Injectable()
export class LayoutService {

  sidebarSource$ = new Subject<boolean>();
  headerSource$ = new Subject<boolean>();


  showSidebar() {
    this.sidebarSource$.next(true);
  }

  hideSidebar() {
    this.sidebarSource$.next(false);
  }

  showHeader() {
    this.headerSource$.next(true);
  }

  hideHeader() {
    this.headerSource$.next(false);
  }


  constructor() { }

}
