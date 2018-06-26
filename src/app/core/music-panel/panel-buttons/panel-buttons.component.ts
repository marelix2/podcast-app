import {Component, DoCheck, EventEmitter, OnInit, Output} from '@angular/core';
import {UserPlaylistsService} from "../../../shared/services/user-playlists.service";

interface AudioPlayerTrack {
  id: number;
  name: string;
  uri: string;
}

@Component({
  selector: 'app-panel-buttons',
  templateUrl: './panel-buttons.component.html',
  styleUrls: ['./panel-buttons.component.scss']
})
export class PanelButtonsComponent implements OnInit {

  tracks: AudioPlayerTrack;
  isTrackPlayed = false;
  audio: any = null;
  isDataLoaded = false;

  trackTime;

  singlePlaylist: SinglePlaylistModel;
  podcast: playlistTracks[];
  playlistId;
  currentPlaylistId;


  constructor(private userPlaylistsService: UserPlaylistsService) {
    this.podcast = new Array<playlistTracks>();
    this.audio = new Audio();
  }

  ngOnInit() {

  }

  change() {

    this.loadTracksList();
    this.playTrack();
  }


  loadTracksList() {

    this.playlistId = JSON.parse(localStorage.getItem('playlistId'));

    if (this.currentPlaylistId !== null && this.playlistId.id !== this.currentPlaylistId.id) {
      console.log(this.playlistId.id !== this.currentPlaylistId.id, this.playlistId.id, this.currentPlaylistId.id);
      this.currentPlaylistId = this.playlistId;
      this.trackTime = 0;
    }

    this.userPlaylistsService.loadSinglePlaylist(this.playlistId.playlistId).subscribe(singlePlaylist => {
      this.singlePlaylist = singlePlaylist;

      this.singlePlaylist.tracks.map(reff => {
        this.userPlaylistsService.loadPodcast(reff).subscribe(r => {
          this.podcast.push(r);
        });
      });
    });

    this.audio.src = this.searchForTrack(this.playlistId.id, this.podcast);
    console.log("---------------------");
    this.audio.load();
  }

  playTrack() {
    if (this.currentPlaylistId === undefined) {
      this.currentPlaylistId = JSON.parse(localStorage.getItem('playlistId'));
    }
    this.loadTracksList();

    const playPromise = this.audio.play();
    if (playPromise !== undefined) {
      this.audio.currentTime = this.trackTime;
      playPromise.then(ref => {

      })
        .catch(error => {
        });
    } else {


    }


  }

  stopTrack() {
    this.audio.pause();
    this.trackTime = this.audio.currentTime;
    this.isTrackPlayed = false;
  }


  getSingleTrack() {
    console.log("pokazuje", this.playlistId.id, this.podcast);
    console.log("zwracam ", this.searchForTrack(this.playlistId.id, this.podcast));

    return this.searchForTrack(this.playlistId.id, this.podcast);
  }

  searchForTrack(nameKey, myArray) {
    for (const i of myArray) {
      // console.log("pokazuje iteracje i", i);
      if (i.id === nameKey) {
        return i.url;
      }
    }
  }

}
