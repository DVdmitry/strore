import {NgModule} from "@angular/core";
import {Router, RouterModule, Routes} from "@angular/router";
import {AboutComponent} from "./about.component";
import {HistoryComponent} from "../history/history.component";
import {CurrentStateComponent} from "../current-state/current-state.component";

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    children: [
      {path: 'history', component: HistoryComponent},
      {path: 'current', component: CurrentStateComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AboutRoutingModule {}
