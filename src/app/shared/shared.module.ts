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
  ],
  entryComponents: [SidenavComponent, AddPlaylistComponent],
  declarations: [AddPlaylistComponent]
})
export class SharedModule {}
