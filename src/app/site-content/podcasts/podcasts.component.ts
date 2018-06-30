import { Component, OnInit } from '@angular/core';
import {DisplayPodcastService} from "../../shared/services/display-podcast.service";
import {FillPlaylistService} from "../../shared/services/fill-playlist.service";
import {AddPlaylistComponent} from "../../shared/Dialog/add-playlist/add-playlist.component";
import {MatDialog} from "@angular/material";
import {AddTrackToPlaylistComponent} from "../../shared/Dialog/add-track-to-playlist/add-track-to-playlist.component";

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss']
})
export class PodcastsComponent implements OnInit {

  tracks : playlistTracks[];

  constructor( private displayPodcastService: DisplayPodcastService,
               private dialog: MatDialog) { }

  ngOnInit() {
    this.tracks = new Array<playlistTracks>();
    this.loadPodcasts();
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(AddTrackToPlaylistComponent, {
      width: '600px',
      height: '400px',
      panelClass: 'dialog-container'


    });

    dialogRef.afterClosed().subscribe( res => {
      console.log('closed');
    })

  }

  loadPodcasts(){

    this.displayPodcastService.loadPlaylists().subscribe(ref => {
      this.tracks = ref;
    });



  }

}
