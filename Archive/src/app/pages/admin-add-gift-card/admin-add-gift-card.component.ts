import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GiftCardDTO } from 'src/app/interfaces';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';
import { GiftcardService } from 'src/app/services/giftcard.service';

@Component({
  selector: 'app-admin-add-gift-card',
  templateUrl: './admin-add-gift-card.component.html',
  styleUrls: ['./admin-add-gift-card.component.scss']
})
export class AdminAddGiftCardComponent {
  constructor(
    private alert: AlertService,
    private gcService: GiftcardService,

  ) { }


  onSubmit(ngForm: NgForm) {
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }
    const credentials: GiftCardDTO = ngForm.form.value;
    this.gcService.create(credentials);
    ngForm.resetForm();
  }
}
