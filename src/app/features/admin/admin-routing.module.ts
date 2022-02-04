import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AdminComponent} from "./pages/admin/admin.component";
import {AddUserComponent} from "./components/add-user/add-user.component";
import {AddProductComponent} from "./components/add-product/add-product.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {path: 'add-user', component: AddUserComponent},
      {path: 'add-product', component: AddProductComponent}
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})

export class AdminRoutingModule {}
