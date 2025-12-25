import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCardAssesmentComponent } from './app-card-assesment.component';

describe('AppCardAssesmentComponent', () => {
  let component: AppCardAssesmentComponent;
  let fixture: ComponentFixture<AppCardAssesmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCardAssesmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppCardAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
