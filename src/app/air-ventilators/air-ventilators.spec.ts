import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirVentilators } from './air-ventilators';

describe('AirVentilators', () => {
  let component: AirVentilators;
  let fixture: ComponentFixture<AirVentilators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirVentilators]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirVentilators);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
