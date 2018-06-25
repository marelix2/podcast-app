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

  singlePlaylist: SinglePlaylistModel;
  podcast: Array<playlistTracks>;
  playlistId;


  constructor(private userPlaylistsService: UserPlaylistsService) {

  }

  ngOnInit() {
    this.podcast = new Array<playlistTracks>();
    this.audio = new Audio();
    console.log("wyswietlam to i to ", this.audio.uri);

    // this.tracks = {
    //   id: 1,
    //   name: 'mane', /*uri: '../../assets/sound/Male-oof-sound-longer.mp3'*/
    //   uri: 'https://content.production.cdn.art19.com/episodes/e926d8f6-f5bf-4f75-b1f2-42bc411f4775/d473b5eb3d350e0b72851f65ffbdad32fbbe4169247ef07f00d54a8b6a9caab1cc99b96ebec912c93e8f152863f31eb1106a5b44c42e141d30453382af970f98/180623-forttknox-podcast-lutke-final.mp3'
    // };

  }



  change() {

    if (this.isTrackPlayed === false) {

      if (this.audio.uri === undefined) {
        this.loadTracksList();
      }
      this.playTrack();
    } else {
      this.stopTrack();
    }
  }

  loadTracksList() {

    this.playlistId = JSON.parse(localStorage.getItem('playlistId'));

    this.userPlaylistsService.loadSinglePlaylist(this.playlistId.playlistId).subscribe(singlePlaylist => {
      this.singlePlaylist = singlePlaylist;

      this.singlePlaylist.tracks.map(reff => {
        this.userPlaylistsService.loadPodcast(reff).subscribe(r => {
          this.podcast.push(r);
        });
      });

    });
    console.log(this.search(this.playlistId.id, this.podcast));
    this.audio.src = this.getSingleTrack();
    console.log(this.audio.src);
     this.audio.load();
  }

  playTrack() {
    this.audio.play();
    this.isTrackPlayed = true;


  }

  stopTrack() {
    this.audio.pause();
    this.isTrackPlayed = false;
  }


  getSingleTrack() {
  // console.log("index czegos tam ", this.podcast, this.playlistId.id) ;

    return this.search(this.playlistId.id, this.podcast);
  }

   search(nameKey, myArray){


    for (const i of myArray) {
      if (i.id === nameKey) {
        return i.url;
      }
    }
  }



}
