import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AdminComponent} from "./pages/admin/admin.component";
import {AddUserComponent} from "./components/add-user/add-user.component";
import {AddProductComponent} from "./components/add-product/add-product.component";
import {PermissionGuard} from "../../shared/guards/permission.guard";
import {FormGuard} from "../../shared/guards/form.guard";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        canActivateChild: [PermissionGuard],
        children: [
          {
            path: 'add-user',
            canDeactivate: [FormGuard],
            component: AddUserComponent
          },
        ]
      },
      {
        path: 'add-product',
        canDeactivate: [FormGuard],
        component: AddProductComponent}
    ]

  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})

export class AdminRoutingModule {}
