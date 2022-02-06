import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {CarResponse} from "./state/cars.reducer";
import {CarOrder} from "./state/cars.model";

@Injectable({
  providedIn: 'root'
})

export class CarsService {
  constructor(private http: HttpClient) {
  }

  loadCarList(): Observable<CarResponse> {
    return this.http.get<CarResponse>('https://api.fake.rest/63e5b603-7913-423b-b3e4-b21a631228f8/items/list')
  }

  saveCar(carOrder: CarOrder): Observable<CarResponse> {
    return this.http.post<CarResponse>('https://api.fake.rest/63e5b603-7913-423b-b3e4-b21a631228f8/item/add', carOrder)
  }


}
