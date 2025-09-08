import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RailwayTransportData } from './railway-transport-data';

describe('RailwayTransportData', () => {
  let component: RailwayTransportData;
  let fixture: ComponentFixture<RailwayTransportData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RailwayTransportData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RailwayTransportData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
