import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCardIssuanceComponent } from './app-card-issuance.component';

describe('AppCardIssuanceComponent', () => {
  let component: AppCardIssuanceComponent;
  let fixture: ComponentFixture<AppCardIssuanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCardIssuanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppCardIssuanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
