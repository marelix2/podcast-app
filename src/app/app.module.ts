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
import {SearchService} from "./shared/services/search.service";
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import {LoginService} from "./shared/services/login.service"
import {MatButtonModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule} from "@angular/material";
import {RoutingModule} from "./routing.module";
import {MatCardModule} from '@angular/material/card';
import {SetupsService} from "./shared/services/setups.service";
import {LayoutService} from "./shared/services/layout.service";
import {AuthGuard} from "./shared/guards/auth.guard";
import {FlexLayoutModule} from "@angular/flex-layout";
import {SharedModule} from "./shared/shared.module";
import {UserPlaylistsService} from "./shared/services/user-playlists.service";
import {AddPlaylistComponent} from "./shared/Dialog/add-playlist/add-playlist.component";



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
    MatInputModule,
    MatCardModule,
    FlexLayoutModule,
    SharedModule,


  ],
  providers: [SearchService, AngularFireAuth, LoginService, SetupsService, LayoutService, AuthGuard , UserPlaylistsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
