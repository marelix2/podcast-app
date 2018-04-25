import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./login/register/register.component";
import {SiteContentModule} from "./site-content/site-content.module";
import {ExploreComponent} from "./site-content/explore/explore.component";

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
  }


]

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTE)],
  exports: [RouterModule]
})
export class RoutingModule { }
