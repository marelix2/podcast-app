import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore/explore.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ExploreComponent],
  declarations: [ExploreComponent]
})
export class SiteContentModule { }
