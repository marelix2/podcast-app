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
    MatDividerModule


  ],
  exports: [SidenavComponent, HeaderComponent,MusicPanelComponent],
  declarations: [SidenavComponent, HeaderComponent, MusicPanelComponent]
})
export class CoreModule { }
