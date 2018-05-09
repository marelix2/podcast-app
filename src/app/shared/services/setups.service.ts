import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";
import {LoginService} from "./login.service";


@Injectable()
export class SetupsService {

  setupColl: AngularFirestoreCollection<SetupModel>;
  setups: Observable<SetupModel[]>;
  setupDoc: AngularFirestoreDocument<SetupModel>;


  constructor(private afs: AngularFirestore,
              private loginService: LoginService) { }

  loadSetups(){
    this.setups = this.afs.collection('explore').snapshotChanges().map(changes => {
      return changes.map(c => {
        const data = c.payload.doc.data() as SetupModel;
        return data;
      });
    });
    return this.setups;
  }

}
