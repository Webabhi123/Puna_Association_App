import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusTransportData } from './bus-transport-data';

describe('BusTransportData', () => {
  let component: BusTransportData;
  let fixture: ComponentFixture<BusTransportData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusTransportData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusTransportData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
