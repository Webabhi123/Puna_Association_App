import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialAirCooler } from './industrial-air-cooler';

describe('IndustrialAirCooler', () => {
  let component: IndustrialAirCooler;
  let fixture: ComponentFixture<IndustrialAirCooler>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustrialAirCooler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustrialAirCooler);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
