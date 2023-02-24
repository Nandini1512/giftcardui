import { Injectable } from '@angular/core';
import { GiftCardDTO } from '../interfaces';
import { AlertService } from './alert.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class GiftcardService {

  constructor(
    private alert: AlertService,
    private api: ApiService
  ) { }

  create(credentials: GiftCardDTO, callback?: () => void) {
    credentials.giftCardId = 0;
    this.api.post(`/api/gift-card/admin/addgiftCard/`, credentials).subscribe(res => {
      this.alert.success('Gift Card creation successful.');
      if (callback) callback();
    }, this.alert.apiFail);
  }

  getAll() {
    return this.api.get(`/api/gift-card`);
  }

  update(payload: GiftCardDTO, callback?: () => void) {
    this.api.put(`/api/gift-card/update-gift-card`, payload).subscribe(res => {
      this.alert.success('Gift Card update successful.');
      if (callback) callback();
    }, this.alert.apiFail);
  }
  delete(gid: number, callback?: () => void) {
    this.api.delete(`/api/gift-card/admin/delete-giftcard/${gid}`).subscribe(res => {
      this.alert.success('Gift Card delete successful.');
      if (callback) callback();
    }, this.alert.apiFail);
  }

  order(payload: any, callback?: () => void) {
    this.api.post(`/api/users/user/place-gift-order`, payload).subscribe(res => {
      this.alert.success('Gift Card ordered successful.');
      if (callback) callback();
    }, this.alert.apiFail);
  }

  getById(gId: number) {
    return this.api.get(`/api/gift-card/get-giftcard-by-id/${gId}`);
  }
  getByName(giftCardName: string) {
    return this.api.get(`/api/gift-card/admin/get-giftCard-Name/${giftCardName}`)
  }
  getOrderByUserId(userId: number) {
    return this.api.get(`/api/users/${userId}/view-order-history`);
  }

  getMyGiftCards(giftReceivedId: number) {
    return this.api.get(`/api/gift-card/receive/getGiftReceivedDetailsById/${giftReceivedId}`);
  }
  getAllPayments() {
    return this.api.get(`/payment/show-payment`);
  }
  payment(payload: any, callback?: () => void) {
    this.api.post(`/payment/addpayment`, payload).subscribe(res => {
      if (callback) callback();
    }, this.alert.apiFail);
  }

  paymentById(input: any) {
    return this.api.get(`/payment/find-payment-by-id/${input}`);
  }
  paymentByCardNumber(input: any) {
    return this.api.get(`/payment/getByCardNumber/${input}`);
  }
  paymentCardName(input: any) {
    return this.api.get(`/payment/getByNameonthecard/${input}`);
  }
  paymentByGiftId(input: any) {
    return this.api.get(`/payment/getByUserGiftId/${input}`);
  }

  allReceived() {
    return this.api.get(`/api/gift-card/receive`);
  }

  updateReceivedGift(data: any, callback?: () => void) {
    this.api.put(`/api/gift-card/receive/updateReceivedDetails`, data).subscribe(res => {
      this.alert.success('Gift Card ordered successful.');
      if (callback) callback();
    }, this.alert.apiFail);
  }
}
