import {Injectable} from "@angular/core";
import {CanLoad, Route, UrlSegment} from "@angular/router";

import { UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})

export class LoadGuard implements CanLoad {
  constructor(private auth: AuthService) {
  }
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.isLoggedIn()
  }
}
