import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {catchError, EMPTY, Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {CarResponse} from "../state/cars.reducer";
import {car} from "../state/cars.selector";
import {Car} from "../state/cars.model";

@Injectable({
  providedIn: 'root'
})

export class CarResolver implements Resolve<Car | undefined> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Car | undefined> {
    return this.store.pipe(
      select(car(route.paramMap.get('id'))),
      catchError(() => {
        this.router.navigate([''])
        return EMPTY
      })
    )
  }

  constructor(
    private store: Store<{cars: CarResponse}>,
    private router: Router
  ) {
  }
}
