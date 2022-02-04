import {createReducer, on} from "@ngrx/store";
import {loadCarsSuccess} from "./cars.actions";
import {Car} from "./cars.model";

export interface CarResponse {
  result: boolean
  data: Car[]
}

export const initialState: CarResponse = {
  result: false,
  data: []
}

const _carsReducer = createReducer(
  initialState,
  on(loadCarsSuccess, (state, { payload } ) => ({
      ...state, ...payload
    }
)))

export function carsReducer(state: any, actions: any) {
  return _carsReducer(state, actions)
}
