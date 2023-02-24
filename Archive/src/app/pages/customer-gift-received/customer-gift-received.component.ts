import { Component } from '@angular/core';
import { UserDTO } from 'src/app/interfaces';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { GiftcardService } from 'src/app/services/giftcard.service';

@Component({
  selector: 'app-customer-gift-received',
  templateUrl: './customer-gift-received.component.html',
  styleUrls: ['./customer-gift-received.component.scss']
})
export class CustomerGiftReceivedComponent {
  orders: any[] = [];
  selectedUser: UserDTO | undefined;
  constructor(private gcs: GiftcardService,
    private auth: AuthService) { }

  ngOnInit() {
    this.selectedUser = this.auth.getLoggedInCustomer();
    this.gcs.getMyGiftCards(this.selectedUser.userId).subscribe((res: any) => {
      this.orders = [res?.userGiftDetails] as any[];
    })

  }
}
