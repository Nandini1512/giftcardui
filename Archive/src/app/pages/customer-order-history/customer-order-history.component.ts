import { Component } from '@angular/core';
import { UserDTO } from 'src/app/interfaces';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { GiftcardService } from 'src/app/services/giftcard.service';

@Component({
  selector: 'app-customer-order-history',
  templateUrl: './customer-order-history.component.html',
  styleUrls: ['./customer-order-history.component.scss']
})
export class CustomerOrderHistoryComponent {
  orders: any[] = [];
  selectedUser: UserDTO | undefined;
  constructor(private gcs: GiftcardService,
    private alert: AlertService,
    private auth: AuthService) { }

  ngOnInit() {
    this.selectedUser = this.auth.getLoggedInCustomer();
    this.gcs.getOrderByUserId(this.selectedUser.userId).subscribe((res: any) => {
      this.orders = res?.data as any[];
    })

  }
}

