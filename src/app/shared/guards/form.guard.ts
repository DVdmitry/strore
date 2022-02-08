import {Injectable} from "@angular/core";
import {CanDeactivate} from "@angular/router";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import {Observable, of} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "../../features/admin/components/confirm-dialog/confirm-dialog.component";
import {SaveDataInterface} from "./save-data.interface";

@Injectable({
  providedIn: 'root'
})

export class FormGuard implements CanDeactivate<SaveDataInterface>{
  constructor(private dialog: MatDialog) {
  }
  canDeactivate(component: SaveDataInterface, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!component.isDataSaved()) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent)
      return dialogRef.afterClosed()
    }
    return of(true)
  }
}
