import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";

@Injectable()
export class SearchService {

  podcastColl: AngularFirestoreCollection<SampleNamesModel>;
  podcasts: Observable<SampleNamesModel[]>;
  podcastDoc: AngularFirestoreDocument<SampleNamesModel>;

  constructor(private afs: AngularFirestore) {
    this.podcastColl = this.afs.collection('test');
  }

  loadPodcasts(){
    this.podcasts = this.afs.collection('test').snapshotChanges().map(changes => {
      return changes.map(c => {
        const data = c.payload.doc.data() as SampleNamesModel;
        return data;
      })
    })



    return this.podcasts;
  }

}
