import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardActivationCompComponent } from './card-activation-comp.component';

describe('CardActivationCompComponent', () => {
  let component: CardActivationCompComponent;
  let fixture: ComponentFixture<CardActivationCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardActivationCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardActivationCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
