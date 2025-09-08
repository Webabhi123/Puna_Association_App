import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorStarters } from './motor-starters';

describe('MotorStarters', () => {
  let component: MotorStarters;
  let fixture: ComponentFixture<MotorStarters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotorStarters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorStarters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
