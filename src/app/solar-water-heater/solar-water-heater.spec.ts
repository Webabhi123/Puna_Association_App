import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarWaterHeater } from './solar-water-heater';

describe('SolarWaterHeater', () => {
  let component: SolarWaterHeater;
  let fixture: ComponentFixture<SolarWaterHeater>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolarWaterHeater]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolarWaterHeater);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
