import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {CarsService} from "../car-list.service";
import {catchError, EMPTY, map, mergeMap, tap} from "rxjs";

@Injectable()
export class CarsEffects {
  constructor(
    private actions$: Actions,
    private carsService: CarsService
    ) {}

  $loadCarList = createEffect(() => this.actions$.pipe(
    ofType('[Cars] Load car list'),
    mergeMap(() => this.carsService.loadCarList().pipe(
      map((response) => {
        return ({type: '[Cars] Load Cars list success', payload: response})
      }
      )
    )),
    catchError(() => EMPTY)
  ))


}
