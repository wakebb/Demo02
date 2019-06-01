import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './projects/modules/services/auth.service'
import { AppGuard } from './app.guard';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './projects/auth/admin-login/admin-login.component';
import { AdminLogoutComponent } from './projects/auth/admin-logout/admin-logout.component';
import { WeatherComponent} from './projects/weather/weather.component';
import { OrderStatusComponent } from './projects/orders/order-status/order-status.component';
import { ShoppingCartComponent } from './projects/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './projects/orders/check-out/check-out.component';
import { GroceryListComponent } from './projects/grocery/grocery-list/grocery-list.component';
import { OrderLookupComponent } from './projects/admin/order-lookup/order-lookup.component';
import { ViewOrderDetailsComponent } from './projects/admin/view-order-details/view-order-details.component';
import { RegisterComponent } from './projects/auth/register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminIndexComponent } from './projects/auth/admin-index/admin-index.component';
import { AddGroceryComponent } from './projects/admin/add-grocery/add-grocery.component';
import { GroceryListDetailComponent } from './projects/grocery/grocery-list/grocery-list-detail/grocery-list-detail.component';
import { ShoppingCartService } from './projects/service/shopping-cart.service'
import { GroShowService } from './projects/service/gro-show.service';
import { OrderLookupDetailComponent } from './projects/admin/order-lookup/order-lookup-detail/order-lookup-detail.component';
import { UserRegisterComponent } from './projects/auth/user-register/user-register.component'
import { OrderDetailService } from './projects/service/order-detail.service'
import {AccordionModule} from 'primeng/accordion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from "primeng/toast";
import {CarouselModule, DropdownModule} from "primeng/primeng";
import {DataViewModule} from "primeng/dataview";
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from "primeng/button";
import {PanelModule} from 'primeng/panel';
import { LoginComponent } from './projects/auth/login/login.component';
import { UserLogoutComponent } from './projects/auth/user-logout/user-logout.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminLogoutComponent,
    OrderStatusComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    GroceryListComponent,
    OrderLookupComponent,
    ViewOrderDetailsComponent,
    RegisterComponent,
    AdminIndexComponent,
    AddGroceryComponent,
    GroceryListDetailComponent,
    OrderLookupDetailComponent,
    UserRegisterComponent,
      WeatherComponent,
      LoginComponent,
      UserLogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AccordionModule,
    BrowserAnimationsModule,
    ToastModule,
    CarouselModule,
    DataViewModule,
    DropdownModule,
    DialogModule,
    ButtonModule,
    PanelModule,
  ],
  providers: [
    AuthService,
    AppGuard,
    GroShowService,
    ShoppingCartService,
    OrderDetailService,


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
