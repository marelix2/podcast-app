import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SetupsService} from "./services/setups.service";
import {UserPlaylistsService} from "./services/user-playlists.service";
import { AddPlaylistComponent } from './Dialog/add-playlist/add-playlist.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {SidenavComponent} from "../core/sidenav/sidenav.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatMenuModule} from "@angular/material/menu";
import { UsernamePipe } from './pipes/username.pipe';
import {FlexLayoutModule} from "@angular/flex-layout";
import { SinglePlaylistComponent } from './single-playlist/single-playlist.component';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    FlexLayoutModule
  ],
  entryComponents: [SidenavComponent, AddPlaylistComponent],
  exports: [UsernamePipe],
  declarations: [AddPlaylistComponent, UsernamePipe, SinglePlaylistComponent]
})
export class SharedModule {}
