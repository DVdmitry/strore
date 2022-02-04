import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {car, } from "../../state/cars.selector";
import {map, Observable} from "rxjs";
import {Car} from "../../state/cars.model";
import {ActivatedRoute, Router} from "@angular/router";
import {CarResponse} from "../../state/cars.reducer";


@Component({
  selector: 'app-cars',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit{

  // car$: Observable<Car | undefined> = this.store.pipe(select(car, {id: this.route.snapshot.paramMap.get('id')}))
  // car$: Observable<Car | undefined> = this.store.pipe(select(car(this.route.snapshot.paramMap.get('id'))))
  car$: Observable<Car | undefined> = this.route.data.pipe(
    map((data: any) => data?.user)
  )

  constructor(
    private route: ActivatedRoute,
    // private router: Router,
    // private store: Store<{cars: CarResponse}>
  ) { }

  ngOnInit() {
  }
}
