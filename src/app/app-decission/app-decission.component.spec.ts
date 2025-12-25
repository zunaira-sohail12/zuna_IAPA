import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDecissionComponent } from './app-decission.component';

describe('AppDecissionComponent', () => {
  let component: AppDecissionComponent;
  let fixture: ComponentFixture<AppDecissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDecissionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppDecissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
