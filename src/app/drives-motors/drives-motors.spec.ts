import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivesMotors } from './drives-motors';

describe('DrivesMotors', () => {
  let component: DrivesMotors;
  let fixture: ComponentFixture<DrivesMotors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrivesMotors]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrivesMotors);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
