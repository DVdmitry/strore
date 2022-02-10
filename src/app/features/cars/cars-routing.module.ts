import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CarsComponent} from "./pages/cars/cars.component";
import {CarDetailsComponent} from "./components/car-details/car-details.component";

const routes: Routes = [
  { path: '', component: CarsComponent },
  {
    path: 'car/:id',
    component: CarDetailsComponent,
    // resolve: { car: CarResolver }
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class CarsRoutingModule {}
