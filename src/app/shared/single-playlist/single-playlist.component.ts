///<reference path="../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
import {AfterViewChecked, Component, DoCheck, OnInit} from '@angular/core';
import {UserPlaylistsService} from "../services/user-playlists.service";
import {ActivatedRoute} from "@angular/router";
import {forEach} from "@angular/router/src/utils/collection";


@Component({
  selector: 'app-single-playlist',
  templateUrl: './single-playlist.component.html',
  styleUrls: ['./single-playlist.component.scss']
})

export class SinglePlaylistComponent implements OnInit{

  singlePlaylist: SinglePlaylistModel;
  podcast: Array<playlistTracks>;

  constructor(private userPlaylistsService: UserPlaylistsService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.podcast= new Array<playlistTracks>();
    this.loadPlaylist();
  }



  loadPlaylist() {

    const id = this.route.snapshot.paramMap.get('playlistId');

    this.userPlaylistsService.loadSinglePlaylist(id).subscribe( singlePlaylist => {
      this.singlePlaylist = singlePlaylist;

      this.singlePlaylist.tracks.map( reff => {
       // console.log("single playlist before load podcast", reff);
        this.userPlaylistsService.loadPodcast(reff).subscribe(r => {
           this.podcast.push(r);
        });
    });





});

}

}
