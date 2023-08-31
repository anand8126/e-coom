import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';
import { ArrayComponent } from './array/array.component';
import { HomeComponent } from './home/home.component';
import { SellerComponent } from './seller/seller.component';
import { SellerListComponent } from './seller-list/seller-list.component';
import { DetailsComponent } from './details/details.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { authGuard } from './auth.guard';
import { UserLoginComponent } from './user-login/user-login.component';
import { ServicesComponent } from './services/services.component';
import { SellerUpdateComponent } from './seller-update/seller-update.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'update/:id',
    component: UpdateRestoComponent,
  },
 
  {
    path: 'add',
    component: AddRestoComponent,
  },
  {
    path: 'list',
    component: ListRestoComponent,
  },
  {
    component:ArrayComponent,
    path:'array'
  },
  {
    component:SellerComponent,
    path:'seller'
  },
  {

    component:SellerListComponent,
    path:"seller-list",
    
  },
  {

    component:HomeComponent,
    path:''

  },{
    component:DetailsComponent,
    path:'details/:id'
  },{
    component:SellerLoginComponent,
    path:'seller-login',
    // canActivate:[authGuard]
  },
  {
    component:UserLoginComponent,
    path:'user-login'
  },
  {
    component:ServicesComponent,
    path:'service'
  },
  {
    component:SellerUpdateComponent,
    path:'seller-update'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
