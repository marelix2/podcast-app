import {Injectable, ɵisObservable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFirestore} from "angularfire2/firestore";

@Injectable()
export class DisplayPodcastService {

  tracks: Observable<playlistTracks[]>

  constructor(private afs: AngularFirestore) {}

  loadPlaylists(): Observable<playlistTracks[]> {
    return this.tracks = this.afs.collection('podcasts').snapshotChanges().map(changes => {
      return changes.map(c => {
        const data = c.payload.doc.data() as playlistTracks;

        this.afs.doc(`authors/${data.author}`).snapshotChanges().map( c => {
         // console.log(c.payload.data())
          return c.payload.data() as {author: string};
        }).subscribe(ref => {
          data.author = ref.author;
        });
        return data;
      });
    });
  }


}
