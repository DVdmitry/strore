import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'admin', loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule)},
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)},
  { path: 'cars', loadChildren: () => import('./features/cars/car.module').then(m => m.CarModule)},
  { path: 'about', loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule)}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // enableTracing: true,
    // preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
