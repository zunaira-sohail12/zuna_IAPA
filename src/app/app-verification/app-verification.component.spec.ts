import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppVerificationComponent } from './app-verification.component';

describe('AppVerificationComponent', () => {
  let component: AppVerificationComponent;
  let fixture: ComponentFixture<AppVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppVerificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
