import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore/explore.component';
import { RadioComponent } from './radio/radio.component';
import { RecentlyPlayedComponent } from './recently-played/recently-played.component';
import { PodcastsComponent } from './podcasts/podcasts.component';
import { SeriesComponent } from './series/series.component';
import { ArtistsComponent } from './artists/artists.component';
import { PlaylistComponent } from './playlist/playlist.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ExploreComponent],
  declarations: [ExploreComponent, RadioComponent, RecentlyPlayedComponent, PodcastsComponent, SeriesComponent, ArtistsComponent, PlaylistComponent]
})
export class SiteContentModule { }
