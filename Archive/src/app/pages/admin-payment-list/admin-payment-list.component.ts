import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { AlertService } from 'src/app/services/alert.service';
import { GiftcardService } from 'src/app/services/giftcard.service';

@Component({
  selector: 'app-admin-payment-list',
  templateUrl: './admin-payment-list.component.html',
  styleUrls: ['./admin-payment-list.component.scss']
})
export class AdminPaymentListComponent {
  public paymentList: any[] = [];
  constructor(
    private adminService: AdminService,
    private gcs: GiftcardService,
    private alert: AlertService
  ) { }
  ngOnInit() {
    this.gcs.getAllPayments().subscribe((res: any) => {
      this.paymentList = res as any[];
    });
  }

  paymentById(ngForm: NgForm) {
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }
    const { paymentId } = ngForm.form.value;
    this.gcs.paymentById(paymentId).subscribe((res: any) => {
      this.paymentList = [res] as any[];
    }, this.alert.apiFail);
  }
  paymentByCardNumber(ngForm: NgForm) {
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }
    const { cardNumber } = ngForm.form.value;
    this.gcs.paymentByCardNumber(cardNumber).subscribe((res: any) => {
      this.paymentList = [res] as any[];
    }, this.alert.apiFail);
  }
  paymentCardName(ngForm: NgForm) {
    console.log(ngForm)
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }
    const { nameOnCard } = ngForm.form.value;
    this.gcs.paymentCardName(nameOnCard).subscribe((res: any) => {
      this.paymentList = res as any[];
    }, this.alert.apiFail);
  }
  paymentByGiftId(ngForm: NgForm) {
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }
    const { gId } = ngForm.form.value;
    this.gcs.paymentByGiftId(gId).subscribe((res: any) => {
      this.paymentList = res as any[];
    }, this.alert.apiFail);
  }
}
