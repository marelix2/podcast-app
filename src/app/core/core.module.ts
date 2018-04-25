import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { MusicPanelComponent } from './music-panel/music-panel.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatMenuModule} from '@angular/material/menu';
import {FlexLayoutModule} from "@angular/flex-layout";
import { ActivePodcastComponent } from './music-panel/active-podcast/active-podcast.component';
import { ProgressBarComponent } from './music-panel/progress-bar/progress-bar.component';
import { PanelButtonsComponent } from './music-panel/panel-buttons/panel-buttons.component';
import { VolumeBarComponent } from './music-panel/volume-bar/volume-bar.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSliderModule} from '@angular/material/slider';


@NgModule({
  imports: [
    CommonModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    FlexLayoutModule,
    MatProgressBarModule,
    MatSliderModule


  ],
  exports: [SidenavComponent, HeaderComponent, MusicPanelComponent],
  declarations: [SidenavComponent, HeaderComponent, MusicPanelComponent, ActivePodcastComponent, ProgressBarComponent, PanelButtonsComponent, VolumeBarComponent]
})
export class CoreModule { }
