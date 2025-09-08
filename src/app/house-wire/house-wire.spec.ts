import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseWire } from './house-wire';

describe('HouseWire', () => {
  let component: HouseWire;
  let fixture: ComponentFixture<HouseWire>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseWire]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseWire);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
