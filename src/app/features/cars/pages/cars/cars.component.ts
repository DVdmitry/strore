import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {cars} from "../../state/cars.selector";
import {Observable} from "rxjs";
import {Car} from "../../state/cars.model";
import {loadCars} from "../../state/cars.actions";
import {CarResponse} from "../../state/cars.reducer";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {


  carList$: Observable<Car[]> = this.store.pipe(select(cars))

  constructor(private store: Store<{cars: CarResponse}>) { }

  ngOnInit(): void {
    this.store.dispatch(loadCars())
  }

}
