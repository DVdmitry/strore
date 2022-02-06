import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {CarsService} from "../car-list.service";
import {catchError, concatMap, EMPTY, map, mergeMap, tap} from "rxjs";
import {CarOrder} from "./cars.model";

@Injectable()
export class CarsEffects {
  constructor(
    private actions$: Actions,
    private carsService: CarsService
    ) {}

  loadCarList$ = createEffect(() => this.actions$.pipe(
    ofType('[Cars] Load car list'),
    mergeMap(() => this.carsService.loadCarList().pipe(
      map((response) => {
        return ({type: '[Cars] Load Cars list success', payload: response})
      })
    )),
    catchError(() => EMPTY)
  ))

  saveCar$ = createEffect(() => this.actions$.pipe(
    ofType('[Cars] Save car'),
    concatMap((action: CarOrder) => this.carsService.saveCar(action).pipe(
      tap(data => console.log('Car order saved to db')),
      map(response => ({type: '[Cars] Load Cars list success', payload: response}))
    ))
  ))


}
