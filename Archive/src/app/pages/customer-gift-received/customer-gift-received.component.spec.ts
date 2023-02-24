import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerGiftReceivedComponent } from './customer-gift-received.component';

describe('CustomerGiftReceivedComponent', () => {
  let component: CustomerGiftReceivedComponent;
  let fixture: ComponentFixture<CustomerGiftReceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerGiftReceivedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerGiftReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
