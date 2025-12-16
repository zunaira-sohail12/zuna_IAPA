import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationCompComponent } from './application-comp.component';

describe('ApplicationCompComponent', () => {
  let component: ApplicationCompComponent;
  let fixture: ComponentFixture<ApplicationCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplicationCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
