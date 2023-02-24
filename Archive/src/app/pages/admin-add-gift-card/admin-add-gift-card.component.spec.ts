import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddGiftCardComponent } from './admin-add-gift-card.component';

describe('AdminAddGiftCardComponent', () => {
  let component: AdminAddGiftCardComponent;
  let fixture: ComponentFixture<AdminAddGiftCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddGiftCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddGiftCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
