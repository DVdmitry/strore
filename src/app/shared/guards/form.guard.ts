import {Injectable} from "@angular/core";
import {CanDeactivate} from "@angular/router";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import {Observable} from "rxjs";
import {AddProductComponent} from "../../features/admin/components/add-product/add-product.component";

@Injectable({
  providedIn: 'root'
})

export class FormGuard implements CanDeactivate<AddProductComponent>{
  canDeactivate(component: AddProductComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(component.productForm.dirty) {
      return confirm('Are you sure');
    }
    return true
  }
}
