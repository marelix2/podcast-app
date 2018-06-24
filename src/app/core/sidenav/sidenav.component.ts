import {AfterContentInit, Component, OnInit} from '@angular/core';
import {UserPlaylistsService} from '../../shared/services/user-playlists.service';
import {MatDialog} from "@angular/material";
import {AddPlaylistComponent} from "../../shared/Dialog/add-playlist/add-playlist.component";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  userPlaylists: UserPlaylistModel[];
  plsts: Array<string>;

  constructor(private userPlaylistService: UserPlaylistsService,
              private dialog: MatDialog) {}

  ngOnInit() {
    this.loadPlaylists();
  }

  loadPlaylists() {
    this.userPlaylistService.loadPlaylists().subscribe(pList => {
      this.userPlaylists = pList;
    });
  }
    openDialog(): void {

    const dialogRef = this.dialog.open(AddPlaylistComponent, {
      width: '600px',
      height: '400px',
      panelClass: 'dialog-container'


    });

    dialogRef.afterClosed().subscribe( res => {
      console.log('closed');
    })

    }










}
