import { Component } from '@angular/core';
import { UserDTO } from 'src/app/interfaces';

import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-customer-list',
  templateUrl: './admin-customer-list.component.html',
  styleUrls: ['./admin-customer-list.component.scss']
})
export class AdminCustomerListComponent {
  public customers: UserDTO[] = [];
  constructor(
    private adminService: AdminService,
  ) { }
  ngOnInit() {
    this.adminService.getAllCustomers().subscribe((res: any) => {
      this.customers = res.data as UserDTO[];
    });
  }


}
