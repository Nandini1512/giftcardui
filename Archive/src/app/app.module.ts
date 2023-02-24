import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from 'src/material.module';
import { FormsModule } from '@angular/forms';
import { AlertService } from './services/alert.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { BasicComponent } from './pages/layouts/basic/basic.component';
import { AdminComponent } from './pages/layouts/admin/admin.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminCustomerListComponent } from './pages/admin-customer-list/admin-customer-list.component';
import { AdminService } from './services/admin.service';
import { CustomerProfileComponent } from './pages/customer-profile/customer-profile.component';
import { AdminAddGiftCardComponent } from './pages/admin-add-gift-card/admin-add-gift-card.component';
import { AdminGiftCardListComponent } from './pages/admin-gift-card-list/admin-gift-card-list.component';
import { GiftcardService } from './services/giftcard.service';
import { AdminPaymentListComponent } from './pages/admin-payment-list/admin-payment-list.component';
import { CustomerLayoutComponent } from './pages/layouts/customer-layout/customer-layout.component';
import { CustomerGiftOrderComponent } from './pages/customer-gift-order/customer-gift-order.component';
import { CustomerOrderHistoryComponent } from './pages/customer-order-history/customer-order-history.component';
import { CustomerGiftReceivedComponent } from './pages/customer-gift-received/customer-gift-received.component';
import { AdminReceivedGiftCardsComponent } from './pages/admin-received-gift-cards/admin-received-gift-cards.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BasicComponent,
    AdminComponent,
    AdminLoginComponent,
    AdminCustomerListComponent,
    CustomerProfileComponent,
    AdminAddGiftCardComponent,
    AdminGiftCardListComponent,
    AdminPaymentListComponent,
    CustomerLayoutComponent,
    CustomerGiftOrderComponent,
    CustomerOrderHistoryComponent,
    CustomerGiftReceivedComponent,
    AdminReceivedGiftCardsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialExampleModule,
    BrowserAnimationsModule
  ],
  providers: [
    AlertService,
    ApiService,
    AuthService,
    AdminService,
    GiftcardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
