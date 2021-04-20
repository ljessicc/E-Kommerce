import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ProductComponent } from './product/product.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';

// guards the admin page
import { AuthGuard } from './shared/auth.guard';




const routes: Routes = [
  // enters directly to product page on entering the website or when the url is empty
  { path:'', redirectTo:'product', pathMatch:'full'},
  //.....................................................

  { path:'login', component:LoginComponent},
  { path: 'product', component: ProductComponent },

  // guards the admin page
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  //.....................................................

  { path: 'users', component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
