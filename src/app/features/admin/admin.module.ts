import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AdminComponent} from "./pages/admin/admin.component";
import {AdminRoutingModule} from "./admin-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import { AddUserComponent } from './components/add-user/add-user.component';
import {AddProductComponent} from "./components/add-product/add-product.component";
import {RouterModule} from "@angular/router";
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    AdminRoutingModule,
    MatDialogModule,
  ],
  declarations: [
    AdminComponent,
    AddUserComponent,
    AddProductComponent,
    ConfirmDialogComponent
  ]
})

export class AdminModule {}
