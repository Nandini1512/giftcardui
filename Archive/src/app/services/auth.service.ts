import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginDTO, UserDTO } from '../interfaces';
import { AlertService } from './alert.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private api: ApiService, private alert: AlertService, private router: Router) { }

  registerCustomer(data: UserDTO) {
    this.api.post('/api/users/register', data).subscribe((res: any) => {
      this.alert.success(res?.message || 'Registration successful.')
    }, this.alert.apiFail);
  }

  loginCustomer(data: LoginDTO) {
    this.api.post('/api/users/login', data).subscribe((res: any) => {
      if (!res?.status) {
        this.alert.error("Wrong credentials");
        return;
      }

      sessionStorage.setItem('SESSION_USERNAME', data.email);
      sessionStorage.setItem('SESSION_USER_DATA', JSON.stringify(res?.data));
      sessionStorage.setItem('SESSION_ROLE', 'CUSTOMER');
      this.router.navigateByUrl("/customer")
    }, this.alert.apiFail);
  }
  loginAdmin(data: LoginDTO) {
    this.api.post('/api/gift-card/admin/login', data).subscribe((res: any) => {
      if (!res?.status) {
        this.alert.error("Wrong credentials");
        return;
      }
      sessionStorage.setItem('SESSION_USERNAME', data.email);
      sessionStorage.setItem('SESSION_ROLE', 'ADMIN');
      this.router.navigateByUrl("/admin")
    }, this.alert.apiFail);
  }

  getLoggedInCustomer() {
    return JSON.parse(sessionStorage.getItem("SESSION_USER_DATA") || '') as UserDTO;
  }

  updatePassword(credentials: any, callback?: () => void) {
    this.api.put(`/api/users/change-password`, credentials).subscribe(res => {
      this.alert.success('Update successful.');
      if (callback) callback();
    }, this.alert.apiFail);
  }


  isLoggedIn() {
    if (sessionStorage.getItem('SESSION_ROLE') && sessionStorage.getItem('SESSION_USERNAME'))
      return true;
    return false;
  }

  isAdmin() {
    if (sessionStorage.getItem('SESSION_ROLE') && sessionStorage.getItem('SESSION_ROLE') === 'ADMIN')
      return true;
    return false;
  }

  isStaff() {
    if (sessionStorage.getItem('SESSION_ROLE') && sessionStorage.getItem('SESSION_ROLE') === 'CUSTOMER')
      return true;
    return false;
  }

}
