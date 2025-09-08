import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperMotor } from './stepper-motor';

describe('StepperMotor', () => {
  let component: StepperMotor;
  let fixture: ComponentFixture<StepperMotor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperMotor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperMotor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
