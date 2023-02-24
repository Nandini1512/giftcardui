import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent {

  public currentLoggedInUser: any;

  constructor(
    private alert: AlertService,
    private auth: AuthService,
  ) { }

  ngOnInit() {
    this.currentLoggedInUser = this.auth.getLoggedInCustomer();

  }

  onSubmit(ngForm: NgForm) {

    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }

    const { email, oldPassword, newPassword, ...customerData } = ngForm.form.value;

    this.auth.updatePassword({
      email,
      oldPassword,
      newPassword
    });

  }



}
