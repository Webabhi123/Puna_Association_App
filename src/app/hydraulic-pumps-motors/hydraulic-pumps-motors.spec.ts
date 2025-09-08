import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HydraulicPumpsMotors } from './hydraulic-pumps-motors';

describe('HydraulicPumpsMotors', () => {
  let component: HydraulicPumpsMotors;
  let fixture: ComponentFixture<HydraulicPumpsMotors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HydraulicPumpsMotors]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HydraulicPumpsMotors);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
