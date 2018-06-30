import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";

@Injectable()
export class AddPlaylistService {

  playlistCollcetion: AngularFirestoreCollection<UserPlaylistModel>
  playlistDocument: AngularFirestoreDocument<UserPlaylistModel>

  constructor(private afs: AngularFirestore) {
    this.playlistCollcetion = this.afs.collection('userPlaylist');
  }


  addPlaylist(playlist: UserPlaylistModel) {
    this.playlistCollcetion.add(playlist);
  }
