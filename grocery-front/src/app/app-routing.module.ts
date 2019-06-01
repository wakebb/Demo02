import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppGuard } from './app.guard';
import { OrderLookupComponent } from './projects/admin/order-lookup/order-lookup.component';
import { WeatherComponent} from './projects/weather/weather.component';

import { CheckOutComponent } from './projects/orders/check-out/check-out.component';
import { OrderStatusComponent } from './projects/orders/order-status/order-status.component';

import {GroceryListComponent} from './projects/grocery/grocery-list/grocery-list.component';
import { ShoppingCartComponent } from './projects/shopping-cart/shopping-cart.component';
import { AdminLoginComponent } from './projects/auth/admin-login/admin-login.component'
import { RegisterComponent } from './projects/auth/register/register.component';
import { AddGroceryComponent } from './projects/admin/add-grocery/add-grocery.component';
import { AdminLogoutComponent } from './projects/auth/admin-logout/admin-logout.component';
import { GroceryListDetailComponent } from './projects/grocery/grocery-list/grocery-list-detail/grocery-list-detail.component';
import {UserRegisterComponent} from "./projects/auth/user-register/user-register.component";
import {OrderLookupDetailComponent} from './projects/admin/order-lookup/order-lookup-detail/order-lookup-detail.component'
import {LoginComponent} from "./projects/auth/login/login.component";
import {UserLogoutComponent} from "./projects/auth/user-logout/user-logout.component";

const routes: Routes = [
  {
    path: 'admin',
    component: AdminLoginComponent,
    children : [
      {
        path: 'orderAll',
        component: OrderLookupComponent
      },
      {
        path: 'orderAll/detail',
        component: OrderLookupDetailComponent
      },
      {
        path: 'regist-admin',
        component: RegisterComponent
      },
      {
        path: 'logout',
        component: AdminLogoutComponent
      },
      {
        path: 'addGrocery',
        component: AddGroceryComponent
      }
    ]
  },
  {
    path: 'weather',
    component: WeatherComponent
  },
  {
    path: 'orders/placed',
    component: OrderStatusComponent
  },
  {
    path: 'grocery/detail/:id',
    component: GroceryListDetailComponent
  },

  {
    path: 'grocery',
    component: GroceryListComponent
  },
  {
    path: 'cart',
    component: ShoppingCartComponent,
  },
  {
    path: 'cart/confirm',
    component: CheckOutComponent
  },
  {
    path: 'user/register',
    component: UserRegisterComponent
  },
  {
    path: 'user/register',
    component: UserRegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: UserLogoutComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
