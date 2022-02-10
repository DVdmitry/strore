import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CarsRoutingModule} from "./cars-routing.module";
import {CarDetailsComponent} from "./components/car-details/car-details.component";
import {CarsComponent} from "./pages/cars/cars.component";
import {MatButtonModule} from "@angular/material/button";
import {DragDropModule} from "@angular/cdk/drag-drop";


@NgModule({
  imports: [
    CommonModule,
    CarsRoutingModule,
    MatButtonModule,
    DragDropModule,
  ],
  declarations: [
    CarDetailsComponent,
    CarsComponent
  ]
})

export class CarModule {}
