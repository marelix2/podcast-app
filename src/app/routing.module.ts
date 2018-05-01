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

const APP_ROUTE: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
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
    component: <any>ExploreComponent
  },
  {
    path: 'radio',
    component: <any>RadioComponent
  },
  {
    path: 'rec',
    component: <any>RecentlyPlayedComponent
  },
  {
    path: 'podcasts',
    component: <any>PodcastsComponent
  },
  {
    path: 'series',
    component: <any>SeriesComponent
  },
  {
    path: 'artists',
    component: <any>ArtistsComponent
  },


]

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTE)],
  exports: [RouterModule]
})
export class RoutingModule { }
