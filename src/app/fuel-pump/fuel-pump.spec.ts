import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelPump } from './fuel-pump';

describe('FuelPump', () => {
  let component: FuelPump;
  let fixture: ComponentFixture<FuelPump>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuelPump]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuelPump);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
