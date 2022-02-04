import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {CurrentStateComponent} from "./current-state.component";

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [CurrentStateComponent]
})

export class CurrentStateModule {}
