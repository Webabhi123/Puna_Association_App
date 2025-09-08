import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServoMotor } from './servo-motor';

describe('ServoMotor', () => {
  let component: ServoMotor;
  let fixture: ComponentFixture<ServoMotor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServoMotor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServoMotor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
