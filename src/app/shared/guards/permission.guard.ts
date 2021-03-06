import {Injectable} from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import {map, Observable} from "rxjs";
import {AuthService} from "../services/auth.service";


@Injectable({
  providedIn: 'root'
})

export class PermissionGuard implements CanActivateChild {
  constructor(private authService: AuthService) {
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.hasPermission()
  }
}
