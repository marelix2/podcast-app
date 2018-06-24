import { Component, OnInit } from '@angular/core';
import {DisplayPodcastService} from "../../shared/services/display-podcast.service";

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss']
})
export class PodcastsComponent implements OnInit {

  tracks : playlistTracks[];

  constructor( private displayPodcastService: DisplayPodcastService) { }

  ngOnInit() {
    this.tracks = new Array<playlistTracks>();
    this.loadPodcasts();
  }

  loadPodcasts(){

    this.displayPodcastService.loadPlaylists().subscribe(ref => {
      this.tracks = ref;
    });



  }

}
