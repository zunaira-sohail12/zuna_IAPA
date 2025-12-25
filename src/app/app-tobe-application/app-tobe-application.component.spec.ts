import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTobeApplicationComponent } from './app-tobe-application.component';

describe('AppTobeApplicationComponent', () => {
  let component: AppTobeApplicationComponent;
  let fixture: ComponentFixture<AppTobeApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTobeApplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppTobeApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
