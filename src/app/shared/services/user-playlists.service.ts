import { Injectable } from '@angular/core';
import {LoginService} from "./login.service";
import {Observable} from "rxjs/Observable";
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";

@Injectable()
export class UserPlaylistsService {

  uPlaylistColl: AngularFirestoreCollection<UserPlaylistModel>;
  userPlaylists: Observable<UserPlaylistModel[]>;
  // uPlaylistsDoc: AngularFirestoreDocument<UserPlaylistsModel>;

  constructor(private afs: AngularFirestore,
              private loginService: LoginService) { }

  loadPlaylists(): Observable<UserPlaylistModel[]> {
    return this.userPlaylists = this.afs.collection('userPlaylist', ref => {
      return ref.where('uid', '==', this.loginService.getUserId());
    }).snapshotChanges().map(changes => {
      return changes.map(c => {
        const data = c.payload.doc.data() as UserPlaylistModel;
        data.playlistId = c.payload.doc.id;
        return data;
      });
    });
  }

  addPlaylist() {



  }





}
