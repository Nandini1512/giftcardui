import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GiftcardService } from 'src/app/services/giftcard.service';

@Component({
  selector: 'app-admin-received-gift-cards',
  templateUrl: './admin-received-gift-cards.component.html',
  styleUrls: ['./admin-received-gift-cards.component.scss']
})
export class AdminReceivedGiftCardsComponent {
  orders: any[] = [];
  selectedGiftCard: any = {
    giftCardReceivedDate: '',
    receiverAddress: '',
  };

  constructor(private gcs: GiftcardService,) { }

  ngOnInit() {
    this.gcs.allReceived().subscribe((res: any) => {
      this.orders = res?.data as any[];
    })
  }

  onUpdate(item: any) {
    this.selectedGiftCard = { ...item };
  }
  onSubmit(ngForm: NgForm) {


    this.gcs.update({
      ...this.selectedGiftCard, userGiftId: this.selectedGiftCard?.userGiftDetails?.userGiftId, userId: this.selectedGiftCard?.user?.userId,

    }, () => this.ngOnInit());
  }
}
