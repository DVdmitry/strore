import {AppState} from "../../../state/app.state";
import {createSelector} from "@ngrx/store";


export const carsFeatureSelector = (state: AppState) => state.cars

export const cars = createSelector(
  carsFeatureSelector,
  (carsState) => carsState.data
)

export const car = (id: string | null) => createSelector(
  cars,
  (cars) => cars.find(item => item.id === id)
)
