import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./login/register/register.component";
import {SiteContentModule} from "./site-content/site-content.module";
import {ExploreComponent} from "./site-content/explore/explore.component";
import {RecentlyPlayedComponent} from "./site-content/recently-played/recently-played.component";
import {PodcastsComponent} from "./site-content/podcasts/podcasts.component";
import {SeriesComponent} from "./site-content/series/series.component";
import {ArtistsComponent} from "./site-content/artists/artists.component";
import {RadioComponent} from "./site-content/radio/radio.component";
import {AuthGuard} from "./shared/guards/auth.guard";
import {SinglePlaylistComponent} from "./shared/single-playlist/single-playlist.component";

const APP_ROUTE: Route[] = [

  {
       path: '',
       pathMatch: 'full',
      redirectTo: 'login',
    canActivate: [AuthGuard]
     },
  {
    path: 'login',
    component: <any>LoginComponent
  },
  {
    path: 'register',
    component: <any>RegisterComponent
  },
  {
    path: 'explore',
    component: <any>ExploreComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'radio',
    component: <any>RadioComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'rec',
    component: <any>RecentlyPlayedComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'podcasts',
    component: <any>PodcastsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'series',
    component: <any>SeriesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'artists',
    component: <any>ArtistsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'playlist/:playlistId',
    component: <any>SinglePlaylistComponent,
    canActivate: [AuthGuard]
  },


]

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTE)],
  exports: [RouterModule]
})
export class RoutingModule { }
