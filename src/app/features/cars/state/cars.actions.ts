import {createAction, props} from "@ngrx/store";
import {Car} from "./cars.model";

export const loadCars = createAction(
  '[Cars] Load car list',
)

export const loadCarsSuccess = createAction(
  '[Cars] Load Cars list success',
  props<{payload: Car[]}>()
)
