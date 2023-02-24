import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/layouts/admin/admin.component';
import { BasicComponent } from './pages/layouts/basic/basic.component';
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from './pages/register/register.component';


import { AuthGuard } from './gurds/auth.guard';
import { AdminGuard } from './gurds/admin.guard';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminCustomerListComponent } from './pages/admin-customer-list/admin-customer-list.component';
import { CustomerProfileComponent } from './pages/customer-profile/customer-profile.component';
import { AdminAddGiftCardComponent } from './pages/admin-add-gift-card/admin-add-gift-card.component';
import { AdminGiftCardListComponent } from './pages/admin-gift-card-list/admin-gift-card-list.component';
import { AdminPaymentListComponent } from './pages/admin-payment-list/admin-payment-list.component';
import { CustomerLayoutComponent } from './pages/layouts/customer-layout/customer-layout.component';
import { CustomerGiftOrderComponent } from './pages/customer-gift-order/customer-gift-order.component';
import { CustomerOrderHistoryComponent } from './pages/customer-order-history/customer-order-history.component';
import { CustomerGiftReceivedComponent } from './pages/customer-gift-received/customer-gift-received.component';
import { AdminReceivedGiftCardsComponent } from './pages/admin-received-gift-cards/admin-received-gift-cards.component';


const routes: Routes = [

  {
    path: '',
    component: BasicComponent,
    // pathMatch: 'full',
    children: [
      {
        path: '',
        component: HomeComponent
      },

      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'admin-login',
        component: AdminLoginComponent
      },

    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    // canActivate: [AuthGuard, AdminGuard],
    // canActivateChild: [AuthGuard, AdminGuard],
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'customers',
        component: AdminCustomerListComponent
      },
      {
        path: 'add-gift-card',
        component: AdminAddGiftCardComponent
      },
      {
        path: 'gift-card-list',
        component: AdminGiftCardListComponent
      },
      {
        path: 'payments',
        component: AdminPaymentListComponent
      },
      {
        path: 'r-gifts',
        component: AdminReceivedGiftCardsComponent
      },

    ]
  },
  {
    path: 'customer',
    component: CustomerLayoutComponent,
    // canActivate: [AuthGuard, StaffGuard],
    // canActivateChild: [AuthGuard, StaffGuard],
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'profile',
        component: CustomerProfileComponent
      },
      {
        path: 'gift-order',
        component: CustomerGiftOrderComponent
      },

      {
        path: 'order-history',
        component: CustomerOrderHistoryComponent
      },
      {
        path: 'order-received',
        component: CustomerGiftReceivedComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
