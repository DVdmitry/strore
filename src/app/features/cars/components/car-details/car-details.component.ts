import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {car} from "../../state/cars.selector";
import {map, Observable} from "rxjs";
import {Car} from "../../state/cars.model";
import {ActivatedRoute} from "@angular/router";
import {CarResponse} from "../../state/cars.reducer";
import {CdkDragDrop, transferArrayItem} from "@angular/cdk/drag-drop";
import {Photo} from "../../../../shared/interface/photo.interface";


@Component({
  selector: 'app-cars',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit{
  photos: Photo[] = []
  // car$: Observable<Car | undefined> = this.store.pipe(select(car, {id: this.route.snapshot.paramMap.get('id')}))
  car$: Observable<Car | undefined> = this.store.pipe(select(car(this.route.snapshot.paramMap.get('id'))))
  // car$: Observable<Car | undefined> = this.route.data.pipe(
  //   map((data: any) => data?.user)
  // )

  constructor(
    private route: ActivatedRoute,
    // private router: Router,
    private store: Store<{cars: CarResponse}>
  ) { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<Photo[]>) {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    )
  }
}
