import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import * as firebase from "firebase";
import {AngularFireAuth} from "angularfire2/auth";
import {LayoutService} from "./layout.service";
import {Router} from "@angular/router";
import {Subject} from "rxjs/Subject";


@Injectable()
export class LoginService {

  userSource$ = new Subject<UserModel>();

  user: Observable<firebase.User>;
  userUid: string;
  private isLoggedInApp = false;

  constructor(private afAuth: AngularFireAuth,
              private layoutService: LayoutService,
              private router: Router) {
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
   // console.log(data.email, data.password);
    this.afAuth
      .auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then(value => {

        this.userUid = value.uid;
        localStorage.setItem("user", JSON.stringify({email: data.email , uid: value.uid}));


        this.layoutService.showSidebar();
        this.layoutService.showHeader();
        this.layoutService.showMusicPannel();
        this.isLoggedInApp = true;
        this.router.navigate(['/explore']);
        console.log('Nice, it worked!', value);

      })
      .catch(err => {
        console.log('Something went wrong!',err.message);
        this.router.navigate(['/login']);
      });
  }

  logout() {
    this.afAuth
      .auth
      .signOut();

    this.isLoggedInApp = false;
    this.layoutService.hideHeader();
    this.layoutService.hideSidebar();
    this.layoutService.hideMusicPannel();

  }

  getUserId() {

    return this.userUid;

  }

   isLoggedIn(){
    return this.isLoggedInApp;
  }


}
