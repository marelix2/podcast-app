import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";

@Injectable()
export class SearchService {

  podcastColl: AngularFirestoreCollection<SampleNames>;
  podcasts: Observable<SampleNames[]>;
  podcastDoc: AngularFirestoreDocument<SampleNames>;

  constructor(private afs: AngularFirestore) {
    this.podcastColl = this.afs.collection('test');
  }

  loadPodcasts(){
    this.podcasts = this.afs.collection('test').snapshotChanges().map(changes => {
      return changes.map(c => {
        const data = c.payload.doc.data() as SampleNames;
        return data;
      })
    })
    return this.podcasts;
  }

}
