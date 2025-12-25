import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCardDispatchComponent } from './app-card-dispatch.component';

describe('AppCardDispatchComponent', () => {
  let component: AppCardDispatchComponent;
  let fixture: ComponentFixture<AppCardDispatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCardDispatchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppCardDispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
