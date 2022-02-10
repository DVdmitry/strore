import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AboutComponent} from "./about.component";
import {RouterModule} from "@angular/router";
import {AboutRoutingModule} from "./about-routing.module";
import {CurrentStateModule} from "./components/current-state/current-state.module";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    CurrentStateModule,
    AboutRoutingModule,
  ],
  declarations: [AboutComponent]
})

export class AboutModule {}
