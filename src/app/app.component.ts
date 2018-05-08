import {Component, OnInit} from '@angular/core';
import {LabelOptions} from "@angular/material";
import {LayoutService} from "./shared/services/layout.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  isHeaderVisible = false;
  isSideBarVisible = false;
  isMusicPannelVisible= false;

  constructor(private layoutService: LayoutService){

  }

  ngOnInit(){
    this.layoutService.sidebarSource$.subscribe((isVisble) => {
      this.isSideBarVisible = isVisble;
    });

    this.layoutService.headerSource$.subscribe((isVisble) => {
      this.isHeaderVisible = isVisble;
    });
    this.layoutService.musicPannelSource$.subscribe((isVisble) => {
      this.isMusicPannelVisible = isVisble;
    });
  }

}
