import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import {AngularFireAuth} from "angularfire2/auth";
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {AngularFireModule} from "angularfire2";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {environment} from "../environments/environment";
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SiteContentModule} from "./site-content/site-content.module";
import {SearchService} from "./services/search.service";
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import {LoginService} from "./services/login.service"
import {MatButtonModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule} from "@angular/material";
import {RoutingModule} from "./routing.module";



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    RoutingModule,
    SiteContentModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    HttpClientModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule

  ],
  providers: [SearchService, AngularFireAuth, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
