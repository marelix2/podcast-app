import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore/explore.component';
import { RadioComponent } from './radio/radio.component';
import { RecentlyPlayedComponent } from './recently-played/recently-played.component';
import { PodcastsComponent } from './podcasts/podcasts.component';
import { SeriesComponent } from './series/series.component';
import { ArtistsComponent } from './artists/artists.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SetupsComponent } from './explore/setups/setups.component';
import {MatButtonModule, MatCardModule, MatDividerModule, MatIconModule} from "@angular/material";
import {MatGridListModule} from '@angular/material/grid-list';
import {FlexLayoutModule} from "@angular/flex-layout";
import { SiteContentComponent } from './site-content.component';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [ExploreComponent],
  declarations: [ExploreComponent, RadioComponent, RecentlyPlayedComponent, PodcastsComponent, SeriesComponent, ArtistsComponent, PlaylistComponent, SetupsComponent, SiteContentComponent]
})
export class SiteContentModule { }
