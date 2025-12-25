import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInternalCheckComponent } from './app-internal-check.component';

describe('AppInternalCheckComponent', () => {
  let component: AppInternalCheckComponent;
  let fixture: ComponentFixture<AppInternalCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppInternalCheckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppInternalCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
