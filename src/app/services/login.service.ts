import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import * as firebase from "firebase";
import {AngularFireAuth} from "angularfire2/auth";

@Injectable()
export class LoginService {

  user: Observable<firebase.User>;
  userUid : string;

  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  signup(data: {email: string, password: string}) {
    this.afAuth
      .auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(value => {
        console.log('Success!', value);

      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  login(data: {email: string, password: string}) {
    console.log(data.email, data.password);
    this.afAuth
      .auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then(value => {
        console.log('Nice, it worked!', value);
        this.userUid = value.uid;
      })
      .catch(err => {
        console.log('Something went wrong!',err.message);
      });
  }

  logout() {
    this.afAuth
      .auth
      .signOut();
  }

  getUserId() {

    return this.userUid;
  }


}
