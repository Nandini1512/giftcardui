import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GiftCardDTO, GiftCardOrderDTO, UserDTO } from 'src/app/interfaces';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { GiftcardService } from 'src/app/services/giftcard.service';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-customer-gift-order',
  templateUrl: './customer-gift-order.component.html',
  styleUrls: ['./customer-gift-order.component.scss']
})
export class CustomerGiftOrderComponent {

  constructor(
    private gcs: GiftcardService,
    private alert: AlertService,
    private auth: AuthService
  ) { }
  giftCards: GiftCardDTO[] = [];
  selectedUser: UserDTO | undefined;

  selectedGiftCard: GiftCardDTO = {
    giftCardId: 0,
    giftCardName: '',
    aboutGiftCard: '',
    amount: 0,
    brandList: ''
  }
  ngOnInit() {
    this.gcs.getAll().subscribe((res: any) => {
      this.giftCards = res.data as GiftCardDTO[];
    });
    this.selectedUser = this.auth.getLoggedInCustomer();
  }

  onSubmit(ngForm: NgForm) {

    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }

    const { cardExpiry, cardNumber, cvv, nameonthecard, ...otherAll } = ngForm.form.value;

    const credentials: GiftCardOrderDTO = otherAll;
    credentials.giftCard = { ...this.selectedGiftCard };
    credentials.reloadable = true;
    credentials.scheduledelivaryDate = dayjs().format('DD/MM/YYYY');
    credentials.giftCardIssueDate = dayjs().format('DD/MM/YYYY');
    credentials.userId = this.selectedUser?.userId || 0;
    const paymentReq = {
      cardExpiry: cardExpiry,
      cardNumber,
      cvv,
      nameonthecard,
      paymentAmount: credentials.giftCard.amount,
      paymentDate: dayjs().format('YYYY-MM-DD'),
      paymentId: 0,
      userGiftId: credentials.giftCard.giftCardId,
      users: this.selectedUser
    }
    this.gcs.payment(paymentReq, () => this.gcs.order(credentials));
    ngForm.resetForm();
  }

  applyThisGiftCard(item: GiftCardDTO) {
    this.selectedGiftCard = { ...item };
  }

  giftByName(ngForm: NgForm) {
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }
    const { giftName } = ngForm.form.value;
    this.gcs.getByName(giftName).subscribe((res: any) => {
      this.giftCards = res as GiftCardDTO[];
    }, this.alert.apiFail);
  }
  giftById(ngForm: NgForm) {

    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }
    const { gId } = ngForm.form.value;
    console.log(ngForm.form.value);

    this.gcs.getById(gId as number).subscribe((res: any) => {
      this.giftCards = [res] as GiftCardDTO[];
    }, this.alert.apiFail);
  }


}

