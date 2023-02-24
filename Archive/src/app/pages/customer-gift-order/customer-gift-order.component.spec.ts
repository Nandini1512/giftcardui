import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerGiftOrderComponent } from './customer-gift-order.component';

describe('CustomerGiftOrderComponent', () => {
  let component: CustomerGiftOrderComponent;
  let fixture: ComponentFixture<CustomerGiftOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerGiftOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerGiftOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
