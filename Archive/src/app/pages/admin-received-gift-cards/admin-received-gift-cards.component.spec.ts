import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReceivedGiftCardsComponent } from './admin-received-gift-cards.component';

describe('AdminReceivedGiftCardsComponent', () => {
  let component: AdminReceivedGiftCardsComponent;
  let fixture: ComponentFixture<AdminReceivedGiftCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminReceivedGiftCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminReceivedGiftCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
