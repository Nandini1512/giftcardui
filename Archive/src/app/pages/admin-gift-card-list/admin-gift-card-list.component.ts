import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GiftCardDTO } from 'src/app/interfaces';
import { GiftcardService } from 'src/app/services/giftcard.service';

@Component({
  selector: 'app-admin-gift-card-list',
  templateUrl: './admin-gift-card-list.component.html',
  styleUrls: ['./admin-gift-card-list.component.scss']
})
export class AdminGiftCardListComponent {
  giftCards: GiftCardDTO[] = [];
  selectedGiftCard: GiftCardDTO = {
    giftCardId: 0,
    giftCardName: '',
    aboutGiftCard: '',
    amount: 0,
    brandList: ''
  }
  constructor(
    private gcs: GiftcardService,
  ) { }

  ngOnInit() {
    this.gcs.getAll().subscribe((res: any) => {
      this.giftCards = res.data as GiftCardDTO[];
    })
  }

  onUpdate(item: GiftCardDTO) {
    this.selectedGiftCard = { ...item };
  }
  onDelete(gcId: number) {
    this.gcs.delete(gcId, () => this.ngOnInit());
  }

  onSubmit(ngForm: NgForm) {
    this.gcs.updateReceivedGift(this.selectedGiftCard, () => this.ngOnInit());
  }
}
