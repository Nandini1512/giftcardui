import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGiftCardListComponent } from './admin-gift-card-list.component';

describe('AdminGiftCardListComponent', () => {
  let component: AdminGiftCardListComponent;
  let fixture: ComponentFixture<AdminGiftCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGiftCardListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGiftCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
