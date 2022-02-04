import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CarsRoutingModule} from "./cars-routing.module";
import {CarDetailsComponent} from "./components/car-details/car-details.component";
import {CarsComponent} from "./pages/cars/cars.component";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  imports: [
    CommonModule,
    CarsRoutingModule,
    MatButtonModule,
  ],
  declarations: [
    CarDetailsComponent,
    CarsComponent
  ]
})

export class CarModule {}
