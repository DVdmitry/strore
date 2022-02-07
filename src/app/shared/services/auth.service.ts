import {Injectable} from "@angular/core";
import {delay, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoggedIn(): Observable<boolean> {
    return of(true).pipe(
      delay(1000)
    )
  }

}
