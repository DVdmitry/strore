import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {MatIconModule} from "@angular/material/icon";
import {StoreModule} from "@ngrx/store";
import {carsReducer} from "./features/cars/state/cars.reducer";
import {HttpClientModule} from "@angular/common/http";
import {EffectsModule} from "@ngrx/effects";
import {CarsEffects} from "./features/cars/state/cars.effects";
import {environment} from "../environments/environment";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {HistoryModule} from "./features/about/components/history/history.module";
import {MatDialogModule} from "@angular/material/dialog";
import {CarModule} from "./features/cars/car.module";
import {DragDropModule} from "@angular/cdk/drag-drop";
import { CloseFormComponent } from './shared/components/close-form/close-form.component';
import {DynamicComponentDirective} from "./shared/directives/dynamic-component.directive";
// import {APP_CONFIG, appConfig} from "./shared/config/config.token";

@NgModule({
  declarations: [
    AppComponent,
    CloseFormComponent,
    DynamicComponentDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule,
    AppRoutingModule,
    HistoryModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule,
    CarModule,
    DragDropModule,
    StoreModule.forRoot({cars: carsReducer}),
    EffectsModule.forRoot([CarsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
  ],
  providers: [
    // {provide: APP_CONFIG, useValue: appConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
