import {AppState} from "../../../state/app.state";
import {createSelector} from "@ngrx/store";
import {CarResponse} from "./cars.reducer";


export const carsFeatureSelector = (state: AppState) => state.cars

export const cars = createSelector(
  carsFeatureSelector,
  (carsState) => carsState.data
)

// export const car = createSelector(
//   carsFeatureSelector,
//   (carsState: CarResponse, props: any) => {
//     return carsState.data.find(item => item.id === props.id)
//   }
// )

export const car = (id: string | null) => createSelector(
  cars,
  (cars) => cars.find(item => item.id === id)
)
