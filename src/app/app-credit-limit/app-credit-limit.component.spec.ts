import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCreditLimitComponent } from './app-credit-limit.component';

describe('AppCreditLimitComponent', () => {
  let component: AppCreditLimitComponent;
  let fixture: ComponentFixture<AppCreditLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCreditLimitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppCreditLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
