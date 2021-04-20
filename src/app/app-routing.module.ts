import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ProductComponent } from './product/product.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component';



const routes: Routes = [
  // enters directly to product page on entering the website or when the url is empty
  { path:'', redirectTo:'product', pathMatch:'full'},
  //.....................................................
  { path: 'product', component: ProductComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'users', component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
