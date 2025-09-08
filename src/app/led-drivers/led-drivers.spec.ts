import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedDrivers } from './led-drivers';

describe('LedDrivers', () => {
  let component: LedDrivers;
  let fixture: ComponentFixture<LedDrivers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LedDrivers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LedDrivers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
