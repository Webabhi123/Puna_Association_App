import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarInverter } from './solar-inverter';

describe('SolarInverter', () => {
  let component: SolarInverter;
  let fixture: ComponentFixture<SolarInverter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolarInverter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolarInverter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
