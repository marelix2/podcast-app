import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-music-panel',
  templateUrl: './music-panel.component.html',
  styleUrls: ['./music-panel.component.scss']
})
export class MusicPanelComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }


  displayTime(event) {
    console.log(event);
  }
}
