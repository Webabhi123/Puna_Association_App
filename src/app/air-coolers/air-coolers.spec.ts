import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirCoolers } from './air-coolers';

describe('AirCoolers', () => {
  let component: AirCoolers;
  let fixture: ComponentFixture<AirCoolers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirCoolers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirCoolers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
